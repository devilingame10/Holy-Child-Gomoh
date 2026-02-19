import { motion } from 'framer-motion';
import { CheckCircle, Calendar, FileText, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Admissions = () => {
  const process = [
    {
      step: '01',
      title: 'Enquiry',
      description: 'Fill online enquiry form or visit the school office',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Application',
      description: 'Submit admission form with required documents',
      icon: Users,
    },
    {
      step: '03',
      title: 'Interaction',
      description: 'Student interaction and parent meeting with principal',
      icon: Users,
    },
    {
      step: '04',
      title: 'Admission',
      description: 'Receive admission confirmation and complete fee payment',
      icon: Calendar,
    },
  ];

  const requirements = [
    'Birth Certificate (original and photocopy)',
    'Transfer Certificate from previous school (if applicable)',
    'Aadhar Card of student and parents',
    'Recent passport-size photographs (4 copies)',
    'Previous year mark sheets/report cards',
    'Proof of residence (any utility bill)',
    'Medical fitness certificate',
    'Caste certificate (if applicable)',
  ];

  const classes = [
    { level: 'Pre-Primary', seats: 'Limited', fee: 'Contact Office' },
    { level: 'Class 1-5', seats: 'Available', fee: 'Contact Office' },
    { level: 'Class 6-8', seats: 'Available', fee: 'Contact Office' },
    { level: 'Class 9-10', seats: 'Limited', fee: 'Contact Office' },
    { level: 'Class 11-12', seats: 'Available', fee: 'Contact Office' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary/90 text-white" data-testid="admissions-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">Admissions Open 2024-25</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6">
              Join Our School
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Begin your child's journey toward excellence with us
            </p>
            <Link to="/contact" data-testid="apply-now-btn">
              <Button className="h-12 px-8 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-all shadow-xl">
                Apply Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-32 bg-white" data-testid="admission-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">How to Apply</div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-slate-600">
              Simple steps to secure admission for your child
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
                className="relative">
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-6xl font-heading font-black text-slate-100 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes & Seats */}
      <section className="py-32 bg-slate-50" data-testid="available-classes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Enrollment</div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              Available Classes
            </h2>
            <p className="text-lg text-slate-600">
              Admissions open for Academic Year 2024-25
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <div className="grid grid-cols-3 bg-primary text-white p-4 font-heading font-bold">
                <div>Class</div>
                <div>Availability</div>
                <div>Fee Structure</div>
              </div>
              {classes.map((cls, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="font-medium text-foreground">{cls.level}</div>
                  <div className="text-slate-600">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      cls.seats === 'Available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {cls.seats}
                    </span>
                  </div>
                  <div className="text-slate-600">{cls.fee}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-32 bg-white" data-testid="admission-requirements">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Documentation</div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-slate-600">
              Please keep the following documents ready for admission
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent rounded-3xl p-12 border border-slate-100">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-32 bg-slate-50" data-testid="important-dates">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Timeline</div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              Important Dates
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { date: 'February 1 - March 31', event: 'Admission Form Submission' },
              { date: 'April 1 - April 15', event: 'Student Interaction & Parent Meeting' },
              { date: 'April 20', event: 'Admission Result Declaration' },
              { date: 'April 25 - May 10', event: 'Fee Payment & Final Admission' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center gap-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex-shrink-0">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-heading font-bold text-foreground text-lg">{item.event}</div>
                  <div className="text-slate-600">{item.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-primary to-primary/90 text-white" data-testid="admissions-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact our admission office for more information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" data-testid="contact-admissions-btn">
              <Button className="h-12 px-8 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 shadow-xl">
                Enquire Now
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="outline" className="h-12 px-8 rounded-full bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                Call: +91-9876543210
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;