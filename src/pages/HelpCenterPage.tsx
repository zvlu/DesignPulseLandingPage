import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Search, Mail, Phone, MessageSquare, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

useEffect(() => {
  window.scrollTo(0, 0);
}, []); // Empty dependency array ensures it runs only on mount

const HelpCenterPage: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>('start-project');
  const [selectedCategory, setSelectedCategory] = useState<string>('all'); // State for active category

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  // FAQ Data with Categories
  const faqs = [
    { id: 'start-project', question: 'How do I start a project?', answer: 'Fill out our contact form with your needs, and we’ll reply with a plan and pricing in 24 hours.', category: 'getting-started' },
    { id: 'project-timeline', question: 'How long does it take to complete a project?', answer: 'With AI, we’re fast: basic landing pages take 1-2 days, standard projects like apps or sites take 3-5 days, premium work takes 7-10 days.', category: 'design' },
    { id: 'changes-after-launch', question: 'What if I need changes after launch?', answer: 'We offer revisions during the project and support plans from $199/month post-launch.', category: 'maintenance' },
    { id: 'contact-support', question: 'How do I contact support?', answer: 'Email support@designpulsestudio.com or use our contact page—we reply in 24 hours.', category: 'maintenance' },
    { id: 'payment-methods', question: 'What payment methods do you accept?', answer: 'We take credit cards, bank transfers, and PayPal, with milestone payments for big projects.', category: 'billing' },
    { id: 'design-revisions', question: 'How many design revisions do I get?', answer: 'Packages include 2-3 revisions; extra ones can be added.', category: 'design' },
    { id: 'project-process', question: 'What’s your process for starting a project?', answer: 'Contact us, share your vision, get a quote, and we’ll deliver—often in 1-2 days for basic projects.', category: 'getting-started' },
    { id: 'content-updates', question: 'Can I update my website content myself?', answer: 'Yes, we build with user-friendly content management systems.', category: 'development' },
    { id: 'hosting-setup', question: 'Do you provide hosting?', answer: 'We can set up hosting for $10-$50/month or guide you to self-host.', category: 'hosting' },
  ];

  // Categories Data
  const categories = [
    { id: 'all', name: 'All Topics', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'getting-started', name: 'Getting Started', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'billing', name: 'Billing & Payments', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'design', name: 'Design Process', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'development', name: 'Development', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'maintenance', name: 'Maintenance & Support', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'hosting', name: 'Hosting & Domains', icon: <HelpCircle className="h-5 w-5" /> },
  ];

  // Filter FAQs based on selected category
  const filteredFaqs = selectedCategory === 'all' ? faqs : faqs.filter(faq => faq.category === selectedCategory);

  // Category Sections Content
  const categoryContent = {
    'getting-started': {
      title: 'Getting Started with DesignPulse Studio',
      content: 'Ready to kick off your project? Submit your details via our contact form, and we’ll send a quote within 24 hours. Basic projects like landing pages are delivered in 1-2 days thanks to our AI tools like Bolt.new. Share your vision, approve the plan, and watch us bring it to life—fast.',
    },
    'billing': {
      title: 'Billing & Payments',
      content: 'We offer flexible payment options: credit cards, bank transfers, or PayPal. Basic packages start at $999 (1-2 days), standard at $2,499 (3-5 days), and premium at $4,999+ (7-10 days). For larger projects, we can split payments into milestones—pay as we progress.',
    },
    'design': {
      title: 'Our Design Process',
      content: 'Our AI-driven design process is lightning-fast yet creative. We start with your brief, use Bolt.new to craft initial designs (1-2 days for basics), and refine with 2-3 revisions. From landing pages to apps, we focus on conversion, usability, and your brand’s vibe.',
    },
    'development': {
      title: 'Development Details',
      content: 'We build with AI for speed and precision, delivering responsive sites and apps. You get a content management system (CMS) to update text or images yourself—no coding needed. Standard projects (e.g., multi-page sites) are ready in 3-5 days.',
    },
    'maintenance': {
      title: 'Maintenance & Support',
      content: 'Post-launch, we’ve got your back. Our $199/month maintenance plans keep your site or app updated and secure. Need tweaks? Contact us anytime—basic changes can be done in 1-2 days. We reply to support queries within 24 hours.',
    },
    'hosting': {
      title: 'Hosting & Domains',
      content: 'We can set up hosting for $10-$50/month, tailored to your needs, or guide you to self-host with providers like Vercel or Netlify. Domains aren’t included, but we’ll help you connect yours to your site or app, live in days.',
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              DesignPulse Studio Help Center
            </h1>
            <p className="text-xl text-gray-200 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Find answers and support for your design projects
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-5 py-3 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Explore Help Topics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow cursor-pointer ${selectedCategory === category.id ? 'border-2 border-[#003366]' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="bg-[#003366]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  {category.icon}
                </div>
                <h3 className="font-medium text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Content Section */}
      {selectedCategory !== 'all' && (
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {categoryContent[selectedCategory].title}
              </h2>
              <p className="text-gray-600 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {categoryContent[selectedCategory].content}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-[#003366] font-medium hover:text-[#002244]"
              >
                Need more help? Contact us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                    onClick={() => toggleQuestion(faq.id)}
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
                  {openQuestion === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Can't find what you're looking for?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#003366] text-white rounded-lg font-medium hover:bg-[#002244] transition-colors"
              >
                Contact Support <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-[#003366]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-[#003366]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Email Support
              </h3>
              <p className="text-gray-600 mb-4">Replies within 24 hours.</p>
              <a href="mailto:support@designpulsestudio.com" className="text-[#003366] font-medium hover:underline">
                support@designpulsestudio.com
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-[#003366]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-[#003366]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Phone Support
              </h3>
              <p className="text-gray-600 mb-4">Mon-Fri, 9am-5pm EST.</p>
              <a href="tel:+18603710882" className="text-[#003366] font-medium hover:underline">
                +1 (860) 371-0882
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-[#003366]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-[#003366]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Contact Form
              </h3>
              <p className="text-gray-600 mb-4">We’ll get back to you fast.</p>
              <Link to="/contact" className="text-[#003366] font-medium hover:underline">
                Go to Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Documentation
              </h3>
              <p className="text-gray-600 mb-4">Guides for your website or app.</p>
              <Link to="/documentation" className="inline-flex items-center text-[#003366] font-medium hover:text-[#002244]">
                View Documentation <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Blog
              </h3>
              <p className="text-gray-600 mb-4">Design tips and insights.</p>
              <Link to="/blog" className="inline-flex items-center text-[#003366] font-medium hover:text-[#002244]">
                Read Our Blog <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Privacy Policy
              </h3>
              <p className="text-gray-600 mb-4">How we protect your data.</p>
              <Link to="/privacy-policy" className="inline-flex items-center text-[#003366] font-medium hover:text-[#002244]">
                Read Privacy Policy <ArrowRight className="ml-1 h-4 w-4" />
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
              Still Need Help?
            </h2>
            <p className="text-gray-200 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our team delivers fast—basic projects in 1-2 days. Contact us for quick support!
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

export default HelpCenterPage;