import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, Search } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import Input from '../components/Input';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});
  
  const faqCategories = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'What is LoanWise?',
          answer: 'LoanWise is a leading digital lending platform that provides quick, transparent, and affordable loan solutions for individuals and businesses. We offer various types of loans including personal, home, car, bike, business, and education loans.',
        },
        {
          question: 'How quickly can I get my loan approved?',
          answer: 'Our loan approval process is very quick. For personal loans, you can get approval within 24 hours. Home loans typically take 3-5 business days, while other loans are processed within 2-3 business days.',
        },
        {
          question: 'Is LoanWise RBI approved?',
          answer: 'Yes, LoanWise operates under RBI guidelines and is fully compliant with all regulatory requirements. We are a registered NBFC (Non-Banking Financial Company) with proper licensing.',
        },
      ],
    },
    {
      category: 'Eligibility & Documents',
      questions: [
        {
          question: 'What are the eligibility criteria for loans?',
          answer: 'Eligibility criteria vary by loan type but generally include: Age 21-65 years, minimum income requirements, employment stability, good credit score (usually 650+), and valid ID/address proof. Specific requirements are listed on each loan calculator page.',
        },
        {
          question: 'What documents do I need to apply?',
          answer: 'Common documents include: PAN card, Aadhaar card, income proof (salary slips/ITR), bank statements (last 6 months), employment proof, and address proof. Additional documents may be required based on the loan type.',
        },
        {
          question: 'Can I apply if I have a low credit score?',
          answer: 'While a good credit score improves your chances of approval and better interest rates, we do consider applications with lower credit scores on a case-by-case basis. We look at overall financial health, not just credit scores.',
        },
      ],
    },
    {
      category: 'Interest Rates & Charges',
      questions: [
        {
          question: 'What are the interest rates for different loans?',
          answer: 'Interest rates vary by loan type: Personal loans (10.5-24% p.a.), Home loans (8.5-12% p.a.), Car loans (9-15% p.a.), Bike loans (10-16% p.a.), Business loans (11-20% p.a.), Education loans (9-13% p.a.). Rates depend on your profile and credit score.',
        },
        {
          question: 'Are there any hidden charges?',
          answer: 'No, we believe in complete transparency. All charges including processing fees (typically 1-4% of loan amount), prepayment charges (if any), and late payment fees are clearly mentioned upfront. There are no hidden charges.',
        },
        {
          question: 'Can I prepay my loan?',
          answer: 'Yes, you can prepay your loan partially or fully. Most of our loans come with zero prepayment charges after the first 6 months. Some loan types may have minimal prepayment charges as per RBI guidelines.',
        },
      ],
    },
    {
      category: 'Application Process',
      questions: [
        {
          question: 'How do I apply for a loan?',
          answer: 'You can apply online through our website in 3 simple steps: 1) Use our loan calculator to determine your EMI, 2) Click "Apply Now" and fill out the application form, 3) Upload required documents. Our team will contact you within 24 hours.',
        },
        {
          question: 'Can I track my application status?',
          answer: 'Yes, once you apply, you\'ll receive a unique application ID via email/SMS. You can use this to track your application status on our website or by calling our customer service.',
        },
        {
          question: 'What happens after loan approval?',
          answer: 'After approval, you\'ll receive a loan agreement to review and sign. Once signed and verified, the loan amount is disbursed directly to your bank account (for personal/business loans) or to the seller/institution (for home/car/education loans).',
        },
      ],
    },
    {
      category: 'Repayment',
      questions: [
        {
          question: 'What are the EMI payment options?',
          answer: 'We offer multiple EMI payment options: Auto-debit from your bank account (recommended), Online payment through our website, NEFT/RTGS transfer, or payment through our mobile app. You can also pay at our branch offices.',
        },
        {
          question: 'What happens if I miss an EMI payment?',
          answer: 'Missing an EMI payment attracts late payment charges (typically 2-3% of EMI amount) and may affect your credit score. We recommend setting up auto-debit to avoid missed payments. Contact us immediately if you\'re facing payment difficulties.',
        },
        {
          question: 'Can I change my EMI date?',
          answer: 'Yes, you can request to change your EMI date once during the loan tenure. This can be done by contacting our customer service team. The change typically takes effect from the next billing cycle.',
        },
      ],
    },
  ];
  
  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  
  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);
  
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - LoanWise</title>
        <meta name="description" content="Find answers to common questions about LoanWise loans, eligibility, interest rates, application process, and more." />
      </Helmet>
      
      <Section background="primary" padding="medium">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Find answers to common questions about our loan services
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>
      </Section>
      
      <Section padding="large">
        {filteredFAQs.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-gray-600">No FAQs found matching your search.</p>
          </Card>
        ) : (
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const isOpen = openItems[`${categoryIndex}-${index}`];
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Card className="cursor-pointer" onClick={() => toggleItem(categoryIndex, index)}>
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-medium text-gray-900 pr-4">
                              {item.question}
                            </h3>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0"
                            >
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            </motion.div>
                          </div>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="mt-4 text-gray-700 leading-relaxed">
                                  {item.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Still have questions? */}
        <Card className="mt-12 bg-primary-50 border-primary-200 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Our customer support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Call Us: +1 (555) 123-4567
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
};

export default FAQ;