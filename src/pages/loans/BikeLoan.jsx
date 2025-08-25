import { Helmet } from 'react-helmet-async';
import { Bike, Shield, Clock, CreditCard, Zap, Percent, Calendar, DollarSign } from 'lucide-react';
import LoanPageTemplate from '../../components/LoanPageTemplate';

const BikeLoan = () => {
  const features = [
    {
      icon: Bike,
      title: '95% Funding',
      description: 'Get up to 95% of bike value',
    },
    {
      icon: Clock,
      title: 'Same Day Approval',
      description: 'Quick decision within hours',
    },
    {
      icon: Shield,
      title: 'Low Interest Rates',
      description: 'Starting from 10% p.a.',
    },
    {
      icon: CreditCard,
      title: 'Flexible EMI',
      description: 'Choose tenure up to 4 years',
    },
  ];
  
  const eligibility = {
    age: '18-65 years',
    income: 'Minimum $15,000/year',
    employment: 'Employed for at least 6 months',
    creditScore: '600+',
    documents: [
      'Identity Proof (PAN/Aadhaar)',
      'Address Proof',
      'Income Proof (Last 2 salary slips)',
      'Bank Statements (3 months)',
      'Proforma Invoice of bike',
      'Valid Driving License',
    ],
  };
  
  const benefits = [
    'No prepayment charges',
    'Minimal documentation',
    'Insurance financing available',
    'Special rates for women',
    'Online account management',
    'Doorstep service available',
  ];
  
  const bikeTypes = [
    'New Bike Purchase',
    'Used Bike Purchase',
    'Electric Bike',
    'Sports Bike',
    'Scooter Purchase',
    'Premium Bike',
  ];
  
  const faqs = [
    {
      question: 'What is the minimum down payment for a bike loan?',
      answer: 'The minimum down payment is typically 5-10% of the on-road price for new bikes and 15-20% for used bikes.',
    },
    {
      question: 'Can I get a loan for a used bike?',
      answer: 'Yes, we provide loans for used bikes up to 3 years old from the date of manufacture, subject to bike condition.',
    },
    {
      question: 'Is a guarantor required for a bike loan?',
      answer: 'Generally, no guarantor is required if you meet our eligibility criteria. However, it may be needed for certain cases.',
    },
    {
      question: 'What happens if I miss an EMI?',
      answer: 'Missing an EMI will attract late payment charges and may affect your credit score. Contact us immediately if you face payment difficulties.',
    },
  ];
  
  const loanHighlights = [
    { icon: Percent, value: '10%', label: 'Starting Rate' },
    { icon: DollarSign, value: '$20K', label: 'Max Amount' },
    { icon: Calendar, value: '4 yrs', label: 'Max Tenure' },
    { icon: Zap, value: 'Same Day', label: 'Approval' },
  ];
  
  const additionalSections = [
    {
      background: 'gray',
      content: (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Special Offers & Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Electric Bike Special</h3>
              <p className="text-gray-700 mb-2">1% lower interest rate</p>
              <p className="text-sm text-gray-600">Contribute to a greener environment with special rates on electric bikes</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Women Riders</h3>
              <p className="text-gray-700 mb-2">0.5% discount</p>
              <p className="text-sm text-gray-600">Exclusive benefits for women applicants on all bike loans</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Festival Offers</h3>
              <p className="text-gray-700 mb-2">Zero processing fee</p>
              <p className="text-sm text-gray-600">Special seasonal offers with additional benefits</p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  const calculatorProps = {
    title: 'Bike Loan EMI Calculator',
    defaultAmount: 5000,
    defaultRate: 10,
    defaultTenure: 24,
    minAmount: 1000,
    maxAmount: 20000,
    minRate: 10,
    maxRate: 16,
    minTenure: 6,
    maxTenure: 48,
    amountStep: 500,
  };
  
  return (
    <>
      <Helmet>
        <title>Bike Loan - Quick Approval & Low EMI | LoanWise</title>
        <meta name="description" content="Get bike loan with up to 95% funding. Interest rates starting from 10% p.a. Same day approval. Apply online!" />
      </Helmet>
      
      <LoanPageTemplate
        title="Bike Loan"
        subtitle="Ride Your Dreams"
        description="Own your dream bike with our easy financing options. Get up to 95% funding with same-day approval and flexible EMI options."
        highlights={loanHighlights}
        features={features}
        benefits={benefits}
        useCases={bikeTypes}
        eligibility={eligibility}
        additionalSections={additionalSections}
        faqs={faqs}
        calculatorProps={calculatorProps}
        ctaTitle="Ready to Ride Your Dream Bike?"
        ctaDescription="Get instant approval with minimal documentation and attractive interest rates"
      />
    </>
  );
};

export default BikeLoan;