import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import LoanCalculator from '../../components/LoanCalculator';
import Card from '../../components/Card';
import { CheckCircle } from 'lucide-react';

const PersonalLoanCalculator = () => {
  const benefits = [
    'No collateral required',
    'Quick approval within 24 hours',
    'Minimal documentation',
    'Flexible repayment options',
    'Competitive interest rates',
    'Online application process',
  ];
  
  const eligibility = [
    'Age between 21-60 years',
    'Minimum monthly income of $2,000',
    'Employed for at least 1 year',
    'Good credit score (650+)',
    'Valid ID and address proof',
    'Bank statements for last 6 months',
  ];
  
  return (
    <>
      <Helmet>
        <title>Personal Loan EMI Calculator | LoanWise</title>
        <meta name="description" content="Calculate your personal loan EMI instantly. Check monthly payments, total interest, and repayment schedule with our free personal loan calculator." />
      </Helmet>
      
      <Section background="gray" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Personal Loan EMI Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Calculate your monthly EMI and plan your personal loan with ease
            </p>
          </div>
          
          <LoanCalculator
            title="Calculate Your Personal Loan EMI"
            defaultAmount={50000}
            defaultRate={12}
            defaultTenure={36}
            minAmount={5000}
            maxAmount={500000}
            minRate={10.5}
            maxRate={24}
            minTenure={12}
            maxTenure={60}
            amountStep={5000}
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
              <ul className="space-y-3">
                {eligibility.map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          
          <Card className="mt-8 bg-primary-50 border-primary-200">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ready to Apply for a Personal Loan?
              </h3>
              <p className="text-gray-700 mb-4">
                Get instant approval with competitive interest rates starting from 10.5% p.a.
              </p>
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Apply Now
              </button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default PersonalLoanCalculator;