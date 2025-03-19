import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Cloud, Shield, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const CloudPeakPage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "CloudPeak transformed our business operations. The platform's scalability allowed us to grow without worrying about infrastructure limitations.",
      author: "Sarah Johnson",
      position: "CTO, TechVision Inc."
    },
    {
      quote: "The security features of CloudPeak gave us peace of mind. Our data has never been safer, and the customer support is exceptional.",
      author: "Michael Chen",
      position: "IT Director, Global Solutions"
    },
    {
      quote: "We reduced our deployment time by 75% after switching to CloudPeak. The intuitive interface makes it easy for our entire team to use.",
      author: "Emily Rodriguez",
      position: "DevOps Lead, Innovate Labs"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Feature section with animation on scroll
  const { ref: featureRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Boost Your Business with CloudPeak
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Scalable cloud solutions for all
            </p>
            <button 
              className="px-8 py-4 bg-white text-[#003366] rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Get Started
            </button>
            
            <div className="mt-16">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Cloud computing visualization" 
                className="rounded-lg shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#003366]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Everything you need to scale your business in the cloud
            </p>
          </div>

          <div 
            ref={featureRef} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <div 
              className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-700 ${
                featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="bg-[#003366]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Cloud className="h-8 w-8 text-[#003366]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#003366]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Fast Deployment
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Deploy your applications in minutes, not hours. Our streamlined process ensures you can go from development to production with minimal friction.
              </p>
            </div>

            {/* Feature 2 */}
            <div 
              className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-700 ${
                featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="bg-[#003366]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-[#003366]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#003366]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Secure Storage
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Enterprise-grade security for all your data. With end-to-end encryption and compliance with industry standards, your information is always protected.
              </p>
            </div>

            {/* Feature 3 */}
            <div 
              className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-700 ${
                featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="bg-[#003366]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-[#003366]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#003366]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                24/7 Support
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our dedicated team is available around the clock to help you with any issues. Get expert assistance whenever you need it, no matter the time zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ backgroundColor: '#f5f8ff' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#003366]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Trusted by businesses worldwide
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <div className="text-5xl text-[#003366] font-serif mb-6">"</div>
              <p className="text-xl text-gray-700 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="flex items-center">
                <div className="bg-[#003366] h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentTestimonial].author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-[#003366]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white p-3 rounded-full shadow-lg text-[#003366] hover:bg-[#003366] hover:text-white transition-colors duration-300 hidden md:block"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white p-3 rounded-full shadow-lg text-[#003366] hover:bg-[#003366] hover:text-white transition-colors duration-300 hidden md:block"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots for mobile */}
            <div className="flex justify-center space-x-2 mt-8 md:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 w-3 rounded-full ${
                    currentTestimonial === index ? 'bg-[#003366]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Join thousands of businesses that trust CloudPeak for their cloud infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                className="px-8 py-4 bg-white text-[#003366] rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Get Started
              </button>
              <button 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudPeakPage;