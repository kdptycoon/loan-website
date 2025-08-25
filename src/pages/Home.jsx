import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Calculator, Star, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Section from '../components/Section';

const Home = () => {
  const loanTypes = [
    {
      title: 'Personal Loan',
      description: 'Quick approval for your personal needs',
      rate: 'From 10.5% p.a.',
      path: '/loans/personal-loan',
      icon: '💳',
    },
    {
      title: 'Home Loan',
      description: 'Make your dream home a reality',
      rate: 'From 8.5% p.a.',
      path: '/loans/home-loan',
      icon: '🏠',
    },
    {
      title: 'Car Loan',
      description: 'Drive your dream car today',
      rate: 'From 9.0% p.a.',
      path: '/loans/car-loan',
      icon: '🚗',
    },
    {
      title: 'Business Loan',
      description: 'Grow your business with ease',
      rate: 'From 11.0% p.a.',
      path: '/loans/business-loan',
      icon: '💼',
    },
  ];
  
  const features = [
    {
      icon: Clock,
      title: 'Quick Approval',
      description: 'Get your loan approved within 24 hours',
    },
    {
      icon: Shield,
      title: 'Secure Process',
      description: 'Bank-level security for your data',
    },
    {
      icon: Calculator,
      title: 'Transparent Pricing',
      description: 'No hidden charges or fees',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Rates',
      description: 'Best interest rates in the market',
    },
  ];
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'LoanWise helped me expand my business with their quick and hassle-free business loan. The process was transparent and the team was very supportive.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'First-time Home Buyer',
      content: 'I got my dream home thanks to LoanWise. Their home loan process was simple, and the interest rates were very competitive. Highly recommended!',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Professional',
      content: 'Needed a personal loan for medical expenses. LoanWise approved it within hours! Their customer service is exceptional and the EMI options are flexible.',
      rating: 5,
      avatar: '👩‍⚕️',
    },
  ];
  
  const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '$100M+', label: 'Loans Disbursed' },
    { value: '99%', label: 'Approval Rate' },
    { value: '4.8/5', label: 'Customer Rating' },
  ];
  
  return (
    <>
      <Helmet>
        <title>LoanWise - Quick & Easy Loans for All Your Needs</title>
        <meta name="description" content="Get instant loan approvals with competitive interest rates. Personal, Home, Car, and Business loans available. Calculate EMI online." />
      </Helmet>
      
      {/* Hero Section */}
      <Section background="primary" padding="large" container={false}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Get the <span className="text-primary-600">Right Loan</span> for Your Dreams
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Quick approvals, competitive rates, and transparent process. Your trusted partner for all loan needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="large">
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/loan-categories">
                  <Button variant="outline" size="large">
                    Explore Loans
                  </Button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  <span className="text-sm text-gray-600">RBI Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-600" />
                  <span className="text-sm text-gray-600">ISO Certified</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
                  alt="Happy family with their new home"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-primary-200 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* Stats Section */}
      <Section padding="small" background="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Loan Types */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Loan Type
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a variety of loans to meet your specific needs with competitive interest rates
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loanTypes.map((loan, index) => (
            <motion.div
              key={loan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={loan.path}>
                <Card hover className="h-full">
                  <div className="text-4xl mb-4">{loan.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{loan.title}</h3>
                  <p className="text-gray-600 mb-4">{loan.description}</p>
                  <p className="text-primary-600 font-semibold">{loan.rate}</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Features */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose LoanWise?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience hassle-free loans with our customer-first approach
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="primary" padding="medium">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Calculate your EMI instantly and apply for a loan in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calculators/personal-loan">
              <Button variant="primary" size="large">
                Calculate EMI <Calculator className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" size="large">
              Apply Now
            </Button>
          </div>
        </div>
      </Section>
      
      {/* Testimonials */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust LoanWise
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Process Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your loan approved in just three easy steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Apply Online', description: 'Fill out our simple online application form with your basic details', icon: '📝' },
            { step: '02', title: 'Quick Verification', description: 'Our team verifies your documents and eligibility within hours', icon: '✅' },
            { step: '03', title: 'Get Your Loan', description: 'Receive your loan amount directly in your bank account', icon: '💰' },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-6xl font-bold text-primary-100 absolute top-0 left-1/2 transform -translate-x-1/2 -z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-primary-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;