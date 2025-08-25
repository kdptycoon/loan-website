import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and work tirelessly to provide the best loan solutions.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'No hidden charges or fine print. We believe in complete transparency in all our dealings.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly innovating to make the loan process simpler, faster, and more accessible.',
    },
    {
      icon: Users,
      title: 'Trust',
      description: 'Building lasting relationships based on trust, integrity, and mutual respect.',
    },
  ];
  
  const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '50K+', label: 'Happy Customers' },
    { value: '99%', label: 'Approval Rate' },
    { value: '24hrs', label: 'Quick Processing' },
  ];
  
  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '👨‍💼',
      description: '15+ years in financial services',
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Operating Officer',
      image: '👩‍💼',
      description: 'Expert in loan operations',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: '👨‍💻',
      description: 'Leading our digital transformation',
    },
    {
      name: 'Emily Davis',
      role: 'Head of Customer Success',
      image: '👩‍💻',
      description: 'Ensuring customer satisfaction',
    },
  ];
  
  return (
    <>
      <Helmet>
        <title>About Us - LoanWise | Your Trusted Loan Partner</title>
        <meta name="description" content="Learn about LoanWise - your trusted partner for all loan needs. We provide quick, transparent, and hassle-free loan solutions." />
      </Helmet>
      
      {/* Hero Section */}
      <Section background="primary" padding="large">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            About LoanWise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700"
          >
            Your trusted partner for all loan needs. We're committed to making loans accessible, 
            transparent, and hassle-free for everyone.
          </motion.p>
        </div>
      </Section>
      
      {/* Mission & Vision */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To democratize access to credit by providing quick, transparent, and affordable loan 
              solutions to individuals and businesses across the country. We aim to be the bridge 
              between dreams and reality, helping our customers achieve their goals with financial 
              support when they need it most.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become the most trusted and preferred financial services provider in the country, 
              known for our customer-centric approach, innovative solutions, and commitment to 
              financial inclusion. We envision a future where everyone has access to the credit 
              they need to fulfill their aspirations.
            </p>
          </motion.div>
        </div>
      </Section>
      
      {/* Stats */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey So Far</h2>
          <p className="text-xl text-gray-600">Numbers that reflect our commitment and success</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Values */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These values guide everything we do and how we serve our customers
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Team */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to your financial success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Awards & Recognition */}
      <Section>
        <div className="text-center">
          <Award className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <TrendingUp className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Best Fintech Startup 2023</h3>
              <p className="text-sm text-gray-600">Financial Excellence Awards</p>
            </Card>
            <Card className="text-center">
              <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Customer Choice Award</h3>
              <p className="text-sm text-gray-600">Banking & Finance Sector</p>
            </Card>
            <Card className="text-center">
              <Award className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Innovation in Lending</h3>
              <p className="text-sm text-gray-600">Digital Finance Summit</p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;