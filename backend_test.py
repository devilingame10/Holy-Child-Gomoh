import requests
import sys
from datetime import datetime
import json

class CampusLinkAPITester:
    def __init__(self, base_url="https://campuslink-101.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.token = None
        self.tests_run = 0
        self.tests_passed = 0
        self.user_id = None

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        test_headers = {'Content-Type': 'application/json'}
        
        if self.token:
            test_headers['Authorization'] = f'Bearer {self.token}'
        
        if headers:
            test_headers.update(headers)

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=test_headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=test_headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=test_headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=test_headers, timeout=10)

            print(f"   Status: {response.status_code}")
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                    return True, response_data
                except:
                    return True, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error: {error_data}")
                except:
                    print(f"   Error: {response.text}")
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_user_registration(self):
        """Test user registration"""
        test_data = {
            "email": "testparent@school.com",
            "password": "Test123!",
            "name": "Test Parent"
        }
        
        success, response = self.run_test(
            "User Registration",
            "POST",
            "auth/register",
            200,
            data=test_data
        )
        
        if success and 'token' in response:
            self.token = response['token']
            if 'user' in response:
                self.user_id = response['user'].get('id')
            print(f"   Token received: {self.token[:20]}...")
            return True
        return False

    def test_user_login(self):
        """Test user login"""
        test_data = {
            "email": "testparent@school.com",
            "password": "Test123!"
        }
        
        success, response = self.run_test(
            "User Login",
            "POST",
            "auth/login",
            200,
            data=test_data
        )
        
        if success and 'token' in response:
            self.token = response['token']
            if 'user' in response:
                self.user_id = response['user'].get('id')
            print(f"   Login token: {self.token[:20]}...")
            return True
        return False

    def test_get_current_user(self):
        """Test get current user with token"""
        if not self.token:
            print("❌ No token available for authentication test")
            return False
            
        success, response = self.run_test(
            "Get Current User",
            "GET",
            "auth/me",
            200
        )
        return success

    def test_get_announcements(self):
        """Test get announcements (public endpoint)"""
        success, response = self.run_test(
            "Get Announcements",
            "GET",
            "announcements",
            200
        )
        return success

    def test_contact_form_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test Contact",
            "email": "testcontact@school.com",
            "phone": "1234567890",
            "message": "This is a test contact message from automated testing."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )
        return success

    def test_create_announcement(self):
        """Test creating announcement (admin functionality)"""
        test_data = {
            "title": "Test Announcement",
            "content": "This is a test announcement created during automated testing.",
            "category": "general"
        }
        
        success, response = self.run_test(
            "Create Announcement",
            "POST",
            "announcements",
            200,
            data=test_data
        )
        return success

def main():
    print("🚀 Starting CampusLink API Tests...")
    print("=" * 50)
    
    # Setup
    tester = CampusLinkAPITester()
    
    # Test sequence
    print("\n📝 Testing User Registration...")
    if not tester.test_user_registration():
        print("⚠️  Registration failed, trying login with existing user...")
        if not tester.test_user_login():
            print("❌ Both registration and login failed, stopping tests")
            return 1

    print("\n🔐 Testing Authentication...")
    tester.test_get_current_user()

    print("\n📢 Testing Public Endpoints...")
    tester.test_get_announcements()

    print("\n📞 Testing Contact Form...")
    tester.test_contact_form_submission()

    print("\n📝 Testing Announcement Creation...")
    tester.test_create_announcement()

    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print(f"⚠️  {tester.tests_run - tester.tests_passed} tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())