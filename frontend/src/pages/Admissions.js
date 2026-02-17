import { motion } from 'framer-motion';
import { CheckCircle, Calendar, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Admissions = () => {
  const process = [
    {
      step: '01',
      title: 'Submit Application',
      description: 'Fill out the online application form with required documents',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Assessment',
      description: 'Student assessment and interaction with our admissions team',
      icon: Users,
    },
    {
      step: '03',
      title: 'Review',
      description: 'Application review and evaluation by our selection committee',
      icon: CheckCircle,
    },
    {
      step: '04',
      title: 'Enrollment',
      description: 'Receive admission decision and complete enrollment process',
      icon: Calendar,
    },
  ];

  const requirements = [
    'Birth certificate',
    'Previous school records/transcripts',
    'Parent/Guardian identification',
    'Recent passport-size photographs',
    'Medical records and immunization certificate',
    'Proof of residence',
  ];

  const grades = [
    { level: 'Pre-Primary', age: '3-5 years', seats: '50' },
    { level: 'Primary (1-5)', age: '6-10 years', seats: '200' },
    { level: 'Middle School (6-8)', age: '11-13 years', seats: '150' },
    { level: 'High School (9-12)', age: '14-17 years', seats: '200' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10" data-testid="admissions-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
              <span className="text-primary">Admissions</span> 2025-26
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our community of learners and embark on a journey of excellence
            </p>
            <Link to="/contact" data-testid="apply-now-btn">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
                Apply Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24" data-testid="admission-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to join our school community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-5xl font-heading font-black text-primary/20 mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Grades */}
      <section className="py-24 bg-muted" data-testid="available-grades">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              Available Grades
            </h2>
            <p className="text-lg text-muted-foreground">
              Admissions open for all grade levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {grades.map((grade, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center"
              >
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {grade.level}
                </h3>
                <div className="text-muted-foreground mb-4">{grade.age}</div>
                <div className="bg-gradient-to-r from-primary to-accent rounded-lg py-2 px-4 text-white font-medium">
                  {grade.seats} Seats
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24" data-testid="admission-requirements">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-muted-foreground">
              Please prepare the following documents for your application
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border shadow-md"
          >
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent" data-testid="admissions-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Have questions? Our admissions team is here to help
          </p>
          <Link to="/contact" data-testid="contact-admissions-btn">
            <Button className="bg-white text-primary hover:bg-neutral-100 rounded-full px-8 py-6 text-lg font-medium shadow-xl">
              Contact Admissions Office
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Admissions;