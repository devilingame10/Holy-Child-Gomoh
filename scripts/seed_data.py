import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from datetime import datetime, timezone

async def seed_data():
    mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ.get('DB_NAME', 'test_database')]
    
    # Seed announcements
    announcements = [
        {
            'id': 'ann1',
            'title': 'Annual Sports Day - March 15th',
            'content': 'Join us for our annual sports day celebration. All parents are invited to attend and cheer for their children!',
            'date': datetime.now(timezone.utc).isoformat(),
            'category': 'event'
        },
        {
            'id': 'ann2',
            'title': 'Parent-Teacher Meeting',
            'content': 'The next parent-teacher meeting is scheduled for March 20th. Please check your email for the exact timing.',
            'date': datetime.now(timezone.utc).isoformat(),
            'category': 'meeting'
        },
        {
            'id': 'ann3',
            'title': 'Spring Break Notice',
            'content': 'School will be closed from March 25th to April 1st for spring break. Classes resume on April 2nd.',
            'date': datetime.now(timezone.utc).isoformat(),
            'category': 'general'
        }
    ]
    
    # Clear existing announcements
    await db.announcements.delete_many({})
    
    # Insert new announcements
    if announcements:
        await db.announcements.insert_many(announcements)
        print(f"✓ Seeded {len(announcements)} announcements")
    
    print("✓ Database seeded successfully!")
    client.close()

if __name__ == '__main__':
    asyncio.run(seed_data())
