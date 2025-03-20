import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import UseCasesPage from './pages/UseCasesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import CloudPeakPage from './pages/CloudPeakPage';
import TaskFlowPage from './pages/TaskFlowPage';
import SonicPulsePage from './pages/SonicPulsePage';
import FitCorePage from './pages/FitCorePage';
import GreenLeafPage from './pages/GreenLeafPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DocumentationPage from './pages/DocumentationPage';
import HelpCenterPage from './pages/HelpCenterPage';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';
import InternalTrainingPage from './pages/InternalTrainingPage'; // Add this

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="use-cases" element={<UseCasesPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cloudpeak" element={<CloudPeakPage />} />
        <Route path="taskflow" element={<TaskFlowPage />} />
        <Route path="sonicpulse" element={<SonicPulsePage />} />
        <Route path="fitcore" element={<FitCorePage />} />
        <Route path="greenleaf" element={<GreenLeafPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="documentation" element={<DocumentationPage />} />
        <Route path="help" element={<HelpCenterPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="internal-training" element={<InternalTrainingPage />} /> {/* Add this */}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;