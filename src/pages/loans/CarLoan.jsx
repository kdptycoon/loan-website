import { Helmet } from 'react-helmet-async';
import { Car, Shield, Clock, CreditCard, Zap, DollarSign, Calendar, Percent } from 'lucide-react';
import LoanPageTemplate from '../../components/LoanPageTemplate';

const CarLoan = () => {
  const features = [
    {
      icon: Car,
      title: '100% On-Road Funding',
      description: 'Complete financing including insurance',
    },
    {
      icon: Clock,
      title: 'Quick Approval',
      description: 'Get approval within 2 hours',
    },
    {
      icon: Shield,
      title: 'Minimal Down Payment',
      description: 'As low as 10% down payment',
    },
    {
      icon: CreditCard,
      title: 'Flexible EMI',
      description: 'Choose tenure up to 7 years',
    },
  ];
  
  const eligibility = {
    age: '21-60 years',
    income: 'Minimum $30,000/year',
    employment: 'Employed for at least 1 year',
    creditScore: '650+',
    documents: [
      'Identity Proof (PAN/Aadhaar)',
      'Address Proof',
      'Income Proof (Last 3 salary slips)',
      'Bank Statements (3 months)',
      'Proforma Invoice of car',
      'Valid Driving License',
    ],
  };
  
  const benefits = [
    'No prepayment charges',
    'Part payment facility',
    'Insurance bundled options',
    'Special rates for women',
    'Corporate tie-up benefits',
    'Online account management',
  ];
  
  const carTypes = [
    'New Car Purchase',
    'Used Car Purchase',
    'Loan Against Car',
    'Electric Vehicle Loan',
    'Luxury Car Loan',
    'Commercial Vehicle',
  ];
  
  const faqs = [
    {
      question: 'What is the maximum loan amount for a car?',
      answer: 'You can get up to 100% on-road funding for new cars and up to 85% of the valuation for used cars, subject to a maximum of $200,000.',
    },
    {
      question: 'Can I get a loan for a used car?',
      answer: 'Yes, we provide loans for used cars up to 5 years old from the date of manufacture. The car should be in good condition.',
    },
    {
      question: 'What is the minimum down payment required?',
      answer: 'The minimum down payment is typically 10-15% of the on-road price for new cars and 15-20% for used cars.',
    },
    {
      question: 'Can I prepay my car loan?',
      answer: 'Yes, you can prepay your car loan anytime without any prepayment charges after the first 6 months.',
    },
  ];
  
  const loanHighlights = [
    { icon: DollarSign, value: '$200K', label: 'Max Amount' },
    { icon: Percent, value: '9%', label: 'Starting Rate' },
    { icon: Calendar, value: '7 yrs', label: 'Max Tenure' },
    { icon: Zap, value: '2 hrs', label: 'Quick Approval' },
  ];
  
  const additionalSections = [
    {
      background: 'white',
      content: (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Special Offers on Car Loans</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Electric Vehicle Special</h3>
              <p className="text-gray-700 mb-4">Get 0.5% lower interest rate on electric and hybrid vehicles</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Additional tax benefits</li>
                <li>• Green loan certification</li>
                <li>• Priority processing</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Women Special Offer</h3>
              <p className="text-gray-700 mb-4">Exclusive benefits for women applicants</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 0.25% lower interest rate</li>
                <li>• Complimentary first year insurance</li>
                <li>• Zero processing fee</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  const calculatorProps = {
    title: 'Car Loan EMI Calculator',
    defaultAmount: 50000,
    defaultRate: 9,
    defaultTenure: 60,
    minAmount: 10000,
    maxAmount: 200000,
    minRate: 9,
    maxRate: 15,
    minTenure: 12,
    maxTenure: 84,
    amountStep: 5000,
  };
  
  return (
    <>
      <Helmet>
        <title>Car Loan - 100% Funding & Quick Approval | LoanWise</title>
        <meta name="description" content="Get car loan with 100% on-road funding. Interest rates starting from 9% p.a. Quick approval in 2 hours. Apply online!" />
      </Helmet>
      
      <LoanPageTemplate
        title="Car Loan"
        subtitle="Drive Your Dreams"
        description="Get 100% on-road funding with quick approval and flexible EMI options. Transform your car ownership dreams into reality today."
        highlights={loanHighlights}
        features={features}
        benefits={benefits}
        useCases={carTypes}
        eligibility={eligibility}
        additionalSections={additionalSections}
        faqs={faqs}
        calculatorProps={calculatorProps}
        ctaTitle="Ready to Drive Your Dream Car?"
        ctaDescription="Get instant approval with minimal documentation and attractive interest rates"
      />
    </>
  );
};

export default CarLoan;