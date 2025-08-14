import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Credentials', path: '/credentials' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Accounting Consultants',
    'Society Formation',
    'Tax Consultancy',
    'Redevelopment Services',
    'Insurance Planning',
    'Legal Compliance'
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+91 98765 43210'
    },
    {
      icon: Mail,
      text: 'info@varmaassociates.com'
    },
    {
      icon: MapPin,
      text: '123 Business District, Mumbai, Maharashtra 400001'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center"
              >
                <Building2 className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">Varma Associates</h3>
                <p className="text-sm text-secondary-300">Professional Services</p>
              </div>
            </Link>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Your trusted partner for comprehensive society management, accounting, and legal services. Over 15 years of excellence in serving residential societies across India.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-secondary-300 hover:text-white transition-colors duration-200 cursor-pointer flex items-center group">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span className="text-secondary-300 text-sm">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-secondary-800 rounded-xl">
              <h5 className="font-semibold text-primary-400 mb-2">Business Hours</h5>
              <p className="text-secondary-300 text-sm">
                Monday - Friday: 9:00 AM - 7:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-secondary-400 text-sm mb-4 md:mb-0">
              © 2025 Varma Associates. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="text-secondary-400 text-sm">
              Designed with ❤️ for Professional Excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;