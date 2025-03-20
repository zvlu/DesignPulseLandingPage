import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only on mount
  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              DesignPulse Studio Privacy Policy
            </h1>
            <p className="text-xl text-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Effective Date: March 3, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-[#003366] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Introduction
              </h2>
            </div>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                At DesignPulse Studio, we value your privacy. This policy explains how we collect, use, and protect your information.
              </p>
              <p>
                This Privacy Policy applies to all information collected through our website, and any related services, sales, marketing, or events (collectively, the "Services"). We respect your privacy and are committed to protecting your personal data.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Information We Collect
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                We collect data you provide (e.g., name, email) via our contact form and analytics data from site visits to improve our services.
              </p>
              <p className="mb-4">
                <strong>Personal Information:</strong> When you fill out our contact form or subscribe to our newsletter, we collect your name, email address, and any other information you choose to provide.
              </p>
              <p className="mb-4">
                <strong>Usage Data:</strong> We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.
              </p>
              <p>
                <strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              How We Use Your Information
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                We use your data to respond to inquiries, deliver projects, and enhance your experience. We don't sell your information.
              </p>
              <p className="mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>To provide and maintain our Services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you updates, newsletters, and marketing communications (if you've opted in)</li>
                <li>To improve our website and services</li>
                <li>To analyze usage patterns and trends</li>
                <li>To protect our Services and users from fraudulent or harmful activities</li>
              </ul>
              <p>
                We will never sell, rent, or share your personal information with third parties for marketing purposes without your explicit consent.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Data Protection
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                We use secure tools to store your data and comply with applicable laws.
              </p>
              <p className="mb-4">
                The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="mb-4">
                We regularly review our information collection, storage, and processing practices, including physical security measures, to guard against unauthorized access to systems.
              </p>
              <p>
                We restrict access to personal information to our employees, contractors, and agents who need to know that information in order to process it for us, and who are subject to strict contractual confidentiality obligations.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Mail className="h-6 w-6 text-[#003366] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Contact Us
              </h2>
            </div>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Questions? Email us at privacy@designpulsestudio.com.
              </p>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>By email: privacy@designpulsestudio.com</li>
                <li>By visiting the contact page on our website: <Link to="/contact" className="text-[#003366] hover:underline">Contact Us</Link></li>
              </ul>
              <p>
                We will respond to your request within a reasonable timeframe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Have Questions About Our Privacy Practices?
            </h2>
            <p className="text-gray-200 mb-6">
              We're committed to transparency and protecting your data. Reach out to our team for any privacy-related concerns.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-white text-[#003366] rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;