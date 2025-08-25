import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import LoanCategories from './pages/LoanCategories';
// Loan Pages
import PersonalLoan from './pages/loans/PersonalLoan';
import HomeLoan from './pages/loans/HomeLoan';
import CarLoan from './pages/loans/CarLoan';
import BikeLoan from './pages/loans/BikeLoan';
import BusinessLoan from './pages/loans/BusinessLoan';
import EducationLoan from './pages/loans/EducationLoan';
// Calculator Pages
import PersonalLoanCalculator from './pages/calculators/PersonalLoanCalculator';
import HomeLoanCalculator from './pages/calculators/HomeLoanCalculator';
import CarLoanCalculator from './pages/calculators/CarLoanCalculator';
import BikeLoanCalculator from './pages/calculators/BikeLoanCalculator';
import BusinessLoanCalculator from './pages/calculators/BusinessLoanCalculator';
import EducationLoanCalculator from './pages/calculators/EducationLoanCalculator';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="loan-categories" element={<LoanCategories />} />
            {/* Loan Pages */}
            <Route path="loans">
              <Route path="personal-loan" element={<PersonalLoan />} />
              <Route path="home-loan" element={<HomeLoan />} />
              <Route path="car-loan" element={<CarLoan />} />
              <Route path="bike-loan" element={<BikeLoan />} />
              <Route path="business-loan" element={<BusinessLoan />} />
              <Route path="education-loan" element={<EducationLoan />} />
            </Route>
            {/* Calculator Pages */}
            <Route path="calculators">
              <Route path="personal-loan" element={<PersonalLoanCalculator />} />
              <Route path="home-loan" element={<HomeLoanCalculator />} />
              <Route path="car-loan" element={<CarLoanCalculator />} />
              <Route path="bike-loan" element={<BikeLoanCalculator />} />
              <Route path="business-loan" element={<BusinessLoanCalculator />} />
              <Route path="education-loan" element={<EducationLoanCalculator />} />
            </Route>
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;