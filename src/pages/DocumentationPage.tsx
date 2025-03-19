import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Code, Settings, ArrowRight, CheckCircle, HelpCircle, Zap } from 'lucide-react';

useEffect(() => {
  window.scrollTo(0, 0);
}, []); // Empty dependency array ensures it runs only on mount

const DocumentationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('getting-started');

  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              DesignPulse Studio Documentation
            </h1>
            <p className="text-xl text-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Your guide to working with us and managing your designs
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Documentation
                </h3>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <button 
                        onClick={() => setActiveTab('getting-started')}
                        className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                          activeTab === 'getting-started' 
                            ? 'bg-[#003366] text-white' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <FileText className="h-5 w-5 mr-2" />
                        Getting Started
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('managing-website')}
                        className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                          activeTab === 'managing-website' 
                            ? 'bg-[#003366] text-white' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Settings className="h-5 w-5 mr-2" />
                        Managing Your Website
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('app-updates')}
                        className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                          activeTab === 'app-updates' 
                            ? 'bg-[#003366] text-white' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Code className="h-5 w-5 mr-2" />
                        App Updates
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('faq')}
                        className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                          activeTab === 'faq' 
                            ? 'bg-[#003366] text-white' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <HelpCircle className="h-5 w-5 mr-2" />
                        FAQ
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Getting Started */}
              {activeTab === 'getting-started' && (
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="h-6 w-6 text-[#003366] mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Getting Started
                    </h2>
                  </div>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-6">
                      Submit your project details via our contact form. We'll provide a quote within 24 hours and deliver basic projects in 1-2 days using AI tools like Bolt.new.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Project Kickoff Process</h3>
                    <ol className="list-decimal pl-6 space-y-4 mb-6">
                      <li>
                        <strong>Submit Project Details</strong>
                        <p className="mt-1">Fill out our detailed project brief form on the <Link to="/contact" className="text-[#003366] hover:underline">Contact page</Link>. The more information you provide, the more accurate our quote will be.</p>
                      </li>
                      <li>
                        <strong>Receive Your Quote</strong>
                        <p className="mt-1">Within 24 hours, you'll receive a comprehensive quote outlining project scope, timeline, and cost.</p>
                      </li>
                      <li>
                        <strong>Project Approval</strong>
                        <p className="mt-1">Once you approve the quote, we'll send a contract and request a 50% deposit to begin work.</p>
                      </li>
                      <li>
                        <strong>Kickoff Meeting</strong>
                        <p className="mt-1">We'll schedule a kickoff meeting to discuss your project in detail and answer any questions.</p>
                      </li>
                      <li>
                        <strong>Design Phase</strong>
                        <p className="mt-1">Our team will create initial designs using cutting-edge AI tools like Bolt.new for rapid prototyping.</p>
                      </li>
                    </ol>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What We Need From You</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li>Brand guidelines (if available)</li>
                      <li>Logo files in vector format (.ai, .eps, .svg)</li>
                      <li>Content for your website or app</li>
                      <li>Examples of designs you like</li>
                      <li>Any specific requirements or preferences</li>
                    </ul>

                    <div className="bg-[#003366]/5 p-6 rounded-lg my-8">
                      <h4 className="text-lg font-semibold text-[#003366] mb-2">Pro Tip</h4>
                      <p>
                        The more detailed your initial brief, the smoother the design process will be. Consider creating a mood board on Pinterest or collecting screenshots of designs you admire.
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Timeline Expectations</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse mb-6">
                        <thead>
                          <tr>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-50 text-left">Project Type</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-50 text-left">Typical Timeline</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Basic Landing Page</td>
                            <td className="border border-gray-300 px-4 py-2">1-2 days</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Standard Website/App</td>
                            <td className="border border-gray-300 px-4 py-2">3-5 days</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Premium Custom Solution</td>
                            <td className="border border-gray-300 px-4 py-2">7-10 days</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="flex justify-center mt-8">
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center px-6 py-3 bg-[#003366] text-white rounded-lg font-medium hover:bg-[#002244] transition-colors"
                      >
                        Start Your Project
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Managing Your Website */}
              {activeTab === 'managing-website' && (
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <Settings className="h-6 w-6 text-[#003366] mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Managing Your Website
                    </h2>
                  </div>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-6">
                      Your site can be live in as little as 1-2 days for basic designs. Use our $199/month maintenance plan or get a handover guide for self-management.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Maintenance Plan Details</h3>
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                      <div className="bg-[#003366] text-white p-4">
                        <h4 className="text-lg font-semibold">Premium Maintenance Plan - $199/month</h4>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Monthly security updates and patches</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Regular backups of your website</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Up to 2 hours of content updates per month</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Performance monitoring and optimization</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Monthly analytics report</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Priority support via email and phone</span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <Link 
                            to="/contact" 
                            className="inline-flex items-center px-6 py-3 bg-[#003366] text-white rounded-lg font-medium hover:bg-[#002244] transition-colors"
                          >
                            Sign Up for Maintenance
                          </Link>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Self-Management Guide</h3>
                    <p className="mb-4">
                      If you prefer to manage your website yourself, we provide a comprehensive handover package that includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li>
                        <strong>Documentation:</strong> Detailed guide on how to update content, add new pages, and manage media
                      </li>
                      <li>
                        <strong>Video Tutorials:</strong> Step-by-step screencasts showing common management tasks
                      </li>
                      <li>
                        <strong>Admin Access:</strong> Login credentials for your content management system
                      </li>
                      <li>
                        <strong>Training Session:</strong> A 1-hour video call to walk through the management interface
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Common Management Tasks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Updating Content</h4>
                        <p className="text-sm">
                          Log in to your CMS dashboard, navigate to the page you want to edit, make your changes, and click "Update" or "Publish."
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Adding Images</h4>
                        <p className="text-sm">
                          Use the media library to upload new images. For best performance, optimize images before uploading (recommended size: under 500KB).
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Creating New Pages</h4>
                        <p className="text-sm">
                          Click "Add New" in your pages section, add your content using the editor, set your SEO details, and publish when ready.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Managing Forms</h4>
                        <p className="text-sm">
                          Access form submissions through your dashboard. You can export entries or set up email notifications for new submissions.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#003366]/5 p-6 rounded-lg my-8">
                      <h4 className="text-lg font-semibold text-[#003366] mb-2">Important Note</h4>
                      <p>
                        Always make a backup before making significant changes to your website. If you're unsure about any changes, feel free to contact our support team for guidance.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* App Updates */}
              {activeTab === 'app-updates' && (
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <Code className="h-6 w-6 text-[#003366] mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      App Updates
                    </h2>
                  </div>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-6">
                      Apps are ready in 3-5 days for standard builds. Post-launch, contact us for updates via your usage dashboard.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Admin Dashboard</h3>
                    <p className="mb-4">
                      Every app we develop includes a comprehensive admin dashboard that provides:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li>Real-time user activity tracking</li>
                      <li>Usage statistics and analytics</li>
                      <li>User management tools</li>
                      <li>Content management capabilities</li>
                      <li>System health monitoring</li>
                    </ul>

                    <div className="my-8">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                        alt="App Dashboard Example" 
                        className="rounded-lg shadow-md w-full"
                      />
                      <p className="text-sm text-gray-500 text-center mt-2">Example of an app admin dashboard</p>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Requesting App Updates</h3>
                    <p className="mb-4">
                      We offer flexible options for updating and enhancing your app after launch:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Feature Updates</h4>
                        <p className="mb-4">
                          For adding new functionality or significant enhancements to your app.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                          <li>Quoted on a per-feature basis</li>
                          <li>Includes design, development, and testing</li>
                          <li>Typically takes 2-4 days depending on complexity</li>
                        </ul>
                        <Link 
                          to="/contact" 
                          className="inline-flex items-center text-[#003366] font-medium hover:text-[#002244]"
                        >
                          Request a feature quote
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Maintenance & Tweaks</h4>
                        <p className="mb-4">
                          For minor adjustments, bug fixes, and ongoing maintenance.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                          <li>Available on hourly basis ($150/hour)</li>
                          <li>Monthly maintenance packages available</li>
                          <li>Priority response for urgent issues</li>
                        </ul>
                        <Link 
                          to="/contact" 
                          className="inline-flex items-center text-[#003366] font-medium hover:text-[#002244]"
                        >
                          Set up maintenance plan
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">App Update Process</h3>
                    <ol className="list-decimal pl-6 space-y-4 mb-6">
                      <li>
                        <strong>Submit Update Request</strong>
                        <p className="mt-1">Contact us with details about the changes or features you'd like to implement.</p>
                      </li>
                      <li>
                        <strong>Receive Estimate</strong>
                        <p className="mt-1">We'll provide a timeline and cost estimate for your requested changes.</p>
                      </li>
                      <li>
                        <strong>Development</strong>
                        <p className="mt-1">Once approved, our team will develop the updates in a staging environment.</p>
                      </li>
                      <li>
                        <strong>Testing</strong>
                        <p className="mt-1">You'll have access to test the changes before they go live.</p>
                      </li>
                      <li>
                        <strong>Deployment</strong>
                        <p className="mt-1">After approval, we'll deploy the updates to your live app.</p>
                      </li>
                    </ol>

                    <div className="bg-[#003366]/5 p-6 rounded-lg my-8">
                      <h4 className="text-lg font-semibold text-[#003366] mb-2">App Update Best Practices</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Group multiple small changes into a single update to minimize disruption</li>
                        <li>Schedule updates during off-peak hours when possible</li>
                        <li>Always test thoroughly in staging before deploying to production</li>
                        <li>Consider implementing a beta testing program for major feature updates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* FAQ */}
              {activeTab === 'faq' && (
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <HelpCircle className="h-6 w-6 text-[#003366] mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <div className="prose max-w-none text-gray-700">
                    <div className="space-y-6">
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does the design process take?</h3>
                        <p>
                          With our AI-powered workflow, we're incredibly fast: basic landing pages take 1-2 days, standard websites and apps take 3-5 days, and complex custom solutions take 7-10 days, depending on project requirements.
                        </p>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I need changes after the design is complete?</h3>
                        <p>
                          All our projects include 2-3 rounds of revisions. If you need additional changes after the project is complete, we offer hourly rates for minor adjustments or can quote a new project phase for significant changes.
                        </p>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I own the design files after the project?</h3>
                        <p>
                          Yes, once the project is paid in full, you own all the design assets we create for you. We provide source files for all designs, including Figma files, so you can make future modifications if needed.
                        </p>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you handle website hosting?</h3>
                        <p>
                          We can set up hosting for you on premium platforms like Netlify, Vercel, or AWS, depending on your project needs. Hosting costs are separate from design fees and will be clearly outlined in your quote.
                        </p>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I update the website content myself?</h3>
                        <p>
                          Absolutely! We build all websites with user-friendly content management systems that allow you to update text, images, and other content without technical knowledge. We provide training and documentation to help you manage your site.
                        </p>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                        <p>
                          We accept credit cards, bank transfers, and PayPal. Our standard payment schedule is 50% upfront and 50% upon project completion, though we can arrange milestone payments for larger projects.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer ongoing support?</h3>
                        <p>
                          Yes, we offer various support and maintenance packages to keep your website or app running smoothly. Our standard maintenance plan is $199/month and includes regular updates, security patches, and content changes.
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Still have questions?</h3>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center px-6 py-3 bg-[#003366] text-white rounded-lg font-medium hover:bg-[#002244] transition-colors"
                      >
                        Contact Our Support Team
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-200 mb-6">
              Our team is ready to bring your vision to life with our expertise in design and development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-white text-[#003366] rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start a New Project
              </Link>
              <Link 
                to="/pricing" 
                className="inline-flex items-center px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocumentationPage;