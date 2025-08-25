import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calculator, Home, Info, Phone, HelpCircle, FileText } from 'lucide-react';
import Button from '../components/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { 
      name: 'Loans', 
      path: '/loans',
      icon: FileText,
      subItems: [
        { name: 'Personal Loan', path: '/loans/personal-loan' },
        { name: 'Home Loan', path: '/loans/home-loan' },
        { name: 'Car Loan', path: '/loans/car-loan' },
        { name: 'Bike Loan', path: '/loans/bike-loan' },
        { name: 'Business Loan', path: '/loans/business-loan' },
        { name: 'Education Loan', path: '/loans/education-loan' },
      ]
    },
    { 
      name: 'Calculators', 
      path: '/calculators',
      icon: Calculator,
      subItems: [
        { name: 'Personal Loan Calculator', path: '/calculators/personal-loan' },
        { name: 'Home Loan Calculator', path: '/calculators/home-loan' },
        { name: 'Car Loan Calculator', path: '/calculators/car-loan' },
        { name: 'Bike Loan Calculator', path: '/calculators/bike-loan' },
        { name: 'Business Loan Calculator', path: '/calculators/business-loan' },
        { name: 'Education Loan Calculator', path: '/calculators/education-loan' },
      ]
    },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];
  
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">LW</span>
            </div>
            <span className="font-bold text-xl text-gray-900">LoanWise</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subItems ? (
                  // For items with dropdowns, make them non-clickable
                  <div
                    className={`
                      flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer
                      ${isActive(link.path) 
                        ? 'text-primary-600 bg-primary-50' 
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }
                    `}
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </div>
                ) : (
                  // Regular links
                  <Link
                    to={link.path}
                    className={`
                      flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${isActive(link.path) 
                        ? 'text-primary-600 bg-primary-50' 
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }
                    `}
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                )}
                
                {/* Dropdown for items with subItems */}
                {link.subItems && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-lg py-2 mt-1">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Button variant="primary" size="small">
              Apply Now
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subItems ? (
                    // For items with dropdowns, just show the label
                    <div
                      className={`
                        flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors
                        ${isActive(link.path) 
                          ? 'text-primary-600 bg-primary-50' 
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                        }
                      `}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </div>
                  ) : (
                    // Regular links
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors
                        ${isActive(link.path) 
                          ? 'text-primary-600 bg-primary-50' 
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                        }
                      `}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </Link>
                  )}
                  
                  {/* Mobile Dropdown */}
                  {link.subItems && (
                    <div className="ml-8 mt-2 space-y-1">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4">
                <Button variant="primary" fullWidth onClick={() => setIsOpen(false)}>
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;