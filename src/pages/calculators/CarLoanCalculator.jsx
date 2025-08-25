import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import LoanCalculator from '../../components/LoanCalculator';
import Card from '../../components/Card';
import { CheckCircle } from 'lucide-react';

const CarLoanCalculator = () => {
  const benefits = [
    'Up to 100% on-road funding',
    'Tenure up to 7 years',
    'Competitive interest rates',
    'Quick approval process',
    'Minimal down payment',
    'Insurance bundled options',
  ];
  
  const eligibility = [
    'Age between 21-60 years',
    'Minimum monthly income of $2,500',
    'Valid driving license',
    'Good credit score (650+)',
    'Proforma invoice of car',
    'Income proof and ID documents',
  ];
  
  return (
    <>
      <Helmet>
        <title>Car Loan EMI Calculator | LoanWise</title>
        <meta name="description" content="Calculate your car loan EMI instantly. Plan your car purchase with our free car loan calculator. Check monthly payments and total interest." />
      </Helmet>
      
      <Section background="gray" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Car Loan EMI Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Drive your dream car with easy EMI options
            </p>
          </div>
          
          <LoanCalculator
            title="Calculate Your Car Loan EMI"
            defaultAmount={50000}
            defaultRate={9}
            defaultTenure={60}
            minAmount={10000}
            maxAmount={200000}
            minRate={9}
            maxRate={15}
            minTenure={12}
            maxTenure={84}
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
                Ready to Buy Your Dream Car?
              </h3>
              <p className="text-gray-700 mb-4">
                Get car loans with interest rates starting from 9% p.a. and flexible tenure options
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

export default CarLoanCalculator;