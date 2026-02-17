import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, BookOpen, TrendingUp, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Students Enrolled', value: '2,500+' },
    { icon: Award, label: 'Awards Won', value: '150+' },
    { icon: BookOpen, label: 'Programs Offered', value: '25+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
  ];

  const features = [
    {
      title: 'World-Class Faculty',
      description: 'Learn from experienced educators dedicated to your success',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
    },
    {
      title: 'Modern Facilities',
      description: 'State-of-the-art labs, library, and sports complex',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    },
    {
      title: 'Holistic Development',
      description: 'Focus on academics, sports, and extracurricular activities',
      image: 'https://images.unsplash.com/photo-1427504746383-796b2a796dcd',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/32476662/pexels-photo-32476662.jpeg"
            alt="Modern school campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block mb-6 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
              <span className="text-sm font-medium text-secondary">Welcome to CampusLink</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-tight">
              Shaping Future
              <span className="block mt-2 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                Leaders Today
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-200 mb-8 leading-relaxed">
              Experience excellence in education with our innovative learning programs,
              world-class infrastructure, and dedicated faculty committed to nurturing tomorrow's changemakers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admissions" data-testid="hero-cta-admissions">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5">
                  Explore Admissions
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login" data-testid="hero-cta-portal">
                <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-full px-8 py-6 text-lg font-medium transition-all duration-300">
                  Parent Portal
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted" data-testid="stats-section">
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">CampusLink</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes us the premier choice for your child's education
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
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-5 h-5 text-secondary-foreground" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              What Parents Say
            </h2>
            <p className="text-lg text-muted-foreground">Hear from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Parent',
                content: 'The dedication of the teachers and the quality of education has exceeded our expectations. My daughter loves coming to school every day!',
              },
              {
                name: 'Michael Chen',
                role: 'Parent',
                content: 'The parent portal makes it so easy to track my son\'s progress. The transparency and communication are excellent.',
              },
              {
                name: 'Priya Sharma',
                role: 'Parent',
                content: 'The holistic approach to education, combining academics with sports and arts, has helped my child develop into a well-rounded individual.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-md border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-heading font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your child's journey to excellence today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" data-testid="cta-apply">
              <Button className="bg-white text-primary hover:bg-neutral-100 rounded-full px-8 py-6 text-lg font-medium shadow-xl">
                Apply Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact" data-testid="cta-contact">
              <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-full px-8 py-6 text-lg font-medium">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;