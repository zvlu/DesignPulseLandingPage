import React from 'react';
import { Link } from 'react-router-dom';

const InternalTrainingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">Internal Training</h1>
            <p className="text-xl text-primary-100 mb-8">
              Unlock the full potential of DesignPulseStudio.ai tools with tailored training for your team. Learn to leverage custom websites, apps, and chatbots to grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Training Offerings */}
      <section className="bg-white">
        <div className="container section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Website Training */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Website Management</h3>
              <p className="text-gray-600">
                Train your team to update and optimize your custom website, driving more traffic and conversions.
              </p>
            </div>

            {/* App Training */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">App Utilization</h3>
              <p className="text-gray-600">
                Master your mobile app—whether it’s for client management, finance tracking, or customer engagement.
              </p>
            </div>

            {/* Chatbot Training */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-4a2 2 0 012-2h10a2 2 0 012 2v4h-4M9 16a4 4 0 008 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chatbot Integration</h3>
              <p className="text-gray-600">
                Learn to deploy and manage AI chatbots for customer service, bookings, or lead generation.
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h2 className="heading-lg text-gray-900 mb-6">
              Ready to Train Your Team?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us to customize a training plan that fits your business needs.
            </p>
            <Link
              to="/contact"
              className="btn bg-primary-600 text-white hover:bg-primary-700 inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">Training FAQs</h2>
            <p className="text-xl text-gray-600">
              Common questions about our training programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What does the training cover?</h3>
              <p className="text-gray-600">
                Our programs teach your team to use our custom websites, apps, and chatbots effectively for your specific goals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long is the training?</h3>
              <p className="text-gray-600">
                Sessions range from 1-3 hours, tailored to your team’s pace and needs, with ongoing support available.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is it in-person or online?</h3>
              <p className="text-gray-600">
                We offer both options—virtual sessions for convenience or on-site training for hands-on guidance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do we get started?</h3>
              <p className="text-gray-600">
                Reach out via our contact page, and we’ll set up a plan that works for your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternalTrainingPage;