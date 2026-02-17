import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in everything we do',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building character through honesty and ethical behavior',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing creativity and forward-thinking approaches',
    },
    {
      icon: Award,
      title: 'Achievement',
      description: 'Celebrating success and continuous improvement',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
              About <span className="text-primary">CampusLink</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A legacy of excellence in education, nurturing minds and building futures since 1995
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24" data-testid="about-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1427504746383-796b2a796dcd"
                alt="Students learning"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 1995, CampusLink has been at the forefront of educational excellence for nearly three decades. What began as a small institution with a vision has grown into a premier educational establishment serving thousands of students.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our journey has been marked by continuous innovation, unwavering commitment to quality education, and a deep understanding of evolving educational needs. We've consistently adapted our methodologies to prepare students for the challenges of tomorrow.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we stand proud as a community that celebrates diversity, encourages critical thinking, and fosters an environment where every student can discover and nurture their unique talents.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted" data-testid="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-10 text-white"
            >
              <h3 className="text-3xl font-heading font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To provide a transformative educational experience that empowers students with knowledge, skills, and values to excel in an ever-changing world. We are committed to fostering intellectual curiosity, critical thinking, and a lifelong love for learning.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent to-accent/80 rounded-3xl p-10 text-white"
            >
              <h3 className="text-3xl font-heading font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To be recognized as a leading educational institution that nurtures innovative thinkers, compassionate leaders, and responsible global citizens. We envision a community where every student realizes their full potential and contributes meaningfully to society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" data-testid="core-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;