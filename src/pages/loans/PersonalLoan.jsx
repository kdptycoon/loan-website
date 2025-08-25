import { Helmet } from 'react-helmet-async';
import { Clock, Shield, Users, FileText, Zap, DollarSign, Award, TrendingUp } from 'lucide-react';
import LoanPageTemplate from '../../components/LoanPageTemplate';

const PersonalLoan = () => {
  const features = [
    {
      icon: Clock,
      title: 'Quick Approval',
      description: 'Get your loan approved within 24 hours',
    },
    {
      icon: Shield,
      title: 'No Collateral',
      description: 'No security or guarantor required',
    },
    {
      icon: FileText,
      title: 'Minimal Documentation',
      description: 'Simple paperwork and hassle-free process',
    },
    {
      icon: Users,
      title: 'Flexible Tenure',
      description: 'Choose repayment period from 12-60 months',
    },
  ];
  
  const eligibility = {
    age: '21-60 years',
    income: 'Minimum ₹3,00,000/year',
    employment: 'Salaried or Self-employed',
    creditScore: '650+',
    documents: [
      'PAN Card',
      'Aadhaar Card',
      'Salary Slips (Last 3 months)',
      'Bank Statements (Last 6 months)',
      'Employment Proof',
    ],
  };
  
  const benefits = [
    'No prepayment charges after 6 months',
    'Part payment facility available',
    'Top-up loans for existing customers',
    'Balance transfer option',
    'Insurance coverage available',
    'Digital loan management',
  ];
  
  const useCases = [
    'Medical emergencies',
    'Wedding expenses',
    'Home renovation',
    'Travel and vacation',
    'Debt consolidation',
    'Education expenses',
  ];
  
  const faqs = [
    {
      question: 'What is the maximum loan amount I can get?',
      answer: 'You can get a personal loan up to ₹50,00,000 depending on your income and creditworthiness.',
    },
    {
      question: 'How quickly will the loan be disbursed?',
      answer: 'Once approved, the loan amount is typically disbursed within 24-48 hours directly to your bank account.',
    },
    {
      question: 'Can I prepay my personal loan?',
      answer: 'Yes, you can prepay your loan partially or fully after 6 months with no prepayment charges.',
    },
    {
      question: 'What happens if I miss an EMI?',
      answer: 'Missing an EMI will attract late payment charges (2-3% of EMI amount) and may affect your credit score.',
    },
  ];
  
  const loanHighlights = [
    { icon: Zap, value: '24 hrs', label: 'Quick Approval' },
    { icon: DollarSign, value: '10.5%', label: 'Starting Rate' },
    { icon: Award, value: 'Zero', label: 'Collateral' },
    { icon: TrendingUp, value: '60', label: 'Max Tenure (months)' },
  ];
  
  const calculatorProps = {
    title: 'Personal Loan EMI Calculator',
    defaultAmount: 50000,
    defaultRate: 12,
    defaultTenure: 36,
    minAmount: 5000,
    maxAmount: 500000,
    minRate: 10.5,
    maxRate: 24,
    minTenure: 12,
    maxTenure: 60,
    amountStep: 5000,
  };
  
  return (
    <>
      <Helmet>
        <title>Personal Loan - Quick Approval & Low Interest Rates | LoanWise</title>
        <meta name="description" content="Get instant personal loan approval with interest rates starting from 10.5% p.a. No collateral required. Apply online now!" />
      </Helmet>
      
      <LoanPageTemplate
        title="Personal Loan"
        subtitle="Made Simple"
        description="Get instant funds for all your personal needs with competitive rates starting from 10.5% p.a. No hidden charges, no hassle."
        highlights={loanHighlights}
        features={features}
        benefits={benefits}
        useCases={useCases}
        eligibility={eligibility}
        faqs={faqs}
        calculatorProps={calculatorProps}
        ctaTitle="Ready to Get Your Personal Loan?"
        ctaDescription="Join thousands of satisfied customers who got their loans approved within 24 hours"
      />
    </>
  );
};

export default PersonalLoan;