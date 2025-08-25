import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import LoanCalculator from '../../components/LoanCalculator';
import Card from '../../components/Card';
import { CheckCircle } from 'lucide-react';

const BusinessLoanCalculator = () => {
  const benefits = [
    'Loan amount up to $2 million',
    'Tenure up to 5 years',
    'Collateral-free loans available',
    'Quick disbursement',
    'Flexible repayment options',
    'Overdraft facility available',
  ];
  
  const eligibility = [
    'Business vintage: 2+ years',
    'Annual turnover: $100,000+',
    'Profitable for last 2 years',
    'Good credit score (700+)',
    'Business registration proof',
    'Financial statements and ITR',
  ];
  
  return (
    <>
      <Helmet>
        <title>Business Loan EMI Calculator | LoanWise</title>
        <meta name="description" content="Calculate your business loan EMI instantly. Plan your business expansion with our free business loan calculator. Check monthly payments." />
      </Helmet>
      
      <Section background="gray" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Business Loan EMI Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Fuel your business growth with flexible loan options
            </p>
          </div>
          
          <LoanCalculator
            title="Calculate Your Business Loan EMI"
            defaultAmount={200000}
            defaultRate={11}
            defaultTenure={36}
            minAmount={50000}
            maxAmount={2000000}
            minRate={11}
            maxRate={20}
            minTenure={12}
            maxTenure={60}
            amountStep={10000}
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
                Ready to Grow Your Business?
              </h3>
              <p className="text-gray-700 mb-4">
                Get business loans with competitive rates starting from 11% p.a. and quick approval
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

export default BusinessLoanCalculator;