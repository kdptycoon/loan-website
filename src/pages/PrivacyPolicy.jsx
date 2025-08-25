import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Card from '../components/Card';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: `We collect information you provide directly to us, such as when you create an account, apply for a loan, or contact us for support. This may include:
      
      • Personal information (name, email, phone number, address)
      • Financial information (income, employment details, bank statements)
      • Government-issued identification documents
      • Credit history and scores
      • Device and usage information`,
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information we collect to:
      
      • Process loan applications and determine eligibility
      • Verify your identity and prevent fraud
      • Communicate with you about your loans and our services
      • Improve our services and develop new features
      • Comply with legal obligations and regulatory requirements
      • Send promotional communications (with your consent)`,
    },
    {
      title: 'Information Sharing',
      content: `We do not sell, trade, or rent your personal information. We may share your information with:
      
      • Credit bureaus for credit checks
      • Banking partners for loan disbursement
      • Third-party service providers who assist in our operations
      • Law enforcement agencies when required by law
      • Other parties with your explicit consent`,
    },
    {
      title: 'Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
      
      • Encryption of sensitive data
      • Regular security assessments
      • Limited access to personal information
      • Secure data storage and transmission
      • Regular security training for our staff`,
    },
    {
      title: 'Your Rights',
      content: `You have the right to:
      
      • Access your personal information
      • Correct inaccurate information
      • Request deletion of your information (subject to legal requirements)
      • Opt-out of marketing communications
      • Lodge a complaint with regulatory authorities`,
    },
    {
      title: 'Cookies and Tracking',
      content: `We use cookies and similar tracking technologies to:
      
      • Remember your preferences
      • Understand how you use our website
      • Improve your experience
      • Deliver targeted advertisements
      
      You can control cookies through your browser settings.`,
    },
    {
      title: 'Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.`,
    },
  ];
  
  return (
    <>
      <Helmet>
        <title>Privacy Policy - LoanWise</title>
        <meta name="description" content="Learn how LoanWise collects, uses, and protects your personal information. Read our comprehensive privacy policy." />
      </Helmet>
      
      <Section background="gray" padding="large">
        <div className="max-w-4xl mx-auto">
          <Card padding="large">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last Updated: January 1, 2024</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8">
                At LoanWise, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
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
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 text-gray-700">
                  <p>Email: privacy@loanwise.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Finance Street, City, State 12345</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPolicy;