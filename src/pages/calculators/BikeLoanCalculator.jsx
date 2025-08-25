import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import LoanCalculator from '../../components/LoanCalculator';
import Card from '../../components/Card';
import { CheckCircle } from 'lucide-react';

const BikeLoanCalculator = () => {
  const benefits = [
    'Up to 95% bike funding',
    'Tenure up to 4 years',
    'Low interest rates',
    'Same day approval',
    'Flexible EMI options',
    'Minimal documentation',
  ];
  
  const eligibility = [
    'Age between 18-65 years',
    'Minimum monthly income of $1,250',
    'Valid driving license',
    'Good credit score (600+)',
    'Proforma invoice of bike',
    'Address and ID proof',
  ];
  
  return (
    <>
      <Helmet>
        <title>Bike Loan EMI Calculator | LoanWise</title>
        <meta name="description" content="Calculate your bike loan EMI instantly. Plan your two-wheeler purchase with our free bike loan calculator. Check monthly payments." />
      </Helmet>
      
      <Section background="gray" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Bike Loan EMI Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Own your favorite bike with easy EMI options
            </p>
          </div>
          
          <LoanCalculator
            title="Calculate Your Bike Loan EMI"
            defaultAmount={5000}
            defaultRate={10}
            defaultTenure={24}
            minAmount={1000}
            maxAmount={20000}
            minRate={10}
            maxRate={16}
            minTenure={6}
            maxTenure={48}
            amountStep={500}
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
                Ready to Ride Your Dream Bike?
              </h3>
              <p className="text-gray-700 mb-4">
                Get bike loans with interest rates starting from 10% p.a. and quick approval
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

export default BikeLoanCalculator;