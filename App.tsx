import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import StickyWhatsApp from './components/Layout/StickyWhatsApp';
import Home from './pages/Home';
import Services from './pages/Services';
import Assignments from './pages/Assignments';
import CustomRequest from './pages/CustomRequest';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ServiceAgreement from './pages/ServiceAgreement';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col font-sans text-dark-800">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/custom-request" element={<CustomRequest />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service-agreement" element={<ServiceAgreement />} />
          </Routes>
        </main>
        <Footer />
        <StickyWhatsApp />
      </div>
    </Router>
  );
};

export default App;