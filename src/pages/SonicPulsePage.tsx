import React, { useState } from 'react';
import { Headphones, ShoppingCart, Star, ChevronDown, Check, Volume2 } from 'lucide-react';

const SonicPulsePage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('Midnight Black');
  const [selectedFit, setSelectedFit] = useState('Over-ear');
  const [colorDropdownOpen, setColorDropdownOpen] = useState(false);
  const [fitDropdownOpen, setFitDropdownOpen] = useState(false);

  const colors = [
    { id: 'black', name: 'Midnight Black', hex: '#000000' },
    { id: 'silver', name: 'Stellar Silver', hex: '#C0C0C0' },
    { id: 'blue', name: 'Ocean Blue', hex: '#0077be' },
    { id: 'red', name: 'Ruby Red', hex: '#E0115F' },
  ];

  const fits = [
    { id: 'over-ear', name: 'Over-ear' },
    { id: 'on-ear', name: 'On-ear' },
    { id: 'in-ear', name: 'In-ear' },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      comment: 'The sound quality is incredible. I can hear details in my music that I never noticed before. The noise cancellation is top-notch too!',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      rating: 4,
      comment: 'Very comfortable for long listening sessions. Battery life is impressive - I only need to charge once a week with daily use.',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      comment: "These headphones have transformed my gaming experience. The spatial audio makes you feel like you're actually in the game world.",
      date: '3 weeks ago'
    }
  ];

  const features = [
    { id: 1, name: 'Active Noise Cancellation', description: 'Block out the world and focus on your audio' },
    { id: 2, name: '40-hour Battery Life', description: 'Extended listening without frequent charging' },
    { id: 3, name: 'Premium Sound Quality', description: 'Engineered for audiophiles with precision tuning' },
    { id: 4, name: 'Bluetooth 5.2', description: 'Stable connection with minimal latency' },
  ];

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                SonicPulse: Premium Sound Awaits
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Customize your perfect headphones
              </p>
              <button className="px-8 py-4 bg-white text-[#003366] rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center mx-auto lg:mx-0">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Now
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="SonicPulse Headphones" 
                className="relative z-10 mx-auto max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Customization Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003366]">
              Design Your Perfect Sound
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customize every aspect of your headphones for the ultimate listening experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 3D Product Visualization */}
            <div className="bg-gray-50 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#003366] text-white px-4 py-2 rounded-bl-lg text-sm font-medium">
                360° View
              </div>
              <div className="h-[400px] flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                  alt={`SonicPulse Headphones - ${selectedColor} - ${selectedFit}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="mt-6 flex justify-center space-x-2">
                {[1, 2, 3, 4].map((dot) => (
                  <button 
                    key={dot} 
                    className={`w-3 h-3 rounded-full ${dot === 1 ? 'bg-[#003366]' : 'bg-gray-300'}`}
                    aria-label={`View angle ${dot}`}
                  />
                ))}
              </div>
            </div>

            {/* Customization Options */}
            <div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-[#003366] mb-6">SonicPulse Pro</h3>
                
                <div className="space-y-8">
                  {/* Color Selection */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Color</label>
                    <div className="relative">
                      <button 
                        className="w-full flex items-center justify-between bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-[#003366]"
                        onClick={() => setColorDropdownOpen(!colorDropdownOpen)}
                      >
                        <div className="flex items-center">
                          <span 
                            className="w-5 h-5 rounded-full mr-3" 
                            style={{ backgroundColor: colors.find(c => c.name === selectedColor)?.hex }}
                          ></span>
                          <span>{selectedColor}</span>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${colorDropdownOpen ? 'transform rotate-180' : ''}`} />
                      </button>
                      
                      {colorDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                          <ul className="py-1 max-h-60 overflow-auto">
                            {colors.map((color) => (
                              <li key={color.id}>
                                <button
                                  className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-50"
                                  onClick={() => {
                                    setSelectedColor(color.name);
                                    setColorDropdownOpen(false);
                                  }}
                                >
                                  <span 
                                    className="w-5 h-5 rounded-full mr-3" 
                                    style={{ backgroundColor: color.hex }}
                                  ></span>
                                  <span>{color.name}</span>
                                  {selectedColor === color.name && (
                                    <Check className="ml-auto h-5 w-5 text-[#003366]" />
                                  )}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Fit Selection */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Fit Style</label>
                    <div className="relative">
                      <button 
                        className="w-full flex items-center justify-between bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-[#003366]"
                        onClick={() => setFitDropdownOpen(!fitDropdownOpen)}
                      >
                        <span>{selectedFit}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${fitDropdownOpen ? 'transform rotate-180' : ''}`} />
                      </button>
                      
                      {fitDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                          <ul className="py-1">
                            {fits.map((fit) => (
                              <li key={fit.id}>
                                <button
                                  className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-50"
                                  onClick={() => {
                                    setSelectedFit(fit.name);
                                    setFitDropdownOpen(false);
                                  }}
                                >
                                  <span>{fit.name}</span>
                                  {selectedFit === fit.name && (
                                    <Check className="ml-auto h-5 w-5 text-[#003366]" />
                                  )}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-bold text-[#003366]">$299.99</span>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">(128 reviews)</span>
                      </div>
                    </div>
                    <button className="w-full py-4 bg-[#003366] text-white rounded-lg font-semibold text-lg hover:bg-[#00264d] transition-colors flex items-center justify-center">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003366]">
              Exceptional Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered for the ultimate audio experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#003366]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Volume2 className="h-6 w-6 text-[#003366]" />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003366]">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from SonicPulse users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Sound Like Never Before
            </h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers who have elevated their audio experience with SonicPulse
            </p>
            <button className="px-8 py-4 bg-white text-[#003366] rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
              <Headphones className="mr-2 h-5 w-5" />
              Shop the Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SonicPulsePage;