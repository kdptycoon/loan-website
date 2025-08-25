import { Helmet } from 'react-helmet-async';
import { GraduationCap, Globe, Clock, Calculator, DollarSign, Percent, Calendar, BookOpen } from 'lucide-react';
import LoanPageTemplate from '../../components/LoanPageTemplate';

const EducationLoan = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Global Education',
      description: 'Study anywhere in the world',
    },
    {
      icon: Clock,
      title: 'Moratorium Period',
      description: 'Pay after course completion',
    },
    {
      icon: Calculator,
      title: 'Tax Benefits',
      description: 'Under Section 80E',
    },
    {
      icon: Globe,
      title: 'Wide Coverage',
      description: 'All expenses covered',
    },
  ];
  
  const eligibility = {
    age: '16-35 years',
    nationality: 'Indian citizen',
    admission: 'Secured admission to recognized institution',
    creditScore: '650+',
    documents: [
      'Admission Letter',
      'Course Fee Structure',
      'Academic Records (10th, 12th, Graduation)',
      'Entrance Exam Scorecard',
      'Co-applicant Income Proof',
      'Identity & Address Proof',
    ],
  };
  
  const benefits = [
    'No processing fee for education loans',
    'Moratorium period of course duration + 1 year',
    'Simple interest during moratorium',
    'No prepayment charges',
    'Online loan tracking',
    'Quick sanction process',
    'Coverage for top universities globally',
    'Flexible repayment up to 15 years',
  ];
  
  const coveredExpenses = [
    'Tuition fees',
    'Hostel/accommodation charges',
    'Examination/library fees',
    'Laboratory fees',
    'Travel expenses abroad',
    'Purchase of books/equipment',
    'Laptop/computer',
    'Insurance premium',
  ];
  
  const faqs = [
    {
      question: 'What is the maximum education loan amount?',
      answer: 'For studies in India, up to $400,000. For studies abroad, up to $1,000,000. The actual amount depends on course fees and other expenses.',
    },
    {
      question: 'What is the moratorium period?',
      answer: 'The moratorium period is course duration + 1 year or 6 months after getting a job, whichever is earlier. During this period, you only pay simple interest.',
    },
    {
      question: 'Is collateral required for education loans?',
      answer: 'Loans up to $200,000 typically dont require collateral. For higher amounts, collateral in the form of property or fixed deposits may be required.',
    },
    {
      question: 'Can I get a loan for online courses?',
      answer: 'Yes, we provide loans for recognized online courses from accredited institutions, including professional certifications and degree programs.',
    },
  ];
  
  const loanHighlights = [
    { icon: DollarSign, value: '$1M', label: 'Max Amount' },
    { icon: Percent, value: '9%', label: 'Starting Rate' },
    { icon: Calendar, value: '15 yrs', label: 'Max Tenure' },
    { icon: BookOpen, value: 'Global', label: 'Coverage' },
  ];
  
  const additionalSections = [
    {
      background: 'white',
      content: (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What's Covered in Education Loan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Covered Expenses</h3>
              <ul className="space-y-3">
                {coveredExpenses.map((expense, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {expense}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">For Studies in India</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Maximum Amount: <span className="font-semibold">Up to $400,000</span></p>
                  <p>Interest Rate: <span className="font-semibold">9% - 11% p.a.</span></p>
                  <p>Margin: <span className="font-semibold">5% of total cost</span></p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">For Studies Abroad</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Maximum Amount: <span className="font-semibold">Up to $1,000,000</span></p>
                  <p>Interest Rate: <span className="font-semibold">10% - 13% p.a.</span></p>
                  <p>Margin: <span className="font-semibold">10% of total cost</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      background: 'gray',
      content: (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tax Benefits on Education Loans</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Section 80E</h3>
              <p className="text-xl text-primary-600">Full Interest Deduction</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Benefit Amount</h4>
                <p className="text-gray-700">No upper limit on deduction amount. Full interest paid is eligible for tax deduction.</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Benefit Period</h4>
                <p className="text-gray-700">Available for up to 8 years from the year you start repaying the loan.</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> This deduction is available only for higher education (post-senior secondary) for self, spouse, or children.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  const calculatorProps = {
    title: 'Education Loan EMI Calculator',
    defaultAmount: 100000,
    defaultRate: 9,
    defaultTenure: 84,
    minAmount: 20000,
    maxAmount: 1000000,
    minRate: 9,
    maxRate: 13,
    minTenure: 12,
    maxTenure: 180,
    amountStep: 10000,
  };
  
  return (
    <>
      <Helmet>
        <title>Education Loan - Study Your Dreams | LoanWise</title>
        <meta name="description" content="Get education loan for studies in India & abroad. Interest rates from 9% p.a. Tax benefits available. Moratorium period offered. Apply now!" />
      </Helmet>
      
      <LoanPageTemplate
        title="Education Loan"
        subtitle="Invest in Your Future"
        description="Make your educational dreams come true with our comprehensive education loans. Study at top institutions worldwide with flexible repayment and tax benefits."
        highlights={loanHighlights}
        features={features}
        benefits={benefits}
        useCases={coveredExpenses}
        eligibility={eligibility}
        additionalSections={additionalSections}
        faqs={faqs}
        calculatorProps={calculatorProps}
        ctaTitle="Ready to Pursue Your Dreams?"
        ctaDescription="Get education loan with attractive interest rates and flexible repayment options"
      />
    </>
  );
};

export default EducationLoan;