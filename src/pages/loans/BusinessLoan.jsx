import { Helmet } from 'react-helmet-async';
import { Briefcase, TrendingUp, Shield, Clock, DollarSign, Building, Percent, Target } from 'lucide-react';
import LoanPageTemplate from '../../components/LoanPageTemplate';

const BusinessLoan = () => {
  const features = [
    {
      icon: Briefcase,
      title: 'High Loan Amount',
      description: 'Get up to $2 million funding',
    },
    {
      icon: Clock,
      title: 'Quick Disbursement',
      description: 'Funds in 3-5 business days',
    },
    {
      icon: Shield,
      title: 'Collateral-Free',
      description: 'No security required up to $500K',
    },
    {
      icon: TrendingUp,
      title: 'Flexible Repayment',
      description: 'Customized EMI options',
    },
  ];
  
  const eligibility = {
    age: 'Business vintage: 2+ years',
    income: 'Annual turnover: $100,000+',
    creditScore: '700+',
    profitability: 'Profitable for last 2 years',
    documents: [
      'Business Registration Certificate',
      'PAN Card of Business & Proprietor',
      'Last 2 years ITR & Financial Statements',
      'Bank Statements (12 months)',
      'GST Returns',
      'Business Profile & Projections',
    ],
  };
  
  const benefits = [
    'Minimal documentation',
    'Doorstep service',
    'Dedicated relationship manager',
    'Online loan management',
    'Part payment facility',
    'Top-up loans available',
  ];
  
  const useCases = [
    'Working capital requirements',
    'Business expansion',
    'Equipment purchase',
    'Inventory management',
    'Marketing campaigns',
    'Technology upgrades',
    'Hiring and training',
    'Office renovation',
  ];
  
  const faqs = [
    {
      question: 'What is the maximum business loan amount?',
      answer: 'You can get a business loan up to $2 million depending on your business turnover, profitability, and creditworthiness.',
    },
    {
      question: 'Is collateral required for business loans?',
      answer: 'Loans up to $500,000 are typically collateral-free. For higher amounts, collateral may be required based on risk assessment.',
    },
    {
      question: 'Can startups apply for business loans?',
      answer: 'We prefer businesses with at least 2 years of operation. However, startups with strong financials and business plans may be considered.',
    },
    {
      question: 'How quickly can I get the business loan?',
      answer: 'Once all documents are submitted and verified, loan disbursement typically happens within 3-5 business days.',
    },
  ];
  
  const loanHighlights = [
    { icon: DollarSign, value: '$2M', label: 'Max Amount' },
    { icon: Percent, value: '11%', label: 'Starting Rate' },
    { icon: Building, value: '2+ yrs', label: 'Business Age' },
    { icon: Target, value: '3-5 days', label: 'Quick Disbursal' },
  ];
  
  const additionalSections = [
    {
      background: 'white',
      content: (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Business Loans</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Working Capital Loan</h3>
              <p className="text-gray-700 mb-4">For day-to-day business operations</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quick approval process</li>
                <li>• Flexible tenure options</li>
                <li>• Overdraft facility available</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Equipment Finance</h3>
              <p className="text-gray-700 mb-4">Purchase machinery and equipment</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 100% equipment funding</li>
                <li>• Asset-backed security</li>
                <li>• Tax benefits available</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Expansion Loan</h3>
              <p className="text-gray-700 mb-4">Grow your business operations</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Large loan amounts</li>
                <li>• Long tenure up to 5 years</li>
                <li>• Competitive interest rates</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Invoice Financing</h3>
              <p className="text-gray-700 mb-4">Get advance on unpaid invoices</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quick cash flow solution</li>
                <li>• No collateral required</li>
                <li>• Flexible repayment terms</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  const calculatorProps = {
    title: 'Business Loan EMI Calculator',
    defaultAmount: 200000,
    defaultRate: 11,
    defaultTenure: 36,
    minAmount: 50000,
    maxAmount: 2000000,
    minRate: 11,
    maxRate: 20,
    minTenure: 12,
    maxTenure: 60,
    amountStep: 10000,
  };
  
  return (
    <>
      <Helmet>
        <title>Business Loan - Grow Your Business | LoanWise</title>
        <meta name="description" content="Get business loan up to $2 million with competitive rates. Quick approval, flexible repayment. Apply online for business financing!" />
      </Helmet>
      
      <LoanPageTemplate
        title="Business Loan"
        subtitle="Fuel Your Growth"
        description="Empower your business with flexible financing solutions. Get up to $2 million with quick disbursement and customized repayment options."
        highlights={loanHighlights}
        features={features}
        benefits={benefits}
        useCases={useCases}
        eligibility={eligibility}
        additionalSections={additionalSections}
        faqs={faqs}
        calculatorProps={calculatorProps}
        ctaTitle="Ready to Grow Your Business?"
        ctaDescription="Get the funding you need with competitive rates and flexible repayment options"
      />
    </>
  );
};

export default BusinessLoan;