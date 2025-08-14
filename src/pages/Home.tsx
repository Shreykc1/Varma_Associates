import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Building, Calculator, FileText, Shield, TrendingUp, Star, CheckCircle, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Calculator,
      title: 'Accounting Consultants',
      description: 'Professional accounting services tailored for residential societies and building management.',
      color: 'from-blue-500 via-blue-600 to-cyan-500',
      features: ['Financial Planning', 'Tax Compliance', 'Audit Services']
    },
    {
      icon: Building,
      title: 'Society Formation & Management',
      description: 'Complete assistance in society formation, registration, and ongoing management services.',
      color: 'from-purple-500 via-purple-600 to-pink-500',
      features: ['Legal Registration', 'Bye-laws Drafting', 'Member Management']
    },
    {
      icon: FileText,
      title: 'Stamp Duty & Tax Consultants',
      description: 'Expert guidance on stamp duty calculations, tax planning, and compliance for societies.',
      color: 'from-green-500 via-green-600 to-emerald-500',
      features: ['Tax Planning', 'Compliance Support', 'Documentation']
    },
    {
      icon: TrendingUp,
      title: 'Society Conveyance & Redevelopment',
      description: 'Comprehensive support for society conveyance processes and redevelopment projects.',
      color: 'from-orange-500 via-orange-600 to-red-500',
      features: ['Project Planning', 'Legal Support', 'Execution']
    },
    {
      icon: Shield,
      title: 'Society Insurance & Investments',
      description: 'Strategic insurance planning and investment advisory services for societies.',
      color: 'from-indigo-500 via-indigo-600 to-purple-500',
      features: ['Risk Assessment', 'Portfolio Management', 'Claims Support']
    }
  ];

  const stats = [
    { number: '500+', label: 'Societies Served', icon: Building, color: 'text-blue-700' },
    { number: '15+', label: 'Years Experience', icon: Award, color: 'text-purple-500' },
    { number: '98%', label: 'Client Satisfaction', icon: Star, color: 'text-yellow-500' },
    { number: '24/7', label: 'Support Available', icon: Users, color: 'text-green-500' }
  ];

  const features = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with decades of combined experience, deep industry knowledge, and a passion for delivering outstanding results. Our team stays updated with the latest regulations and best practices to ensure your society receives the highest level of expertise and support.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Tailored Solutions',
      description: 'Customized services designed for your society\'s specific needs. We take the time to understand your unique requirements and challenges, then craft solutions that fit perfectly—whether it’s compliance, financial management, or member engagement. Our flexible approach ensures you get exactly what your society needs to thrive, with ongoing support and regular reviews to adapt as your needs evolve.',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Proven Track Record',
      description: 'Successfully managed hundreds of societies across India, consistently delivering results that exceed expectations. Our proven methodologies, attention to detail, and commitment to client satisfaction have earned us a reputation for reliability and excellence. From complex legal matters to day-to-day management, we have guided societies of all sizes through every challenge, building lasting relationships and a legacy of trust.',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">

        <div className='min-h-screen absolute inset-0 opacity-20'>
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=100" alt=""
            className='w-full h-full object-cover'
            />
        </div>



        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1.1, 1, 1.1],
              x: [0, -80, 0],
              y: [0, 60, 0]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          />
        </div>

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Trusted by 500+ Societies
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 font-playfair leading-tight">
              <span className="block">Professional</span>
              <span className="block text-white bg-clip-text text-transparent">
                Society Services
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-yellow-100 mt-4">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive accounting, legal, and management solutions for residential societies and building communities across India.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-blue-500/25"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm hover:border-white"
              >
                Get Free Consultation
              </motion.button>
            </Link>
          </motion.div>

  
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={featuresInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We combine expertise, innovation, and dedication to deliver exceptional results for your society.
            </p>
          </motion.div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                animate={featuresInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                {/* Text */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.color} shadow-lg`}>
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">Quality-driven, outcome-focused service delivery</span>
                  </div>
                </div>

                {/* Image/Illustration */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative group">
                    <div className={`absolute -inset-6 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-r ${feature.color}`}></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                      <img src={feature.imageUrl} alt={feature.title} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed specifically for residential societies and building management communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Hundreds</span>
            </h2>
            <p className="text-xl text-blue-400 max-w-3xl mx-auto">
              Our track record speaks for itself. Join the growing community of satisfied societies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={statsInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="bg-blue-600/90 shadow-lg backdrop-blur-lg rounded-3xl p-6 border border-white/20 group-hover:bg-black transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900  relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-semibold font-playfair text-white mb-8">
              Ready to Transform Your <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Society</span>?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Get expert consultation and professional services tailored to your society's unique needs. 
              Start your journey towards better management today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-slate-900 px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-blue-50 transition-colors shadow-2xl hover:shadow-white/25"
                >
                  Schedule Free Consultation
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;