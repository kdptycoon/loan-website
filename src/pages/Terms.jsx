import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Card from '../components/Card';

const Terms = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using LoanWise's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      title: 'Use of Service',
      content: `Our services are available only to individuals who are at least 18 years old and can form legally binding contracts under applicable law. You agree to use our services only for lawful purposes and in accordance with these Terms.
      
      You agree not to:
      • Provide false or misleading information
      • Use our services for any illegal or unauthorized purpose
      • Interfere with or disrupt our services
      • Attempt to gain unauthorized access to our systems`,
    },
    {
      title: 'Loan Terms and Conditions',
      content: `All loans are subject to:
      
      • Credit approval and verification
      • Applicable interest rates and fees
      • Repayment terms as specified in your loan agreement
      • Late payment penalties as outlined in your agreement
      • Prepayment terms and conditions
      
      Loan approval is not guaranteed and is subject to our lending criteria.`,
    },
    {
      title: 'Fees and Charges',
      content: `By using our services, you agree to pay:
      
      • Processing fees (1-4% of loan amount)
      • Interest as per agreed rates
      • Late payment charges (2-3% of EMI amount)
      • Any applicable taxes and regulatory charges
      • Other fees as specified in your loan agreement
      
      All fees are non-refundable unless otherwise stated.`,
    },
    {
      title: 'Privacy and Data Protection',
      content: `Your use of our services is also governed by our Privacy Policy. By using our services, you consent to the collection, use, and sharing of your information as described in our Privacy Policy.`,
    },
    {
      title: 'Intellectual Property',
      content: `All content on this website, including text, graphics, logos, images, and software, is the property of LoanWise or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.`,
    },
    {
      title: 'Disclaimers',
      content: `Our services are provided "as is" without any warranties, express or implied. We do not guarantee:
      
      • Loan approval for all applicants
      • Specific interest rates or terms
      • Uninterrupted or error-free service
      • Accuracy of loan calculators (for estimation only)`,
    },
    {
      title: 'Limitation of Liability',
      content: `To the maximum extent permitted by law, LoanWise shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
      
      • Your use or inability to use our services
      • Any unauthorized access to your personal information
      • Any errors or omissions in content
      • Any loss of profits or revenue`,
    },
    {
      title: 'Indemnification',
      content: `You agree to indemnify and hold harmless LoanWise, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:
      
      • Your violation of these Terms
      • Your violation of any third-party rights
      • Your use or misuse of our services
      • Any false or misleading information you provide`,
    },
    {
      title: 'Governing Law',
      content: `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which LoanWise operates, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of competent jurisdiction.`,
    },
    {
      title: 'Changes to Terms',
      content: `We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.`,
    },
  ];
  
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - LoanWise</title>
        <meta name="description" content="Read LoanWise's terms and conditions for using our loan services. Understand your rights and obligations." />
      </Helmet>
      
      <Section background="gray" padding="large">
        <div className="max-w-4xl mx-auto">
          <Card padding="large">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-gray-600 mb-8">Effective Date: January 1, 2024</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8">
                Welcome to LoanWise. These Terms and Conditions ("Terms") govern your use of our website and services. 
                By accessing or using our services, you agree to be bound by these Terms. Please read them carefully.
              </p>
              
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      {index + 1}. {section.title}
                    </h2>
                    <div className="text-gray-700 whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-4 text-gray-700">
                  <p>Email: legal@loanwise.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Finance Street, City, State 12345</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary-50 border border-primary-200 rounded-lg">
                <p className="text-gray-700 font-medium">
                  By using LoanWise services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default Terms;