import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle, BarChart2, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

useEffect(() => {
  window.scrollTo(0, 0);
}, []); // Empty dependency array ensures it runs only on mount

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-primary-50">
        <div className="container section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl text-gray-900 mb-6">
                Your Full-Service <span className="text-primary-600">Design Partner</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Specializing in Landing Pages, Apps, and More
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio" className="btn btn-primary">
                  Explore Our Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get in Touch
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-primary-600" />
                <span>We are a design agency offering comprehensive solutions, with expertise in landing page design, app design, and branding.</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Design team working together" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center space-x-3">
                  <BarChart2 className="h-8 w-8 text-primary-600" />
                  <div>
                    <p className="font-bold text-gray-900">98% Growth</p>
                    <p className="text-sm text-gray-600">For our clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="bg-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Powerful Design Solutions for Your Business
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive suite of design services helps you create memorable experiences that convert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-3 rounded-full w-fit mb-6">
                <Zap className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Landing Page Design</h3>
              <p className="text-gray-600 mb-4">
                Conversion-focused landing pages that capture attention and drive action for your products and services.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-3 rounded-full w-fit mb-6">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">App Design</h3>
              <p className="text-gray-600 mb-4">
                Intuitive and engaging web and mobile applications that deliver exceptional user experiences.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-3 rounded-full w-fit mb-6">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Branding & Identity</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive brand identity systems that communicate your unique value proposition.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-gray-50">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Our Recent Work
            </h2>
            <p className="text-xl text-gray-600">
              Explore some of our latest projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                  alt="SaaS Landing Page" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full mb-2">
                      Landing Page
                    </span>
                    <h3 className="text-xl font-bold text-white">Modern SaaS Platform</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modern SaaS Landing Page</h3>
                <p className="text-gray-600 mb-4">A sleek, conversion-focused landing page for a cloud-based SaaS platform.</p>
                <Link to="/portfolio" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                  alt="Task Management App" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full mb-2">
                      Application
                    </span>
                    <h3 className="text-xl font-bold text-white">Task Management App</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Task Management App</h3>
                <p className="text-gray-600 mb-4">A productivity application with drag-and-drop task management and team collaboration features.</p>
                <Link to="/portfolio" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                  alt="Eco-Friendly Brand Identity" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full mb-2">
                      Branding
                    </span>
                    <h3 className="text-xl font-bold text-white">Eco-Friendly Brand</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Brand Identity</h3>
                <p className="text-gray-600 mb-4">Complete brand identity design for a sustainable product line including logo and packaging.</p>
                <Link to="/portfolio" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our clients have to say about their experience with our design services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The landing page design exceeded our expectations. We saw a 40% increase in conversions within the first month of launch."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                  alt="Sarah Johnson" 
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Marketing Director, TechStart Inc.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The app design process was collaborative and efficient. The final product is intuitive, beautiful, and our users love it."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                  alt="Michael Chen" 
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-600">CTO, Global Solutions</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The branding package transformed our business. Our new identity perfectly captures our values and has helped us attract our ideal customers."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                  alt="Emily Rodriguez" 
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">Emily Rodriguez</p>
                  <p className="text-sm text-gray-600">Founder, Craft Creations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-gray-50">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Resources & Support
            </h2>
            <p className="text-xl text-gray-600">
              Access helpful guides, documentation, and support to get the most out of our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Blog</h3>
              <p className="text-gray-600 mb-6">
                Explore our latest articles, tips, and insights on design, development, and digital marketing.
              </p>
              <Link to="/blog" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                Read our blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Documentation</h3>
              <p className="text-gray-600 mb-6">
                Detailed guides and documentation to help you manage your website or application.
              </p>
              <Link to="/documentation" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                View documentation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <p className="text-gray-600 mb-6">
                Find answers to common questions about our services, process, and support.
              </p>
              <Link to="/faq" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                View FAQ <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Get in Touch
              </Link>
              <Link to="/portfolio" className="btn border border-primary-300 text-white hover:bg-primary-700">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;