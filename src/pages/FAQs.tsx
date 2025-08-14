import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Search } from 'lucide-react';

const FAQs: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'accounting', name: 'Accounting' },
    { id: 'formation', name: 'Society Formation' },
    { id: 'tax', name: 'Tax & Legal' },
    { id: 'redevelopment', name: 'Redevelopment' },
    { id: 'insurance', name: 'Insurance' }
  ];

  const faqs = [
    {
      category: 'accounting',
      question: 'What accounting services do you provide for societies?',
      answer: 'We provide comprehensive accounting services including monthly financial statements, budget preparation, audit support, tax preparation, cost center management, and implementation of digital accounting systems specifically designed for residential societies.'
    },
    {
      category: 'formation',
      question: 'How long does it take to form a new society?',
      answer: 'Society formation typically takes 3-6 months depending on the completeness of documentation and approval processes. We handle all aspects including registration, legal documentation, committee formation guidance, and bye-laws preparation.'
    },
    {
      category: 'tax',
      question: 'Do societies need to pay income tax?',
      answer: 'Cooperative societies may be exempt from income tax under certain conditions. However, they need to comply with various tax regulations including GST, TDS, and property tax. We provide expert guidance on all tax-related matters for societies.'
    },
    {
      category: 'redevelopment',
      question: 'What is the process for society redevelopment?',
      answer: 'Society redevelopment involves multiple stages including feasibility study, member consent, developer selection, approvals, and project execution. We provide end-to-end support including legal documentation, negotiation support, and compliance oversight.'
    },
    {
      category: 'insurance',
      question: 'What types of insurance should a society have?',
      answer: 'Societies should have comprehensive insurance covering fire, earthquake, flood damage, public liability, and directors & officers liability. We help assess risks, review policies, and provide investment advisory services.'
    },
    {
      category: 'accounting',
      question: 'How often should societies conduct audits?',
      answer: 'Societies are required to conduct annual audits. However, we recommend quarterly internal reviews and annual statutory audits to ensure compliance and financial transparency. We provide complete audit support and compliance monitoring.'
    },
    {
      category: 'formation',
      question: 'What documents are required for society formation?',
      answer: 'Key documents include society registration application, bye-laws, list of members, bank account details, building plans, and NOCs from relevant authorities. We assist in preparing all required documentation.'
    },
    {
      category: 'tax',
      question: 'How is stamp duty calculated for property transactions?',
      answer: 'Stamp duty varies by state and property type. For societies, it applies to conveyance, redevelopment agreements, and other legal documents. We provide accurate calculations and ensure compliance with all stamp duty requirements.'
    },
    {
      category: 'redevelopment',
      question: 'What are the benefits of society conveyance?',
      answer: 'Conveyance gives the society complete ownership of land and building, enables redevelopment opportunities, provides better loan facilities, and offers tax benefits. We handle the entire conveyance process from documentation to registration.'
    },
    {
      category: 'insurance',
      question: 'How do we claim insurance for society damages?',
      answer: 'Insurance claims require immediate notification, damage assessment, documentation, and follow-up with insurers. We provide complete claims assistance including documentation, negotiation with insurers, and settlement support.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-secondary-200 max-w-3xl mx-auto">
              Find answers to common questions about our services and society management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-white border-b border-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-secondary-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-lg"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-secondary-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-secondary-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-secondary-600 mb-4">
                No questions found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-playfair">
              Still Have Questions?
            </h2>
            <p className="text-xl text-secondary-200 mb-8">
              Our expert team is here to help. Contact us for personalized assistance and consultation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary-50 transition-colors shadow-xl"
            >
              Contact Our Experts
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQs;