import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Dr. Emily Richardson',
      role: 'Principal',
      specialization: 'Educational Leadership',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
      description: '25 years of experience in education administration',
    },
    {
      name: 'Prof. James Anderson',
      role: 'Head of Sciences',
      specialization: 'Physics & Mathematics',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      description: 'Ph.D. in Physics, published researcher',
    },
    {
      name: 'Ms. Sophia Martinez',
      role: 'English Department Head',
      specialization: 'Literature & Language Arts',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      description: 'Master\'s in English Literature, award-winning educator',
    },
    {
      name: 'Mr. David Kumar',
      role: 'Head of Technology',
      specialization: 'Computer Science & IT',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      description: 'Former software engineer, tech education specialist',
    },
    {
      name: 'Ms. Rachel Thompson',
      role: 'Arts Department Head',
      specialization: 'Fine Arts & Music',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
      description: 'Professional artist and music instructor',
    },
    {
      name: 'Coach Michael Brown',
      role: 'Sports Director',
      specialization: 'Physical Education',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      description: 'Former national athlete, sports science degree',
    },
  ];

  const stats = [
    { icon: GraduationCap, label: 'Qualified Teachers', value: '95%' },
    { icon: Award, label: 'Avg. Experience', value: '15+ Years' },
    { icon: BookOpen, label: 'Student-Teacher Ratio', value: '15:1' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10" data-testid="faculty-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Faculty</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced educators dedicated to nurturing excellence and inspiring lifelong learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted" data-testid="faculty-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="text-3xl font-heading font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-24" data-testid="faculty-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-2">{member.role}</div>
                  <div className="text-sm text-muted-foreground mb-3">
                    {member.specialization}
                  </div>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Faculty */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent text-white" data-testid="why-faculty">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-8">
              Why Our Faculty Stands Out
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">Expertise</h3>
                <p className="text-white/90">
                  Our teachers bring years of specialized knowledge and real-world experience to the classroom
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">Dedication</h3>
                <p className="text-white/90">
                  Committed to each student's success through personalized attention and support
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">Innovation</h3>
                <p className="text-white/90">
                  Continuously updating teaching methods to incorporate the latest educational practices
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;