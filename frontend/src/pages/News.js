import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, Clock } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const News = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(`${API}/announcements`);
      setAnnouncements(response.data);
    } catch (error) {
      console.error('Failed to fetch announcements');
    } finally {
      setLoading(false);
    }
  };

  const staticNews = [
    {
      id: 'static1',
      title: 'Annual Sports Day 2024',
      content: 'Our Annual Sports Day will be held on March 15, 2024. Students from all classes will participate in various athletic events. Parents are cordially invited to attend and cheer for their children.',
      date: new Date('2024-03-01'),
      category: 'event',
    },
    {
      id: 'static2',
      title: 'Admissions Open for Academic Year 2024-25',
      content: 'Holy Child School Gomoh is now accepting applications for the academic year 2024-25. Limited seats available for all classes. Apply now to secure your child\'s future with us.',
      date: new Date('2024-02-01'),
      category: 'admission',
    },
    {
      id: 'static3',
      title: 'Science Exhibition - Outstanding Success',
      content: 'Our students showcased exceptional projects at the Regional Science Exhibition held on January 20, 2024. The school won 5 gold medals and 8 silver medals. Congratulations to all participants!',
      date: new Date('2024-01-20'),
      category: 'achievement',
    },
    {
      id: 'static4',
      title: 'Parent-Teacher Meeting - February 10',
      content: 'The next Parent-Teacher Meeting is scheduled for February 10, 2024. Parents are requested to attend and discuss their ward\'s progress with the respective class teachers.',
      date: new Date('2024-01-15'),
      category: 'meeting',
    },
    {
      id: 'static5',
      title: 'Republic Day Celebration',
      content: 'The school celebrated the 75th Republic Day with great enthusiasm. The tricolor was hoisted by our esteemed Principal, followed by cultural programs presented by our talented students.',
      date: new Date('2024-01-26'),
      category: 'event',
    },
  ];

  const allNews = [...announcements, ...staticNews].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  const getCategoryColor = (category) => {
    const colors = {
      event: 'bg-blue-100 text-blue-700',
      admission: 'bg-green-100 text-green-700',
      achievement: 'bg-yellow-100 text-yellow-700',
      meeting: 'bg-purple-100 text-purple-700',
      general: 'bg-slate-100 text-slate-700',
    };
    return colors[category] || colors.general;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent" data-testid="news-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Latest Updates</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
              News & Events
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest happenings at Holy Child School
            </p>
          </motion.div>
        </div>
      </section>

      {/* News List */}
      <section className="py-32 bg-white" data-testid="news-list">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {allNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                    <Tag className="w-3 h-3 inline mr-1" />
                    {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    {new Date(news.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {news.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {news.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
