import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Shield, Quote } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Commitment to highest standards in academics and character development',
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Nurturing empathy, kindness, and respect for all',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Encouraging creative thinking and problem-solving skills',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Building strong moral character and ethical values',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">About Us</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
              Holy Child School Gomoh
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A legacy of educational excellence, values, and holistic development since 1995
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-32 bg-white" data-testid="history-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <img
                src="https://images.pexels.com/photos/3627486/pexels-photo-3627486.jpeg"
                alt="School campus"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Our Story</div>
              <h2 className="text-4xl font-heading font-semibold tracking-tight text-foreground mb-6">
                Building Excellence for Over 25 Years
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Established in 1995, Holy Child School Gomoh was founded with a vision to provide quality English medium education in the heart of Gomoh. What started as a modest institution has grown into one of the most trusted educational establishments in the region.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Over the past two and a half decades, we have consistently maintained our commitment to academic excellence while fostering values of discipline, compassion, and social responsibility in our students.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we proudly serve over 800 students from Pre-Primary to Grade 12, supported by a dedicated team of 40+ qualified teachers and state-of-the-art facilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-slate-50" data-testid="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-heading font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To provide a caring, disciplined, and stimulating learning environment that empowers students with knowledge, skills, and values necessary for lifelong success. We strive to develop well-rounded individuals who are academically excellent, morally upright, and socially responsible.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary to-secondary/90 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-heading font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To be recognized as the premier educational institution in the region, known for academic excellence, character development, and holistic education. We envision a community of confident, compassionate learners who contribute positively to society and excel in their chosen fields.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-32 bg-white" data-testid="principal-message">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent rounded-3xl p-12 relative">
            <Quote className="w-16 h-16 text-secondary/20 absolute top-8 left-8" />
            <div className="relative z-10">
              <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Principal's Message</div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Welcome to Holy Child School Gomoh
              </h2>
              <div className="font-accent text-xl text-slate-600 mb-6 leading-relaxed italic">
                "Education is not just about imparting knowledge; it is about shaping character, nurturing potential, and inspiring young minds to dream and achieve."
              </div>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                At Holy Child School, we believe every child is unique and possesses innate talents waiting to be discovered and developed. Our dedicated team of educators works tirelessly to create an environment where academic rigor meets compassionate care.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We prepare our students not just for examinations, but for life – equipping them with critical thinking skills, moral values, and the confidence to face challenges with courage and integrity.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
                <div>
                  <div className="font-heading font-bold text-foreground">Sr. Mary Joseph</div>
                  <div className="text-sm text-slate-500">Principal</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-slate-50" data-testid="core-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Our Foundation</div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              Core Values
            </h2>
            <p className="text-lg text-slate-600">
              The principles that guide our educational philosophy
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
                className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;