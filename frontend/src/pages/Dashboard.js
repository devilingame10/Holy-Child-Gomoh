import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { getAuthHeaders, isAuthenticated } from '@/utils/auth';
import { toast } from 'sonner';
import {
  User,
  GraduationCap,
  DollarSign,
  CalendarDays,
  Bell,
  LogOut,
  BookOpen,
  TrendingUp,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [students, setStudents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const [userRes, studentsRes, announcementsRes] = await Promise.all([
        axios.get(`${API}/auth/me`, getAuthHeaders()),
        axios.get(`${API}/students`, getAuthHeaders()),
        axios.get(`${API}/announcements`),
      ]);
      setUser(userRes.data);
      setStudents(studentsRes.data);
      setAnnouncements(announcementsRes.data);
    } catch (error) {
      toast.error('Failed to load data');
      if (error.response?.status === 401) {
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-muted/30" data-testid="dashboard-page">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border hidden md:flex flex-col" data-testid="dashboard-sidebar">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-foreground">CampusLink</h2>
              <p className="text-xs text-muted-foreground">Parent Portal</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4">
          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium" data-testid="nav-dashboard">
              <User className="w-5 h-5" />
              Dashboard
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
              <BookOpen className="w-5 h-5" />
              Students
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
              <DollarSign className="w-5 h-5" />
              Fee Payment
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
              <Bell className="w-5 h-5" />
              Announcements
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-white font-medium">{user?.name?.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground text-sm">{user?.name}</div>
              <div className="text-xs text-muted-foreground truncate">{user?.email}</div>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full rounded-full"
            data-testid="sidebar-logout-btn"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              Welcome back, {user?.name}! 👋
            </h1>
            <p className="text-muted-foreground">Here's what's happening with your child's education</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-testid="stats-cards">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-white"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-white/80 text-sm mb-1">Enrolled Students</p>
                  <p className="text-3xl font-heading font-bold">{students.length}</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-6 text-white"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-white/80 text-sm mb-1">Attendance Rate</p>
                  <p className="text-3xl font-heading font-bold">95%</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <CalendarDays className="w-6 h-6" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-6 text-secondary-foreground"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="opacity-80 text-sm mb-1">Pending Fees</p>
                  <p className="text-3xl font-heading font-bold">$0</p>
                </div>
                <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Avg. Performance</p>
                  <p className="text-3xl font-heading font-bold text-foreground">A-</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Students Section */}
          <div className="mb-8" data-testid="students-section">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">My Children</h2>
            {students.length === 0 ? (
              <div className="bg-card rounded-2xl p-12 border border-border text-center">
                <GraduationCap className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  No Students Added
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contact the school admin to link your child's account
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {students.map((student, index) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-heading font-bold text-xl">
                          {student.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-foreground mb-1">
                          {student.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Class: {student.class_name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Roll No: {student.roll_number}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Announcements */}
          <div data-testid="announcements-section">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Recent Announcements</h2>
            {announcements.length === 0 ? (
              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">No announcements yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <motion.div
                    key={announcement.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 border border-border shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Bell className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-foreground mb-2">
                          {announcement.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">{announcement.content}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {new Date(announcement.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;