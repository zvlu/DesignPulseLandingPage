import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, FileText, BookOpen, Shield } from 'lucide-react';
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
const FAQPage: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const faqs = [
    {
      id: 'start-project',
      question: 'How do I start a project?',
      answer: 'Fill out our contact form, and we\'ll reply with a plan and pricing in 24 hours.'
    },
    {
      id: 'project-timeline',
      question: 'How long does it take to complete a project?',
      answer: 'With AI, we\'re fast: basic landing pages take 1-2 days, standard projects like apps or sites take 3-5 days, premium work takes 7-10 days.'
    },
    {
      id: 'changes-after-launch',
      question: 'What if I need changes after launch?',
      answer: 'We offer revisions during the project and support plans from $199/month post-launch.'
    },
    {
      id: 'contact-support',
      question: 'How do I contact support?',
      answer: 'Email support@designpulsestudio.com or use our contact page—we reply in 24 hours.'
    },
    {
      id: 'payment-methods',
      question: 'What payment methods do you accept?',
      answer: 'We take credit cards, bank transfers, and PayPal, with milestone payments for big projects.'
    },
    {
      id: 'design-revisions',
      question: 'How many design revisions do I get?',
      answer: 'Packages include 2-3 revisions; extra ones can be added.'
    },
    {
      id: 'content-updates',
      question: 'Can I update my website content myself?',
      answer: 'Yes, we build with user-friendly content management systems.'
    },
    {
      id: 'hosting-setup',
      question: 'Do you provide hosting?',
      answer: 'We can set up hosting for $10-$50/month or guide you to self-host.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Your top questions about our fast design process
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                    onClick={() => toggleQuestion(faq.id)}
                    aria-expanded={openQuestion === faq.id}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="font-medium text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {faq.question}
                    </span>
                    {openQuestion === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-[#003366]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#003366]" />
                    )}
                  </button>
                  <div 
                    id={`faq-answer-${faq.id}`}
                    className={`px-6 pb-4 ${openQuestion === faq.id ? 'block' : 'hidden'}`}
                  >
                    <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="bg-[#003366]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-[#003366]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Documentation
              </h3>
              <p className="text-gray-600 mb-4">
                Guides for your website or app
              </p>
              <Link 
                to="/documentation" 
                className="inline-flex items-center text-[#003366] font-medium hover:text-[#002244]"
              >
                View Documentation
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="bg-[#003366]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-[#003366]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Blog
              </h3>
              <p className="text-gray-600 mb-4">
                Design tips and insights
              </p>
              <Link 
                to="/blog" 
                className="inline-flex items-center text-[#003366] font-medium hover:text-[#002244]"
              >
                Read Our Blog
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="bg-[#003366]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-[#003366]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Privacy Policy
              </h3>
              <p className="text-gray-600 mb-4">
                How we protect your data
              </p>
              <Link 
                to="/privacy-policy" 
                className="inline-flex items-center text-[#003366] font-medium hover:text-[#002244]"
              >
                Read Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Still Have Questions?
            </h2>
            <p className="text-gray-200 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our team is ready to help you with any questions you might have about our services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-[#003366] rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;