import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, BookOpen, Trophy, ChevronRight, Star, Quote, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Students', value: '800+' },
    { icon: Award, label: 'Awards Won', value: '50+' },
    { icon: BookOpen, label: 'Qualified Teachers', value: '40+' },
    { icon: Trophy, label: 'Years of Excellence', value: '25+' },
  ];

  const features = [
    {
      title: 'Academic Excellence',
      description: 'Comprehensive curriculum with focus on conceptual learning and practical application',
      icon: BookOpen,
    },
    {
      title: 'Holistic Development',
      description: 'Balanced education integrating academics, sports, arts, and life skills',
      icon: Users,
    },
    {
      title: 'Values-Based Education',
      description: 'Character building through moral education, discipline, and social responsibility',
      icon: Award,
    },
  ];

  const testimonials = [
    {
      name: 'Mrs. Anita Sharma',
      role: 'Parent',
      content: 'Holy Child School has been instrumental in shaping my daughter\'s academic and personal growth. The caring teachers and excellent facilities make it the best choice in Gomoh.',
      rating: 5,
    },
    {
      name: 'Mr. Rajesh Kumar',
      role: 'Parent',
      content: 'The values-based education and disciplined environment have helped my son develop into a confident and responsible individual. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Mrs. Priya Singh',
      role: 'Parent',
      content: 'Outstanding teaching methodology and individual attention to each child. The school truly cares about overall development beyond just academics.',
      rating: 5,
    },
  ];

  const news = [
    {
      title: 'Annual Sports Day 2024',
      date: 'March 15, 2024',
      category: 'Event',
    },
    {
      title: 'Admissions Open for 2024-25',
      date: 'February 1, 2024',
      category: 'Admission',
    },
    {
      title: 'Science Exhibition Success',
      date: 'January 20, 2024',
      category: 'Achievement',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3627486/pexels-photo-3627486.jpeg"
            alt="Holy Child School Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
              <span className="text-sm font-medium text-secondary">Welcome to Excellence</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Holy Child School
              <span className="block mt-2 text-secondary">Gomoh</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Nurturing minds, building character, and inspiring excellence in education for over 25 years
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" data-testid="hero-cta-admissions">
                <Button className="h-12 px-8 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Apply for Admission
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact" data-testid="hero-cta-contact">
                <Button variant="outline" className="h-12 px-8 rounded-full bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all">
                  Enquire Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent" data-testid="about-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">About Us</div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-foreground mb-6">
                A Legacy of Educational Excellence
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 mb-6">
                Holy Child School Gomoh has been a beacon of quality education in the region for over 25 years. We are committed to providing a nurturing environment where students develop academically, morally, and socially.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 mb-8">
                Our dedicated faculty, modern infrastructure, and comprehensive curriculum ensure that every child receives the best possible education to succeed in an ever-changing world.
              </p>
              <Link to="/about" data-testid="about-cta">
                <Button className="h-12 px-8 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/8199765/pexels-photo-8199765.jpeg"
                alt="Students in library"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-heading font-bold">25+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Why Choose Us</div>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-foreground mb-4">
              What Makes Us Special
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Discover the pillars of excellence that define Holy Child School
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-50" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Testimonials</div>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-foreground mb-4">
              What Parents Say
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">Hear from our school community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white border border-slate-100 relative shadow-sm"
              >
                <Quote className="w-10 h-10 text-secondary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-heading font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-32 bg-white" data-testid="news-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Latest Updates</div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-foreground">
                News & Events
              </h2>
            </div>
            <Link to="/news" className="text-primary hover:text-primary/80 font-medium flex items-center gap-2">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-primary/30" />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-sm text-slate-500">{item.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary to-primary/90 text-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Ready to Join Our School Family?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Enroll your child in an environment that nurtures excellence and values
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" data-testid="cta-apply">
              <Button className="h-12 px-8 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 shadow-xl">
                Apply Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact" data-testid="cta-contact">
              <Button variant="outline" className="h-12 px-8 rounded-full bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
