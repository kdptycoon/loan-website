import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const NotFound = () => {
  const popularLinks = [
    { name: 'Personal Loan Calculator', path: '/calculators/personal-loan' },
    { name: 'Home Loan Calculator', path: '/calculators/home-loan' },
    { name: 'Loan Categories', path: '/loan-categories' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
  ];
  
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | LoanWise</title>
        <meta name="description" content="Oops! The page you're looking for doesn't exist. Let us help you find what you need." />
      </Helmet>
      
      <Section padding="large" className="min-h-[70vh] flex items-center">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="text-9xl font-bold text-primary-200 mb-4">404</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to="/">
              <Button variant="primary" size="large">
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </Button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Popular Pages
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
              {popularLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  <span className="text-gray-700 group-hover:text-primary-600 transition-colors">
                    {link.name}
                  </span>
                  <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transform rotate-180 transition-all" />
                </Link>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 p-6 bg-primary-50 rounded-lg"
          >
            <Search className="w-8 h-8 text-primary-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-700 mb-4">
              Our support team is here to help you navigate to the right place.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="small">
                Contact Support
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default NotFound;