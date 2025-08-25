import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import LoanCalculator from '../../components/LoanCalculator';
import Card from '../../components/Card';
import { CheckCircle } from 'lucide-react';

const EducationLoanCalculator = () => {
  const benefits = [
    'Covers tuition and living expenses',
    'Tenure up to 15 years',
    'Moratorium period available',
    'Tax benefits under Section 80E',
    'Global university coverage',
    'No prepayment charges',
  ];
  
  const eligibility = [
    'Indian citizen',
    'Admission to recognized institution',
    'Co-applicant required',
    'Academic merit considered',
    'Age: 16-35 years',
    'Secured admission proof',
  ];
  
  return (
    <>
      <Helmet>
        <title>Education Loan EMI Calculator | LoanWise</title>
        <meta name="description" content="Calculate your education loan EMI instantly. Plan your higher education with our free education loan calculator. Check monthly payments." />
      </Helmet>
      
      <Section background="gray" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Education Loan EMI Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Invest in your future with affordable education loans
            </p>
          </div>
          
          <LoanCalculator
            title="Calculate Your Education Loan EMI"
            defaultAmount={100000}
            defaultRate={9}
            defaultTenure={84}
            minAmount={20000}
            maxAmount={1000000}
            minRate={9}
            maxRate={13}
            minTenure={12}
            maxTenure={180}
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
                Ready to Pursue Your Dreams?
              </h3>
              <p className="text-gray-700 mb-4">
                Get education loans with interest rates starting from 9% p.a. and moratorium benefits
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

export default EducationLoanCalculator;