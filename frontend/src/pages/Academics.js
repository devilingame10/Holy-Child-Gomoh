import { motion } from 'framer-motion';
import { BookOpen, Users2, Lightbulb, Trophy, Music, Palette, Globe, Calculator } from 'lucide-react';

const Academics = () => {
  const classes = [
    { level: 'Pre-Primary', age: '3-5 years', description: 'Play-based learning and foundational skills', icon: Users2 },
    { level: 'Primary (1-5)', age: '6-10 years', description: 'Core subjects with activity-based learning', icon: BookOpen },
    { level: 'Middle (6-8)', age: '11-13 years', description: 'Comprehensive curriculum with skill development', icon: Calculator },
    { level: 'Secondary (9-10)', age: '14-15 years', description: 'Board exam preparation with career guidance', icon: Globe },
    { level: 'Senior Secondary (11-12)', age: '16-17 years', description: 'Stream-based education (Science, Commerce, Arts)', icon: Lightbulb },
  ];

  const subjects = [
    'English', 'Hindi', 'Mathematics', 'Science', 'Social Studies',
    'Computer Science', 'Environmental Studies', 'Physical Education'
  ];

  const coactivities = [
    { name: 'Music & Dance', icon: Music, description: 'Vocal and instrumental music, classical and modern dance forms' },
    { name: 'Art & Craft', icon: Palette, description: 'Painting, drawing, sculpture, and creative projects' },
    { name: 'Sports', icon: Trophy, description: 'Cricket, football, basketball, athletics, yoga, and indoor games' },
    { name: 'Debate & Drama', icon: Users2, description: 'Public speaking, theatrical performances, and literary activities' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent" data-testid="academics-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Academics</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
              Curriculum & Learning
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive educational program designed to nurture academic excellence and holistic development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Classes Offered */}
      <section className="py-32 bg-white" data-testid="classes-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Our Programs</div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              Classes Offered
            </h2>
            <p className="text-lg text-slate-600">From Pre-Primary to Senior Secondary</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((cls, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl mb-6">
                  <cls.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {cls.level}
                </h3>
                <div className="text-sm text-primary font-medium mb-4">{cls.age}</div>
                <p className="text-slate-600 leading-relaxed">{cls.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-32 bg-slate-50" data-testid="curriculum-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Our Approach</div>
              <h2 className="text-4xl font-heading font-semibold tracking-tight text-foreground mb-6">
                Modern Teaching Methodology
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our curriculum follows the CBSE board pattern with a focus on conceptual understanding rather than rote learning. We employ activity-based and experiential learning methods that encourage critical thinking and problem-solving skills.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Smart classrooms equipped with digital learning tools ensure that our students receive a contemporary education that prepares them for the challenges of the 21st century.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <h4 className="font-heading font-bold text-foreground mb-4">Key Subjects</h4>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject, index) => (
                    <span key={index} className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <img
                src="https://images.pexels.com/photos/8500413/pexels-photo-8500413.jpeg"
                alt="Interactive classroom"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-32 bg-white" data-testid="cocurricular-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Beyond Academics</div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              Co-Curricular Activities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Developing well-rounded individuals through diverse extracurricular programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coactivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl mb-6">
                  <activity.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {activity.name}
                </h3>
                <p className="text-slate-600 leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;