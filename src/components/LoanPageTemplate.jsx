import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Section from './Section';
import Button from './Button';
import LoanCalculator from './LoanCalculator';

const LoanPageTemplate = ({
  title,
  subtitle,
  description,
  heroImage,
  highlights,
  features,
  benefits,
  useCases,
  eligibility,
  additionalSections = [],
  faqs,
  calculatorProps,
  ctaTitle,
  ctaDescription,
}) => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20"></div>
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-primary-400 text-sm font-medium">Quick Approval</span>
                <span className="text-white/60">•</span>
                <span className="text-white text-sm">Competitive Rates</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {title}<br />
                <span className="text-primary-400">{subtitle}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="large" className="bg-white text-gray-900 hover:bg-gray-100">
                  Apply Now
                </Button>
                <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Calculate EMI
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {heroImage ? (
                <img
                  src={heroImage}
                  alt={title}
                  className="rounded-2xl shadow-2xl w-full"
                />
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
                    >
                      <highlight.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">{highlight.value}</div>
                      <div className="text-sm text-gray-300">{highlight.label}</div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Key Features Section */}
      <Section background="white" padding="large">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose Our {title}?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Experience hassle-free borrowing with transparent terms and flexible options
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Benefits & Use Cases Section */}
      {(benefits || useCases) && (
        <Section background="gray" padding="large">
          <div className="grid lg:grid-cols-2 gap-12">
            {benefits && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {useCases && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Common Use Cases</h3>
                <div className="grid grid-cols-2 gap-4">
                  {useCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full"></div>
                        <span className="text-gray-700">{useCase}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </Section>
      )}
      
      {/* Additional Custom Sections */}
      {additionalSections.map((section, index) => (
        <Section key={index} background={section.background || 'white'} padding="large">
          {section.content}
        </Section>
      ))}
      
      {/* Eligibility Section */}
      <Section background="white" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Eligibility & Requirements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check if you qualify for our {title.toLowerCase()} and understand the documentation needed
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
                <div className="space-y-6">
                  {Object.entries(eligibility).filter(([key]) => key !== 'documents').map(([key, value], index) => (
                    <div key={key} className="border-l-4 border-primary-500 pl-6">
                      <p className="text-sm text-gray-500 mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      <p className="text-lg font-semibold text-gray-900">{value}</p>
                    </div>
                  ))}
                </div>
                <Button variant="primary" fullWidth className="mt-8">
                  Check Your Eligibility
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
                <ul className="space-y-4">
                  {eligibility.documents?.map((doc, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-amber-800">
                      Keep these documents ready for faster processing
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* EMI Calculator Section */}
      <Section background="gray" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your EMI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plan your loan with our easy-to-use EMI calculator
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <LoanCalculator {...calculatorProps} />
            </div>
          </div>
        </motion.div>
      </Section>
      
      {/* FAQs Section */}
      <Section background="white" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our {title.toLowerCase()}
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </div>
                  {expandedFaq === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-600"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {ctaTitle || `Ready to Get Your ${title}?`}
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              {ctaDescription || 'Join thousands of satisfied customers who got their loans approved quickly'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large" className="bg-white text-primary-600 hover:bg-gray-100">
                Apply Now
              </Button>
              <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-primary-600">
                Talk to Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LoanPageTemplate;