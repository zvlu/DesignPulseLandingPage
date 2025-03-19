import React from 'react';
import { Building, Users, ShoppingBag, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UseCasesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">
              Real-World Applications
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Discover how businesses across various industries are leveraging our platform to drive growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="bg-white">
        <div className="container section">
          {/* Enterprise */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Building className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="heading-lg text-gray-900">Enterprise Solutions</h2>
              </div>
              <p className="text-xl text-gray-600 mb-6">
                Large organizations trust our platform to streamline operations, enhance collaboration, and drive digital transformation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Centralized data management across departments</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Advanced security and compliance features</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounde d-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Customizable workflows for complex business processes</span>
                </li>
              </ul>
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" 
                  alt="Global Corp logo" 
                  className="h-10"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" 
                  alt="Tech Innovations logo" 
                  className="h-10"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" 
                  alt="Future Systems logo" 
                  className="h-10"
                />
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Enterprise dashboard" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Small Business */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Small business owner using platform" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <ShoppingBag className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="heading-lg text-gray-900">Small Business Growth</h2>
              </div>
              <p className="text-xl text-gray-600 mb-6">
                Small businesses leverage our platform to compete with larger companies, streamline operations, and focus on growth.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Affordable pricing with scalable options</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Easy-to-use interface with minimal training required</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Integrated tools that replace multiple software subscriptions</span>
                </li>
              </ul>
              <Link to="/pricing" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                View small business pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Teams */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="heading-lg text-gray-900">Team Collaboration</h2>
              </div>
              <p className="text-xl text-gray-600 mb-6">
                Teams of all sizes use our platform to enhance collaboration, streamline communication, and boost productivity.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Real-time collaboration on projects and documents</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Task management and progress tracking</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Integrated communication tools for seamless teamwork</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Try Team Features
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our clients have transformed their businesses with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="TechCorp headquarters" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Building className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium text-gray-500">Enterprise</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">TechCorp Global</h3>
                <p className="text-gray-600 mb-4">
                  Increased operational efficiency by 35% and reduced costs by 20% within the first year of implementation.
                </p>
                <Link to="/contact" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Read case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Craft Creations store" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <ShoppingBag className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium text-gray-500">Small Business</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Craft Creations</h3>
                <p className="text-gray-600 mb-4">
                  Grew revenue by 45% and expanded to three new locations with the help of our platform's scalable solutions.
                </p>
                <Link to="/contact" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Read case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Design team meeting" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium text-gray-500">Agency</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Creative Solutions Agency</h3>
                <p className="text-gray-600 mb-4">
                  Improved client satisfaction by 40% and reduced project delivery time by 25% through streamlined collaboration.
                </p>
                <Link to="/contact" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Read case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join the thousands of businesses that have transformed their operations with our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Get Started
              </Link>
              <Link to="/contact" className="btn border border-primary-300 text-white hover:bg-primary-700">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseCasesPage;