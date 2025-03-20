import React, { useEffect } from 'react';
import { Layout, Layers, Palette, FileText, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only on mount
  const services = [
    {
      id: 'landing-page',
      title: 'Landing Page Design',
      description: 'Conversion-driven pages for any industry that capture attention and drive action.',
      icon: <Layout className="h-10 w-10 text-primary-600" />,
      features: [
        'Conversion-optimized layouts',
        'Responsive design for all devices',
        'A/B testing recommendations',
        'SEO-friendly structure',
        'Fast loading performance',
        'Compelling call-to-actions'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80'
    },
    {
      id: 'app-design',
      title: 'App Design',
      description: 'Intuitive web and mobile applications that deliver exceptional user experiences.',
      icon: <Layers className="h-10 w-10 text-primary-600" />,
      features: [
        'User-centered interface design',
        'Interactive prototyping',
        'Cross-platform compatibility',
        'Accessibility compliance',
        'Performance optimization',
        'Ongoing support and updates'
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80'
    },
    {
      id: 'branding',
      title: 'Branding',
      description: 'Logos, identity systems, and comprehensive brand guidelines that communicate your unique value.',
      icon: <Palette className="h-10 w-10 text-primary-600" />,
      features: [
        'Logo design and variations',
        'Brand style guides',
        'Color palette development',
        'Typography selection',
        'Brand voice and messaging',
        'Visual identity systems'
      ],
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80'
    },
    {
      id: 'print-design',
      title: 'Print Design',
      description: 'Brochures, flyers, and other physical marketing materials that make a lasting impression.',
      icon: <FileText className="h-10 w-10 text-primary-600" />,
      features: [
        'Brochure and catalog design',
        'Business card and stationery',
        'Flyer and poster creation',
        'Packaging design',
        'Trade show materials',
        'Print-ready file preparation'
      ],
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80'
    },
    {
      id: 'custom-solutions',
      title: 'Custom Solutions',
      description: 'Tailored design services to meet your unique business challenges and objectives.',
      icon: <Settings className="h-10 w-10 text-primary-600" />,
      features: [
        'Consultation and strategy',
        'Custom project scoping',
        'Specialized design solutions',
        'Integration with existing systems',
        'Ongoing maintenance plans',
        'Dedicated project management'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Comprehensive design solutions tailored to elevate your brand and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              From digital experiences to brand identity, we provide end-to-end design services to help your business stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary-100 p-3 rounded-full w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <a href={`#${service.id}`} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {services.slice(3, 5).map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary-100 p-3 rounded-full w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <a href={`#${service.id}`} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          id={service.id} 
          key={service.id} 
          className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
        >
          <div className="container section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? "" : "order-2 lg:order-1"}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className={index % 2 === 0 ? "" : "order-1 lg:order-2"}>
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h2 className="heading-lg text-gray-900">{service.title}</h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="bg-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600">
              We follow a proven methodology to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">Discovery</h3>
              <p className="text-gray-600">
                We learn about your business, goals, and target audience to establish project requirements.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">Strategy</h3>
              <p className="text-gray-600">
                We develop a comprehensive plan that aligns with your business objectives and user needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">Design</h3>
              <p className="text-gray-600">
                Our creative team crafts visually stunning designs that align with your brand and objectives.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">Delivery</h3>
              <p className="text-gray-600">
                We implement, test, and refine the final product to ensure it meets all requirements.
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
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;