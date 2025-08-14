import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calculator, Building, FileText, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Calculator,
      title: 'Accounting Consultants',
      description: 'Comprehensive accounting solutions for residential societies.',
      features: [
        'Monthly financial statements',
        'Budget preparation and analysis',
        'Audit support and compliance',
        'Tax preparation and filing',
        'Cost center management',
        'Digital accounting systems'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Building,
      title: 'Society Formation & Management',
      description: 'End-to-end society formation and ongoing management services.',
      features: [
        'Society registration process',
        'Legal documentation',
        'Committee formation guidance',
        'Bye-laws preparation',
        'AGM/EGM coordination',
        'Compliance monitoring'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FileText,
      title: 'Stamp Duty & Tax Consultants',
      description: 'Expert tax consultation and stamp duty calculation services.',
      features: [
        'Stamp duty calculations',
        'Tax planning strategies',
        'GST compliance',
        'Income tax filing',
        'Property tax guidance',
        'Legal compliance'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Society Conveyance & Redevelopment',
      description: 'Professional support for conveyance and redevelopment projects.',
      features: [
        'Conveyance documentation',
        'Redevelopment planning',
        'Legal approvals',
        'Project management',
        'Negotiation support',
        'Compliance oversight'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Society Insurance & Investments',
      description: 'Strategic insurance and investment planning for societies.',
      features: [
        'Insurance policy review',
        'Investment advisory',
        'Risk assessment',
        'Portfolio management',
        'Claims assistance',
        'Financial planning'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
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
              Our Professional Services
            </h1>
            <p className="text-xl text-secondary-200 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet all your society's financial, legal, and management needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-secondary-100 hover:border-primary-200">
                  {/* Service Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-secondary-600 mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ x: -20, opacity: 0 }}
                        animate={servicesInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-secondary-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 group/btn bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-full font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-playfair">
              Our Service Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              A streamlined approach to delivering exceptional results for your society.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial assessment of your society\'s needs' },
              { step: '02', title: 'Planning', description: 'Customized solution design and strategy' },
              { step: '03', title: 'Implementation', description: 'Professional execution of services' },
              { step: '04', title: 'Support', description: 'Ongoing monitoring and assistance' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-secondary-600">
                  {process.description}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-secondary-200 mb-8">
              Contact us today for a free consultation and discover how we can help your society thrive.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary-50 transition-colors shadow-xl"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;