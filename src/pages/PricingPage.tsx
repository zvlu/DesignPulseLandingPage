import React, { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only on mount
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Choose the package that's right for your business needs. All packages include personalized service and support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-white">
        <div className="container section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Basic Package</h3>
                <p className="text-gray-600 mb-6">Perfect for small businesses and startups</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">$999</span>
                </div>
                <p className="text-sm text-primary-600 mb-6">One-time payment</p>
                <Link to="/contact" className="btn btn-primary w-full mb-6">
                  Get Started
                </Link>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">A custom landing page with your branding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Mobile responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Basic contact form</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">2 rounds of revisions</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <span className="text-gray-500">Multi-page functionality</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <span className="text-gray-500">Advanced features</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Standard Package */}
            <div className="bg-white border-2 border-primary-600 rounded-xl shadow-lg overflow-hidden relative">
              <div className="bg-primary-600 text-white text-xs font-bold uppercase tracking-wider py-1 text-center">
                Most Popular
              </div>
              <div className="p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Standard Package</h3>
                <p className="text-gray-600 mb-6">Ideal for growing businesses</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">$2,499</span>
                </div>
                <p className="text-sm text-primary-600 mb-6">One-time payment</p>
                <Link to="/contact" className="btn btn-primary w-full mb-6">
                  Get Started
                </Link>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">A multi-page site or simple app</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Responsive design for all devices</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Interactive elements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Contact forms and basic functionality</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">3 rounds of revisions</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <span className="text-gray-500">Advanced custom features</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Package</h3>
                <p className="text-gray-600 mb-6">For businesses needing advanced solutions</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">$4,999+</span>
                </div>
                <p className="text-sm text-primary-600 mb-6">Starting price</p>
                <Link to="/contact" className="btn btn-primary w-full mb-6">
                  Get Started
                </Link>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Advanced features and bespoke design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Complex web applications</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Custom functionality</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">E-commerce capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Unlimited revisions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="bg-gray-50">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Add-On Services
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your package with these additional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SEO Add-On */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">SEO Package</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Optimize your site for search engines to improve visibility and drive organic traffic.
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-2xl font-bold text-gray-900">$299</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Keyword research</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">On-page optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Meta tags setup</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-secondary w-full">
                Add to Package
              </Link>
            </div>

            {/* Content Add-On */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Content Package</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Professional copywriting to engage your audience and convey your brand message effectively.
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-2xl font-bold text-gray-900">$499</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Up to 5 pages of content</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">SEO-optimized writing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">2 rounds of revisions</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-secondary w-full">
                Add to Package
              </Link>
            </div>

            {/* Maintenance Add-On */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Maintenance Package</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Keep your site up-to-date, secure, and running smoothly with our monthly maintenance service.
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-2xl font-bold text-gray-900">$199</span>
                <span className="text-gray-600 ml-1">/ month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Regular updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Security monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Monthly performance report</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-secondary w-full">
                Add to Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our pricing and packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What's included in the Basic Package?</h3>
              <p className="text-gray-600">
                The Basic Package includes a custom landing page with your branding, mobile responsive design, a basic contact form, and 2 rounds of revisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does it take to complete a project?</h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity. Basic packages typically take 2-3 weeks, Standard packages 4-6 weeks, and Premium packages 6-12 weeks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer custom quotes for specific projects?</h3>
              <p className="text-gray-600">
                Yes, we offer custom quotes for projects with specific requirements. Contact us to discuss your needs and we'll provide a tailored proposal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, bank transfers, and PayPal. For larger projects, we offer flexible payment schedules with a deposit to start.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide ongoing support after launch?</h3>
              <p className="text-gray-600">
                Yes, we offer a Maintenance Package for $199/month that includes regular updates, security monitoring, and monthly performance reports.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I upgrade my package later?</h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade your package or add services at any time. We'll work with you to ensure a smooth transition and minimal disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact us today to discuss your project and find the perfect package for your needs.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;