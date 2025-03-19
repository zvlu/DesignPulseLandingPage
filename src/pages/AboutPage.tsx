import React from 'react';
import { Users, Award, Zap, Lightbulb, Clock, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const coreStrengths = [
    {
      title: 'Creative Excellence',
      description: 'Our designs blend aesthetics with functionality to create memorable digital experiences.',
      icon: <Palette className="h-8 w-8 text-primary-600" />
    },
    {
      title: 'Technical Expertise',
      description: 'We leverage cutting-edge technologies to build robust, scalable solutions.',
      icon: <Zap className="h-8 w-8 text-primary-600" />
    },
    {
      title: 'Strategic Thinking',
      description: 'Every project begins with understanding your business goals and target audience.',
      icon: <Lightbulb className="h-8 w-8 text-primary-600" />
    },
    {
      title: 'Timely Delivery',
      description: 'We pride ourselves on meeting deadlines without compromising on quality.',
      icon: <Clock className="h-8 w-8 text-primary-600" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">
              About Us
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Get to know the team behind DesignPulse Studio and our mission to deliver exceptional design solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white">
        <div className="container section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We're a full-service design agency delivering creative solutions, with expertise in landing pages and apps.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2018, DesignPulse Studio has grown from a small team of passionate designers to a comprehensive agency serving clients worldwide. We combine creativity with technical expertise to deliver solutions that not only look beautiful but also drive real business results.
              </p>
              <p className="text-gray-600 mb-6">
                Our collaborative approach ensures that every project we undertake is aligned with our clients' business objectives and exceeds their expectations in terms of design quality and performance.
              </p>
              <div className="flex space-x-4">
                <Link to="/services" className="btn btn-primary">
                  Our Services
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="DesignPulse Studio Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="bg-gray-50">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Our Core Strengths
            </h2>
            <p className="text-xl text-gray-600">
              What sets us apart and enables us to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreStrengths.map((strength, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm flex">
                <div className="bg-primary-100 p-4 rounded-full h-16 w-16 flex items-center justify-center mr-6 flex-shrink-0">
                  {strength.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{strength.title}</h3>
                  <p className="text-gray-600">{strength.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white">
        <div className="container section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative design solutions that enhance their digital presence, improve user engagement, and drive sustainable growth. We strive to create meaningful connections between our clients and their audiences through thoughtful, purpose-driven design.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as a leading design agency that consistently pushes the boundaries of creativity and innovation. We aim to set new standards in the industry by delivering exceptional digital experiences that inspire, engage, and transform how businesses connect with their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The talented individuals behind our creative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center">
              <img 
                src="/TEAMCEOLOGO.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Eric King</h3>
                <p className="text-primary-600 mb-4">Founder & Creative Director</p>
                <p className="text-gray-600">
                  With over 15 years of experience in design and branding.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Chen</h3>
                <p className="text-primary-600 mb-4">Lead UX Designer</p>
                <p className="text-gray-600">
                  Specializes in creating intuitive user experiences.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Rodriguez</h3>
                <p className="text-primary-600 mb-4">Technical Director</p>
                <p className="text-gray-600">
                  Expert in front-end development and performance optimization.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Emily Taylor</h3>
                <p className="text-primary-600 mb-4">Project Manager</p>
                <p className="text-gray-600">
                  Ensures projects are delivered on time and within scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our work and relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our work, from design to client communication.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and collaborative problem-solving.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new ideas and technologies to stay ahead of industry trends.
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;