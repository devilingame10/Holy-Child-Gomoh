import { motion } from 'framer-motion';
import { FlaskConical, Book, Trophy, LibraryBig, Laptop, Palette } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: FlaskConical,
      title: 'Science Laboratories',
      description: 'Fully equipped labs for Physics, Chemistry, and Biology with modern apparatus',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
    },
    {
      icon: Laptop,
      title: 'Computer Lab',
      description: 'State-of-the-art computer lab with latest software and high-speed internet',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    },
    {
      icon: LibraryBig,
      title: 'Library & Media Center',
      description: 'Extensive collection of books, journals, and digital resources',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da',
    },
    {
      icon: Trophy,
      title: 'Sports Complex',
      description: 'Multi-purpose sports facilities including basketball, football, and athletics',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77',
    },
    {
      icon: Palette,
      title: 'Art & Music Studio',
      description: 'Dedicated spaces for creative expression and artistic development',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b',
    },
    {
      icon: Book,
      title: 'Smart Classrooms',
      description: 'Interactive digital boards and multimedia learning tools in every classroom',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10" data-testid="facilities-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
              Our <span className="text-primary">Facilities</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art infrastructure designed to enhance learning and development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24" data-testid="facilities-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center">
                      <facility.icon className="w-7 h-7 text-secondary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Highlight */}
      <section className="py-24 bg-muted" data-testid="infrastructure-highlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                World-Class Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our campus is designed with the future in mind, providing students with access to cutting-edge facilities that support both academic excellence and personal growth.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                From our modern science laboratories equipped with the latest technology to our expansive sports complex that promotes physical fitness, every aspect of our infrastructure is crafted to create an optimal learning environment.
              </p>
              <p className="text-lg text-muted-foreground">
                We continually invest in upgrading our facilities to ensure our students have access to the resources they need to succeed in a rapidly evolving world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-white">
                <div className="text-4xl font-heading font-bold mb-2">50+</div>
                <div className="text-sm text-white/90">Classrooms</div>
              </div>
              <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-6 text-white">
                <div className="text-4xl font-heading font-bold mb-2">10+</div>
                <div className="text-sm text-white/90">Laboratories</div>
              </div>
              <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-6 text-secondary-foreground">
                <div className="text-4xl font-heading font-bold mb-2">15K+</div>
                <div className="text-sm opacity-90">Library Books</div>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-white">
                <div className="text-4xl font-heading font-bold mb-2">5</div>
                <div className="text-sm text-white/90">Sports Grounds</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;