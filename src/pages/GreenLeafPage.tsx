import React, { useEffect } from 'react';
import { Leaf, Package, CreditCard, Instagram, Facebook, Twitter, ExternalLink, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const GreenLeafPage: React.FC = () => {
  // Animation on scroll for different sections
  const { ref: logoRef, inView: logoInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: packagingRef, inView: packagingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: digitalRef, inView: digitalInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                GreenLeaf: Sustainable Living
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Brand identity for eco-conscious consumers
              </p>
              <button className="px-8 py-4 bg-white text-[#003366] rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center mx-auto lg:mx-0">
                <span>View Brand Guidelines</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div 
              ref={logoRef}
              className={`flex justify-center items-center transition-all duration-1000 ${
                logoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-white p-16 rounded-full shadow-xl">
                <Leaf className="h-32 w-32 text-[#003366]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003366]">
              Our Brand Story
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              GreenLeaf was born from a simple idea: everyday products shouldn't harm our planet. 
              Our mission is to create sustainable alternatives that make eco-friendly living accessible to everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm w-64">
                <h3 className="text-xl font-bold text-[#003366] mb-3">Mission</h3>
                <p className="text-gray-600">To provide sustainable alternatives for everyday products</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm w-64">
                <h3 className="text-xl font-bold text-[#003366] mb-3">Vision</h3>
                <p className="text-gray-600">A world where sustainable living is the default, not the exception</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm w-64">
                <h3 className="text-xl font-bold text-[#003366] mb-3">Values</h3>
                <p className="text-gray-600">Sustainability, transparency, innovation, and community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo & Color Palette Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#003366] text-center">
            Brand Identity
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Logo</h3>
              <p className="text-gray-600 mb-6">
                Our logo represents growth, sustainability, and the natural world. 
                The leaf symbol embodies our commitment to eco-friendly practices, 
                while the clean typography reflects our modern approach to sustainable living.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-[#003366] mr-3"></div>
                  <span className="text-gray-700">Primary Blue: #003366</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-[#4CAF50] mr-3"></div>
                  <span className="text-gray-700">Leaf Green: #4CAF50</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-[#E0F2F1] mr-3"></div>
                  <span className="text-gray-700">Soft Mint: #E0F2F1</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-sm flex items-center justify-center">
                  <Leaf className="h-24 w-24 text-[#003366]" />
                </div>
                <div className="bg-[#003366] p-8 rounded-xl shadow-sm flex items-center justify-center">
                  <Leaf className="h-24 w-24 text-white" />
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm flex items-center justify-center">
                  <div className="flex items-center">
                    <Leaf className="h-12 w-12 text-[#4CAF50] mr-2" />
                    <span className="text-[#003366] font-bold text-xl">GreenLeaf</span>
                  </div>
                </div>
                <div className="bg-[#E0F2F1] p-8 rounded-xl shadow-sm flex items-center justify-center">
                  <div className="flex items-center">
                    <Leaf className="h-12 w-12 text-[#4CAF50] mr-2" />
                    <span className="text-[#003366] font-bold text-xl">GreenLeaf</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#003366] mb-4">Typography</h3>
            <p className="text-gray-600 mb-8">
              We use Poppins for its clean, modern aesthetic that balances professionalism with approachability.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-4xl text-[#003366]">Heading 1</h4>
                <p className="text-gray-500 mt-2">Poppins Bold - 36px</p>
              </div>
              <div>
                <h4 className="font-semibold text-2xl text-[#003366]">Heading 2</h4>
                <p className="text-gray-500 mt-2">Poppins SemiBold - 24px</p>
              </div>
              <div>
                <h4 className="font-medium text-xl text-[#003366]">Heading 3</h4>
                <p className="text-gray-500 mt-2">Poppins Medium - 20px</p>
              </div>
              <div>
                <p className="text-base text-gray-700">Body Text</p>
                <p className="text-gray-500 mt-2">Poppins Regular - 16px</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#003366] text-center">
            Packaging Design
          </h2>
          
          <div 
            ref={packagingRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              packagingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Sustainable Materials</h3>
              <p className="text-gray-600 mb-6">
                All GreenLeaf packaging is made from recycled or biodegradable materials. 
                Our designs emphasize minimalism and functionality while showcasing our commitment to the environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-[#E0F2F1] p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">100% recycled cardboard boxes</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#E0F2F1] p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Compostable bags made from plant starch</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#E0F2F1] p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Soy-based inks for all printing</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#E0F2F1] p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Minimal packaging approach</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                <div className="bg-white rounded-lg shadow-md aspect-square flex items-center justify-center p-4">
                  <Package className="h-24 w-24 text-[#003366]" />
                </div>
                <p className="text-center mt-4 text-gray-700 font-medium">Product Box</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                <div className="bg-[#E0F2F1] rounded-lg shadow-md aspect-square flex items-center justify-center p-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Leaf className="h-16 w-16 text-[#4CAF50]" />
                    </div>
                    <svg viewBox="0 0 200 200" className="h-40 w-40">
                      <path 
                        d="M 0,100 C 0,30 30,0 100,0 S 200,30 200,100 170,200 100,200 0,170 0,100" 
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-center mt-4 text-gray-700 font-medium">Shopping Bag</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl shadow-sm col-span-2">
                <div className="bg-gradient-to-r from-[#003366] to-[#004080] rounded-lg shadow-md aspect-video flex items-center justify-center p-4">
                  <div className="text-white text-center">
                    <Leaf className="h-12 w-12 mx-auto mb-2 text-[#4CAF50]" />
                    <p className="font-bold text-xl">GreenLeaf</p>
                    <p className="text-sm mt-1">Sustainable Living</p>
                  </div>
                </div>
                <p className="text-center mt-4 text-gray-700 font-medium">Product Label</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Assets Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#003366] text-center">
            Digital Assets
          </h2>
          
          <div 
            ref={digitalRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              digitalInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="bg-[#003366] rounded-lg shadow-md aspect-[85/55] flex items-center justify-center p-4">
                    <div className="text-white text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Leaf className="h-6 w-6 text-[#4CAF50] mr-2" />
                        <span className="font-bold">GreenLeaf</span>
                      </div>
                      <div className="text-xs space-y-1">
                        <p>Jane Smith</p>
                        <p>Sustainability Director</p>
                        <p>jane@greenleaf.com</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-4 text-gray-700 font-medium">Business Card</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="bg-[#E0F2F1] rounded-lg shadow-md aspect-square flex items-center justify-center p-4">
                    <div className="text-center">
                      <Leaf className="h-12 w-12 mx-auto mb-2 text-[#4CAF50]" />
                      <p className="font-bold text-[#003366]">GreenLeaf</p>
                      <div className="flex justify-center mt-2 space-x-2">
                        <Instagram className="h-4 w-4 text-[#003366]" />
                        <Facebook className="h-4 w-4 text-[#003366]" />
                        <Twitter className="h-4 w-4 text-[#003366]" />
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-4 text-gray-700 font-medium">Social Media Profile</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm col-span-2">
                  <div className="bg-gradient-to-r from-[#E0F2F1] to-white rounded-lg shadow-md aspect-[2/1] flex items-center justify-center p-4">
                    <div className="flex items-center">
                      <Leaf className="h-16 w-16 text-[#4CAF50] mr-4" />
                      <div>
                        <h3 className="font-bold text-xl text-[#003366]">Introducing Our New Eco-Friendly Line</h3>
                        <p className="text-gray-700 mt-1">Sustainable products for a better tomorrow</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-4 text-gray-700 font-medium">Social Media Banner</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Digital Presence</h3>
              <p className="text-gray-600 mb-6">
                Our digital assets maintain consistent branding across all platforms. 
                The clean, minimal aesthetic reflects our commitment to reducing waste 
                while creating a recognizable brand identity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-[#E0F2F1] p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Consistent logo placement and sizing</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#E0F2F1] p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Brand color palette across all platforms</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#E0F2F1] p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Nature-inspired imagery and graphics</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#E0F2F1] p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Clean, minimalist design approach</span>
                </li>
              </ul>
              <button className="mt-8 px-6 py-3 bg-[#003366] text-white rounded-lg font-medium text-sm hover:bg-[#00264d] transition-colors flex items-center">
                <CreditCard className="mr-2 h-4 w-4" />
                Download Brand Assets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Sustainable Movement
            </h2>
            <p className="text-xl mb-8">
              Partner with GreenLeaf and be part of the solution for a greener future
            </p>
            <button className="px-8 py-4 bg-white text-[#003366] rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
              <span>Contact Us</span>
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreenLeafPage;