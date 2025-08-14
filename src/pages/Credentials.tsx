import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, AlignCenterVertical as Certificate, Users, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const Credentials: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });
  const [certificationsRef, certificationsInView] = useInView({ threshold: 0.1 });
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.1 });

  const certifications = [
    {
      icon: Certificate,
      title: 'Chartered Accountant',
      issuer: 'Institute of Chartered Accountants of India',
      year: '2008',
      description: 'Professional certification in accounting, auditing, and financial management'
    },
    {
      icon: Shield,
      title: 'Company Secretary',
      issuer: 'Institute of Company Secretaries of India',
      year: '2010',
      description: 'Expertise in corporate law, compliance, and governance'
    },
    {
      icon: Award,
      title: 'Society Management Specialist',
      issuer: 'Maharashtra Cooperative Department',
      year: '2012',
      description: 'Specialized certification in cooperative society management'
    },
    {
      icon: Certificate,
      title: 'Tax Consultant',
      issuer: 'Income Tax Department',
      year: '2009',
      description: 'Authorized tax practitioner with expertise in direct and indirect taxes'
    }
  ];

  const achievements = [
    {
      metric: '500+',
      label: 'Societies Served',
      description: 'Successfully managed and consulted for over 500 residential societies'
    },
    {
      metric: '15+',
      label: 'Years Experience',
      description: 'Over a decade and a half of professional expertise in society management'
    },
    {
      metric: '98%',
      label: 'Client Retention',
      description: 'Exceptional client satisfaction and long-term partnerships'
    },
    {
      metric: '₹50Cr+',
      label: 'Assets Managed',
      description: 'Total value of society assets under our professional management'
    }
  ];

  const recognitions = [
    'Excellence in Society Management - Maharashtra Cooperative Board (2020)',
    'Best Financial Consultant for Societies - Mumbai District (2019)',
    'Outstanding Contribution to Cooperative Sector - State Government (2021)',
    'Professional Excellence Award - CA Institute (2018)',
    'Top Society Consultant - Real Estate Federation (2022)'
  ];

  const expertise = [
    'Cooperative Society Laws and Regulations',
    'Financial Management and Accounting',
    'Tax Planning and Compliance',
    'Society Formation and Registration',
    'Redevelopment Project Management',
    'Insurance and Risk Management',
    'Legal Documentation and Compliance',
    'Audit and Statutory Requirements'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Header Section */}
      <section ref={headerRef} className="py-40 bg-gradient-to-br from-secondary-900 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
              Our Credentials
            </h1>
            <p className="text-xl text-secondary-200 max-w-3xl mx-auto">
              Professional qualifications, certifications, and achievements that establish our expertise in society management and financial services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section ref={certificationsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={certificationsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-playfair">
              Professional Certifications
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our team holds prestigious certifications from recognized professional bodies, ensuring the highest standards of service delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ y: 50, opacity: 0 }}
                animate={certificationsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white border-2 border-secondary-100 rounded-3xl p-8 hover:shadow-2xl hover:border-primary-200 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-secondary-900">
                          {cert.title}
                        </h3>
                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-primary-600 font-medium mb-3">
                        {cert.issuer}
                      </p>
                      <p className="text-secondary-600 text-sm">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section ref={achievementsRef} className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={achievementsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-playfair">
              Key Achievements
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Numbers that speak to our experience, expertise, and commitment to excellence in society management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={achievementsInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-3 font-playfair">
                  {achievement.metric}
                </div>
                <div className="text-lg font-semibold text-secondary-900 mb-2">
                  {achievement.label}
                </div>
                <p className="text-secondary-600 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-playfair">
                Areas of Expertise
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                Our comprehensive expertise covers all aspects of society management, ensuring complete solutions for your needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertise.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-secondary-700">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600 to-secondary-800 rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6 font-playfair">
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {recognitions.map((recognition, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <Award className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-100">{recognition}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-playfair">
              Professional Memberships
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Active memberships in professional organizations that keep us updated with the latest industry standards and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Institute of Chartered Accountants of India (ICAI)',
              'Institute of Company Secretaries of India (ICSI)',
              'Maharashtra Cooperative Society Federation',
              'All India Federation of Cooperative Housing Societies',
              'Real Estate Regulatory Authority (RERA) Certified',
              'Goods and Services Tax (GST) Practitioner'
            ].map((membership, index) => (
              <motion.div
                key={membership}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-secondary-900 font-medium">
                  {membership}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-playfair">
              Trust in Qualified Expertise
            </h2>
            <p className="text-xl text-secondary-200 mb-8">
              With our proven credentials and extensive experience, we're ready to serve your society's needs with professionalism and excellence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary-50 transition-colors shadow-xl"
            >
              Partner With Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Credentials;