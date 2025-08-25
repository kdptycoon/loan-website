import { Helmet } from 'react-helmet-async';
import { Home, Shield, Percent, FileText, Building, TrendingUp, Clock, DollarSign } from 'lucide-react';
import LoanPageTemplate from '../../components/LoanPageTemplate';

const HomeLoan = () => {
  const features = [
    {
      icon: Home,
      title: 'High Loan Amount',
      description: 'Get up to 90% of property value',
    },
    {
      icon: Percent,
      title: 'Low Interest Rates',
      description: 'Starting from 8.5% p.a.',
    },
    {
      icon: Shield,
      title: 'Long Tenure',
      description: 'Repayment up to 30 years',
    },
    {
      icon: FileText,
      title: 'Tax Benefits',
      description: 'Save under Section 80C & 24B',
    },
  ];
  
  const eligibility = {
    age: '21-65 years',
    income: 'Minimum $40,000/year',
    employment: 'Salaried or Self-employed',
    creditScore: '700+',
    property: 'Should be residential property',
    documents: [
      'Identity Proof (PAN, Aadhaar)',
      'Address Proof',
      'Income Documents (Salary slips, ITR)',
      'Bank Statements (6 months)',
      'Property Documents',
      'Employment/Business Proof',
    ],
  };
  
  const benefits = [
    'No prepayment charges for floating rate loans',
    'Balance transfer facility available',
    'Top-up loans for existing customers',
    'Online account management',
    'Doorstep service available',
    'Insurance options available',
    'Part payment facility',
    'Flexible EMI options',
  ];
  
  const loanTypes = [
    'New Home Purchase',
    'Home Construction',
    'Home Extension',
    'Home Improvement',
    'Plot Purchase',
    'Balance Transfer',
  ];
  
  const faqs = [
    {
      question: 'What is the maximum home loan amount I can get?',
      answer: 'You can get up to 90% of the property value or $5,000,000, whichever is lower. The exact amount depends on your income and repayment capacity.',
    },
    {
      question: 'What are the tax benefits on home loans?',
      answer: 'You can claim deduction up to $150,000 on principal repayment under Section 80C and up to $200,000 on interest payment under Section 24B.',
    },
    {
      question: 'Can I prepay my home loan?',
      answer: 'Yes, you can prepay your home loan partially or fully. For floating rate loans, there are no prepayment charges.',
    },
    {
      question: 'What happens if property papers are not clear?',
      answer: 'We conduct thorough legal verification of property documents. If papers are not clear, the loan application may be rejected or kept on hold until issues are resolved.',
    },
  ];
  
  const loanHighlights = [
    { icon: Building, value: '90%', label: 'Max Funding' },
    { icon: TrendingUp, value: '8.5%', label: 'Starting Rate' },
    { icon: Clock, value: '30 yrs', label: 'Max Tenure' },
    { icon: DollarSign, value: '$5M', label: 'Max Amount' },
  ];
  
  const additionalSections = [
    {
      background: 'white',
      content: (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Home Loans We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-xl p-6 hover:shadow-lg transition-all">
                <Home className="w-10 h-10 text-primary-600 mb-3" />
                <h3 className="font-semibold text-gray-900">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      background: 'gray',
      content: (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tax Benefits Explained</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Section 80C</h3>
              <p className="text-gray-700 mb-2">Deduction on Principal Repayment</p>
              <p className="text-2xl font-bold text-primary-600">Up to $150,000</p>
              <p className="text-sm text-gray-600 mt-2">
                You can claim deduction on the principal amount repaid during the financial year.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Section 24B</h3>
              <p className="text-gray-700 mb-2">Deduction on Interest Payment</p>
              <p className="text-2xl font-bold text-primary-600">Up to $200,000</p>
              <p className="text-sm text-gray-600 mt-2">
                You can claim deduction on the interest paid on home loan for self-occupied property.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  const calculatorProps = {
    title: 'Home Loan EMI Calculator',
    defaultAmount: 500000,
    defaultRate: 8.5,
    defaultTenure: 240,
    minAmount: 100000,
    maxAmount: 5000000,
    minRate: 8.5,
    maxRate: 12,
    minTenure: 12,
    maxTenure: 360,
    amountStep: 50000,
  };
  
  return (
    <>
      <Helmet>
        <title>Home Loan - Turn Your Dream Home into Reality | LoanWise</title>
        <meta name="description" content="Get home loan with interest rates starting from 8.5% p.a. Up to 90% funding. Tax benefits available. Apply online!" />
      </Helmet>
      
      <LoanPageTemplate
        title="Home Loan"
        subtitle="Your Dream Home Awaits"
        description="Make your dream of owning a home come true with our affordable home loans. Competitive rates, flexible tenure, and tax benefits included."
        highlights={loanHighlights}
        features={features}
        benefits={benefits}
        useCases={loanTypes}
        eligibility={eligibility}
        additionalSections={additionalSections}
        faqs={faqs}
        calculatorProps={calculatorProps}
        ctaTitle="Ready to Own Your Dream Home?"
        ctaDescription="Get the best home loan rates with quick approval and minimal documentation"
      />
    </>
  );
};

export default HomeLoan;