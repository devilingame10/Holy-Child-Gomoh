import { motion } from 'framer-motion';
import { FlaskConical, Book, Monitor, Bus, Shield, Droplets, Utensils, Wifi } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: Monitor,
      title: 'Smart Classrooms',
      description: 'Interactive digital boards and multimedia learning tools in every classroom for enhanced learning experience',
      image: 'https://images.pexels.com/photos/8500413/pexels-photo-8500413.jpeg',
    },
    {
      icon: Book,
      title: 'Well-Stocked Library',
      description: 'Extensive collection of over 5000 books, reference materials, and digital resources',
      image: 'https://images.pexels.com/photos/8199765/pexels-photo-8199765.jpeg',
    },
    {
      icon: FlaskConical,
      title: 'Science Laboratories',
      description: 'Fully equipped Physics, Chemistry, and Biology labs with modern apparatus and safety equipment',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
    },
    {
      icon: Monitor,
      title: 'Computer Lab',
      description: 'State-of-the-art computer lab with 50+ systems and high-speed internet connectivity',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    },
    {
      icon: Book,
      title: 'Playground & Sports',
      description: 'Spacious playground with facilities for cricket, football, basketball, volleyball, and athletics',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77',
    },
    {
      icon: Bus,
      title: 'Transport Facility',
      description: 'Safe and reliable school bus service covering major areas of Gomoh and surrounding regions',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'CCTV surveillance, trained security personnel, and comprehensive safety protocols',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9',
    },
    {
      icon: Utensils,
      title: 'Hygienic Canteen',
      description: 'Clean and hygienic canteen serving nutritious meals and snacks',
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326',
    },
    {
      icon: Droplets,
      title: 'Water & Sanitation',
      description: 'RO purified drinking water and well-maintained, clean sanitation facilities',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
    },
    {
      icon: Wifi,
      title: 'Wi-Fi Campus',
      description: 'High-speed Wi-Fi connectivity across the campus for digital learning',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent" data-testid="facilities-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Our Campus</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
              World-Class Facilities
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Modern infrastructure designed to provide the best learning environment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-32 bg-white" data-testid="facilities-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center">
                      <facility.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-br from-primary to-primary/90 text-white" data-testid="facilities-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              Infrastructure by Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Classrooms' },
              { value: '3', label: 'Science Labs' },
              { value: '5000+', label: 'Library Books' },
              { value: '10+', label: 'School Buses' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center">
                <div className="text-5xl font-heading font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
