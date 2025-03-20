import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'; // Add Google Maps imports

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  // Center on West Hartford, CT (adjust as needed)
  const center = {
    lat: 41.766,
    lng: -72.699,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;
    console.log('Service ID:', serviceID);
    console.log('Template ID:', templateID);
    console.log('User ID:', userID);
    
    emailjs.send(serviceID, templateID, {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
    }, userID)
      .then(() => {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">Get in Touch</h1>
            <p className="text-xl text-primary-100 mb-8">
              Have questions or ready to get started? Our team is here to help you find the perfect solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white">
        <div className="container section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Our friendly team is here to help.</p>
              <a href="mailto:info@designpulse.com" className="text-primary-600 font-medium hover:text-primary-700">
                zvluwork@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+18603710882" className="text-primary-600 font-medium hover:text-primary-700">
                +1 (860) 371-0882
              </a>
            </div>

            {/* Office */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4"></p>
              <p className="text-primary-600 font-medium">Connecticut</p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Send Us a Message</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full flex items-center justify-center"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Interactive Map */}
            <div>
              <div className="bg-gray-200 rounded-xl overflow-hidden h-full min-h-[400px] relative">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={12} // Adjust zoom level as needed
                    options={{
                      gestureHandling: 'greedy', // Allows one-finger drag on mobile
                      zoomControl: true, // Enables zoom buttons
                      mapTypeControl: false, // Hides map/satellite toggle
                      streetViewControl: false, // Disables street view
                    }}
                  >
                    <Marker
                      position={center}
                      onClick={() => alert('Design Pulse Studio - West Hartford, CT')}
                    />
                  </GoogleMap>
                ) : (
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <p className="text-gray-600">Loading map...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find quick answers to common questions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How quickly will you respond to my inquiry?</h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer product demonstrations?</h3>
              <p className="text-gray-600">
                Yes, we offer personalized product demonstrations. You can schedule a demo through our contact form or by calling us directly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I request custom features for my business?</h3>
              <p className="text-gray-600">
                Absolutely! We offer custom solutions tailored to your specific business needs. Contact us to discuss your requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What kind of support do you offer?</h3>
              <p className="text-gray-600">
                We offer email, phone, and chat support. Our support hours are Monday through Friday, 8am to 5pm EST. Enterprise clients receive 24/7 dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of businesses that have already experienced the power of our platform.
            </p>
            <Link to="/pricing" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;