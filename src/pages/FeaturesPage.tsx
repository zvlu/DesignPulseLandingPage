import React, { useEffect } from 'react';
import { Zap, Shield, Users, BarChart2, Clock, Globe, Database, Layers, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only on mount
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">
              Powerful Features for Modern Businesses
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Discover the comprehensive suite of tools designed to streamline your operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="bg-white">
        <div className="container section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast Performance</h3>
              <p className="text-gray-600">
                Our platform is optimized for speed, ensuring that your team can work efficiently without delays or downtime.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise-Grade Security</h3>
              <p className="text-gray-600">
                Protect your sensitive data with our advanced security measures, including encryption, access controls, and compliance with industry standards.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Collaboration</h3>
              <p className="text-gray-600">
                Enable your team to work together effortlessly with real-time collaboration tools, shared workspaces, and intuitive communication features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="bg-gray-50">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Comprehensive Feature Set
            </h2>
            <p className="text-xl text-gray-600">
              Explore the full range of capabilities that make our platform the preferred choice for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Feature Group 1 */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Analytics Dashboard" 
                className="rounded-lg shadow-lg mb-8"
              />
              <h3 className="heading-md text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 mb-6">
                Gain valuable insights into your business performance with our comprehensive analytics tools. Track key metrics, identify trends, and make data-driven decisions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <BarChart2 className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Real-time performance dashboards</span>
                </li>
                <li className="flex items-start">
                  <BarChart2 className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Custom report generation</span>
                </li>
                <li className="flex items-start">
                  <BarChart2 className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Predictive analytics and forecasting</span>
                </li>
              </ul>
            </div>

            {/* Feature Group 2 */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-lg mb-8"
              />
              <h3 className="heading-md text-gray-900 mb-4">Team Management</h3>
              <p className="text-gray-600 mb-6">
                Streamline your team's workflow with our comprehensive management tools. Assign tasks, track progress, and ensure everyone is aligned with your business goals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Role-based access controls</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Task assignment and tracking</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Performance monitoring and feedback</span>
                </li>
              </ul>
            </div>

            {/* Feature Group 3 */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Automation Tools" 
                className="rounded-lg shadow-lg mb-8"
              />
              <h3 className="heading-md text-gray-900 mb-4">Workflow Automation</h3>
              <p className="text-gray-600 mb-6">
                Eliminate repetitive tasks and increase efficiency with our powerful automation tools. Create custom workflows, set triggers, and let the system handle the rest.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Customizable workflow templates</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Trigger-based automation</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Scheduled tasks and reminders</span>
                </li>
              </ul>
            </div>

            {/* Feature Group 4 */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Global Connectivity" 
                className="rounded-lg shadow-lg mb-8"
              />
              <h3 className="heading-md text-gray-900 mb-4">Global Connectivity</h3>
              <p className="text-gray-600 mb-6">
                Connect with clients and team members around the world with our robust communication tools. Break down geographical barriers and expand your business globally.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Multi-language support</span>
                </li>
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">24/7 cloud accessibility</span>
                </li>
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Regional data compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="bg-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              More Powerful Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Discover additional features that set our platform apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Additional Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <Database className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Management</h3>
              <p className="text-gray-600">
                Organize, store, and retrieve your data efficiently with our advanced data management system.
              </p>
            </div>

            {/* Additional Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <Layers className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Architecture</h3>
              <p className="text-gray-600">
                Our platform grows with your business, ensuring seamless performance as your needs evolve.
              </p>
            </div>

            {/* Additional Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <Smartphone className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Accessibility</h3>
              <p className="text-gray-600">
                Access your data and manage your business from anywhere with our mobile-optimized platform.
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
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Start your journey with FlexiTech today and transform the way you do business.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;