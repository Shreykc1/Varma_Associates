import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });

  const team = [
    {
      name: 'Rajesh Varma',
      position: 'Founder & Managing Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'With over 15 years of experience in society management and accounting, Rajesh leads our team with expertise and dedication.'
    },
    {
      name: 'Priya Sharma',
      position: 'Senior Tax Consultant',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Specialized in tax compliance and stamp duty calculations with 12+ years of experience in real estate taxation.'
    },
    {
      name: 'Amit Patel',
      position: 'Legal Advisor',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Expert in society formation, conveyance, and redevelopment projects with a track record of successful completions.'
    },
    {
      name: 'Sunita Desai',
      position: 'Financial Planner',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Specializes in investment advisory and insurance planning for societies and building management.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the highest standards of professionalism.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Trust and transparency are at the core of our business relationships with every client.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, understanding their unique needs and providing tailored solutions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Constantly evolving our services and processes to meet the changing needs of modern societies.',
      color: 'from-purple-500 to-indigo-500'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
              About Varma Associates
            </h1>
            <p className="text-xl text-secondary-200 max-w-3xl mx-auto leading-relaxed">
              Dedicated professionals committed to providing exceptional society management and financial services for over a decade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                Our Story
              </h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Founded in 2008, Varma Associates began with a simple mission: to provide comprehensive, reliable, and professional services to residential societies and building management companies across India.
              </p>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Over the years, we have grown into a trusted partner for hundreds of societies, helping them navigate complex financial, legal, and administrative challenges with expertise and dedication.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Today, we continue to innovate and expand our services, always keeping our clients' success at the heart of everything we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Office building"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={valuesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-playfair">
              Our Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={teamInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-playfair">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to providing exceptional service and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                animate={teamInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
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
              Join Our Growing Family of Satisfied Clients
            </h2>
            <p className="text-xl text-secondary-200 mb-8">
              Experience the Varma Associates difference and see why societies trust us with their most important needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary-50 transition-colors shadow-xl"
            >
              Start Your Journey With Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;