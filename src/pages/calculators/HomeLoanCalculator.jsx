import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import LoanCalculator from '../../components/LoanCalculator';
import Card from '../../components/Card';
import { CheckCircle } from 'lucide-react';

const HomeLoanCalculator = () => {
  const benefits = [
    'Loan amount up to $5 million',
    'Tenure up to 30 years',
    'Attractive interest rates',
    'Tax benefits under Section 80C & 24B',
    'Balance transfer facility',
    'Part payment option available',
  ];
  
  const eligibility = [
    'Age between 21-65 years',
    'Minimum monthly income of $3,500',
    'Employment stability (2+ years)',
    'Good credit score (700+)',
    'Property documents',
    'Income proof and bank statements',
  ];
  
  return (
    <>
      <Helmet>
        <title>Home Loan EMI Calculator | LoanWise</title>
        <meta name="description" content="Calculate your home loan EMI instantly. Plan your dream home purchase with our free home loan calculator. Check monthly payments and total interest." />
      </Helmet>
      
      <Section background="gray" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Home Loan EMI Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Plan your dream home purchase with accurate EMI calculations
            </p>
          </div>
          
          <LoanCalculator
            title="Calculate Your Home Loan EMI"
            defaultAmount={500000}
            defaultRate={8.5}
            defaultTenure={240}
            minAmount={100000}
            maxAmount={5000000}
            minRate={8.5}
            maxRate={12}
            minTenure={60}
            maxTenure={360}
            amountStep={50000}
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
                Ready to Own Your Dream Home?
              </h3>
              <p className="text-gray-700 mb-4">
                Get the best home loan rates starting from 8.5% p.a. with flexible repayment options
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

export default HomeLoanCalculator;