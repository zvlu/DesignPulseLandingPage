import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

useEffect(() => {
  window.scrollTo(0, 0);
}, []); // Empty dependency array ensures it runs only on mount

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'TaskFlow Management App',
      description: 'A sleek task management application with drag-and-drop functionality, team collaboration features, and real-time chat.',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      link: '/taskflow'
    },
    {
      id: 2,
      title: 'CloudPeak SaaS Platform',
      description: 'A modern cloud-based SaaS platform with a sleek interface, featuring interactive elements and a testimonial carousel.',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      link: '/cloudpeak'
    },
    {
      id: 3,
      title: 'SonicPulse Headphones',
      description: 'A premium headphone brand landing page with product customization options and customer reviews.',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      link: '/sonicpulse'
    },
    {
      id: 4,
      title: 'FitCore Health Tracker',
      description: 'A comprehensive health and fitness tracking application with workout plans, nutrition logging, and progress visualization.',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      link: '/fitcore'
    },
    {
      id: 5,
      title: 'GreenLeaf Branding',
      description: 'Complete brand identity for an eco-friendly company, including logo, packaging design, and digital assets.',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      link: '/greenleaf'
    },
    {
      id: 6,
      title: 'Modern SaaS Landing Page',
      description: 'A sleek, conversion-focused landing page for a cloud-based SaaS platform with animated features section and testimonial carousel.',
      category: 'Landing Page',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    },
    {
      id: 7,
      title: 'Health & Fitness Tracker',
      description: 'A comprehensive health tracking application with workout plans, nutrition tracking, and progress visualization.',
      category: 'Application',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    },
    {
      id: 8,
      title: 'Eco-Friendly Brand Identity',
      description: 'Complete brand identity design for a sustainable product line including logo, packaging, and digital assets.',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Explore our latest projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-white">
        <div className="container section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.link ? (
                    <Link to={project.link} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                      View Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  ) : (
                    <Link to={`/portfolio/${project.id}`} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600">
              We specialize in creating exceptional digital experiences across various platforms and mediums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Landing Pages */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Landing Pages</h3>
              <p className="text-gray-600">
                High-converting, visually stunning landing pages designed to showcase your products and services.
              </p>
            </div>

            {/* Applications */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Applications</h3>
              <p className="text-gray-600">
                Intuitive, feature-rich applications that solve real problems and enhance user productivity.
              </p>
            </div>

            {/* Branding */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Branding</h3>
              <p className="text-gray-600">
                Comprehensive brand identity design that communicates your values and resonates with your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Get your design in as little as 1-2 days
            </p>
            <Link 
              to="/contact" 
              className="btn bg-white text-[#003366] hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;