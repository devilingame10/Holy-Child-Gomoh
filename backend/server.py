from fastapi import FastAPI, APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
import bcrypt
import jwt

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")
security = HTTPBearer()

JWT_SECRET = os.environ.get('JWT_SECRET')
if not JWT_SECRET:
    raise ValueError("JWT_SECRET environment variable is not set")
JWT_ALGORITHM = 'HS256'

class User(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    name: str
    role: str = "parent"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class UserRegister(BaseModel):
    email: EmailStr
    password: str
    name: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Student(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    class_name: str
    roll_number: str
    parent_id: str
    date_of_birth: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StudentCreate(BaseModel):
    name: str
    class_name: str
    roll_number: str
    date_of_birth: str

class FeeRecord(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    student_id: str
    amount: float
    due_date: str
    status: str = "pending"
    paid_date: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class Announcement(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    content: str
    date: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    category: str = "general"

class AnnouncementCreate(BaseModel):
    title: str
    content: str
    category: str = "general"

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str

def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))

def create_token(user_id: str, email: str) -> str:
    payload = {
        'user_id': user_id,
        'email': email,
        'exp': datetime.now(timezone.utc) + timedelta(days=7)
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        payload = jwt.decode(credentials.credentials, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        user = await db.users.find_one({"email": payload['email']}, {"_id": 0})
        if not user:
            raise HTTPException(status_code=401, detail="User not found")
        return User(**user)
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")

@api_router.post("/auth/register")
async def register(input: UserRegister):
    existing = await db.users.find_one({"email": input.email}, {"_id": 0})
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    user = User(email=input.email, name=input.name)
    user_dict = user.model_dump()
    user_dict['password'] = hash_password(input.password)
    user_dict['created_at'] = user_dict['created_at'].isoformat()
    
    await db.users.insert_one(user_dict)
    token = create_token(user.id, user.email)
    
    return {"token": token, "user": user}

@api_router.post("/auth/login")
async def login(input: UserLogin):
    user_dict = await db.users.find_one({"email": input.email}, {"_id": 0})
    if not user_dict or not verify_password(input.password, user_dict['password']):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    user = User(**user_dict)
    token = create_token(user.id, user.email)
    
    return {"token": token, "user": user}

@api_router.get("/auth/me", response_model=User)
async def get_me(current_user: User = Depends(get_current_user)):
    return current_user

@api_router.get("/students", response_model=List[Student])
async def get_students(current_user: User = Depends(get_current_user)):
    students = await db.students.find({"parent_id": current_user.id}, {"_id": 0}).to_list(100)
    for student in students:
        if isinstance(student.get('created_at'), str):
            student['created_at'] = datetime.fromisoformat(student['created_at'])
    return students

@api_router.post("/students", response_model=Student)
async def create_student(input: StudentCreate, current_user: User = Depends(get_current_user)):
    student = Student(**input.model_dump(), parent_id=current_user.id)
    doc = student.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.students.insert_one(doc)
    return student

@api_router.get("/fees/{student_id}", response_model=List[FeeRecord])
async def get_student_fees(student_id: str, current_user: User = Depends(get_current_user)):
    student = await db.students.find_one({"id": student_id, "parent_id": current_user.id}, {"_id": 0})
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    
    fees = await db.fees.find({"student_id": student_id}, {"_id": 0}).to_list(100)
    for fee in fees:
        if isinstance(fee.get('created_at'), str):
            fee['created_at'] = datetime.fromisoformat(fee['created_at'])
    return fees

@api_router.get("/announcements", response_model=List[Announcement])
async def get_announcements():
    announcements = await db.announcements.find({}, {"_id": 0}).sort("date", -1).limit(10).to_list(10)
    for announcement in announcements:
        if isinstance(announcement.get('date'), str):
            announcement['date'] = datetime.fromisoformat(announcement['date'])
    return announcements

@api_router.post("/announcements", response_model=Announcement)
async def create_announcement(input: AnnouncementCreate):
    announcement = Announcement(**input.model_dump())
    doc = announcement.model_dump()
    doc['date'] = doc['date'].isoformat()
    await db.announcements.insert_one(doc)
    return announcement

@api_router.post("/contact")
async def submit_contact(input: ContactMessageCreate):
    message = ContactMessage(**input.model_dump())
    doc = message.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_messages.insert_one(doc)
    return {"message": "Thank you for contacting us. We'll get back to you soon!"}

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()