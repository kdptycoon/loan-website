import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Card from '../components/Card';
import Section from '../components/Section';
import Button from '../components/Button';

const LoanCategories = () => {
  const loanCategories = [
    {
      id: 'personal',
      title: 'Personal Loan',
      icon: '💳',
      description: 'Quick funds for your personal needs, medical emergencies, or any other requirement',
      features: [
        'Loan amount up to $500,000',
        'Tenure up to 60 months',
        'Minimal documentation',
        'Quick disbursement',
        'No collateral required',
      ],
      interestRate: '10.5% - 24%',
      processingFee: '2% - 4%',
      eligibility: [
        'Age: 21-60 years',
        'Minimum income: $25,000/year',
        'Employment: Salaried or Self-employed',
        'Credit score: 650+',
      ],
      calculatorPath: '/calculators/personal-loan',
      loanPath: '/loans/personal-loan',
    },
    {
      id: 'home',
      title: 'Home Loan',
      icon: '🏠',
      description: 'Turn your dream of owning a home into reality with our affordable home loans',
      features: [
        'Loan amount up to $5,000,000',
        'Tenure up to 30 years',
        'Attractive interest rates',
        'Tax benefits available',
        'Balance transfer facility',
      ],
      interestRate: '8.5% - 12%',
      processingFee: '0.5% - 1%',
      eligibility: [
        'Age: 21-65 years',
        'Minimum income: $40,000/year',
        'Property should be residential',
        'Credit score: 700+',
      ],
      calculatorPath: '/calculators/home-loan',
      loanPath: '/loans/home-loan',
    },
    {
      id: 'car',
      title: 'Car Loan',
      icon: '🚗',
      description: 'Drive your dream car home with our hassle-free car loans',
      features: [
        'Up to 100% on-road funding',
        'Tenure up to 7 years',
        'Competitive interest rates',
        'Quick approval process',
        'Minimal down payment',
      ],
      interestRate: '9% - 15%',
      processingFee: '1% - 2%',
      eligibility: [
        'Age: 21-60 years',
        'Minimum income: $30,000/year',
        'Valid driving license',
        'Credit score: 650+',
      ],
      calculatorPath: '/calculators/car-loan',
      loanPath: '/loans/car-loan',
    },
    {
      id: 'bike',
      title: 'Bike Loan',
      icon: '🏍️',
      description: 'Own your favorite two-wheeler with our easy bike loans',
      features: [
        'Up to 95% funding',
        'Tenure up to 4 years',
        'Low interest rates',
        'Same day approval',
        'Flexible EMI options',
      ],
      interestRate: '10% - 16%',
      processingFee: '2% - 3%',
      eligibility: [
        'Age: 18-65 years',
        'Minimum income: $15,000/year',
        'Valid driving license',
        'Credit score: 600+',
      ],
      calculatorPath: '/calculators/bike-loan',
      loanPath: '/loans/bike-loan',
    },
    {
      id: 'business',
      title: 'Business Loan',
      icon: '💼',
      description: 'Fuel your business growth with our flexible business loans',
      features: [
        'Loan amount up to $2,000,000',
        'Tenure up to 5 years',
        'Collateral-free loans available',
        'Quick disbursement',
        'Flexible repayment options',
      ],
      interestRate: '11% - 20%',
      processingFee: '2% - 3%',
      eligibility: [
        'Business vintage: 2+ years',
        'Annual turnover: $100,000+',
        'Profitable for last 2 years',
        'Credit score: 700+',
      ],
      calculatorPath: '/calculators/business-loan',
      loanPath: '/loans/business-loan',
    },
    {
      id: 'education',
      title: 'Education Loan',
      icon: '🎓',
      description: 'Invest in your future with our comprehensive education loans',
      features: [
        'Covers tuition and living expenses',
        'Tenure up to 15 years',
        'Moratorium period available',
        'Tax benefits under Section 80E',
        'Global university coverage',
      ],
      interestRate: '9% - 13%',
      processingFee: '1% - 2%',
      eligibility: [
        'Indian citizen',
        'Admission to recognized institution',
        'Co-applicant required',
        'Academic merit considered',
      ],
      calculatorPath: '/calculators/education-loan',
      loanPath: '/loans/education-loan',
    },
  ];
  
  return (
    <>
      <Helmet>
        <title>Loan Categories - Choose the Right Loan | LoanWise</title>
        <meta name="description" content="Explore our wide range of loan options including Personal, Home, Car, Bike, Business, and Education loans with competitive interest rates." />
      </Helmet>
      
      {/* Header Section */}
      <Section background="primary" padding="medium">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Loan Categories
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choose from our wide range of loan products designed to meet your specific needs with competitive interest rates and flexible repayment options
          </p>
        </div>
      </Section>
      
      {/* Loan Categories Grid */}
      <Section background="gray" padding="large">
        <div className="grid gap-8">
          {loanCategories.map((loan, index) => (
            <motion.div
              key={loan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card padding="large" className="overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Basic Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-5xl">{loan.icon}</div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{loan.title}</h2>
                        <p className="text-gray-600">{loan.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Interest Rate</p>
                        <p className="text-xl font-semibold text-primary-600">{loan.interestRate} p.a.</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Processing Fee</p>
                        <p className="text-lg font-semibold text-gray-900">{loan.processingFee}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <Link to={loan.loanPath}>
                        <Button variant="primary" fullWidth>
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                      <Link to={loan.calculatorPath}>
                        <Button variant="outline" fullWidth>
                          Calculate EMI
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Middle Column - Features */}
                  <div className="lg:col-span-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {loan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Right Column - Eligibility */}
                  <div className="lg:col-span-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
                    <ul className="space-y-3">
                      {loan.eligibility.map((criteria, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <Button variant="outline" size="small" fullWidth>
                        Check Eligibility
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="primary" padding="medium">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help Choosing the Right Loan?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Our loan experts are here to guide you through the process and help you make the best decision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary" size="large">
                Talk to an Expert
              </Button>
            </Link>
            <Link to="/faq">
              <Button variant="outline" size="large">
                View FAQs
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default LoanCategories;