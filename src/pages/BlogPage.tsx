import React, { useState } from 'react';
import { ArrowRight, Search, Calendar, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Categories');

  const blogPosts = [
    {
      id: 1,
      title: '5 Tips for a High-Converting Landing Page',
      excerpt: 'Learn how to optimize your landing page design for better conversions',
      date: 'March 1, 2025',
      category: 'Landing Page Design',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      slug: 'tips-for-high-converting-landing-page'
    },
    {
      id: 2,
      title: 'The Future of App Design with AI',
      excerpt: 'Discover how AI tools like Bolt.new are revolutionizing app design',
      date: 'February 25, 2025',
      category: 'App Design',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      slug: 'future-of-app-design-with-ai'
    },
    {
      id: 3,
      title: 'Why Branding Matters for Startups',
      excerpt: 'Explore the impact of strong branding on your business\'s success',
      date: 'February 20, 2025',
      category: 'Branding',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      slug: 'why-branding-matters-for-startups'
    },
    {
      id: 4,
      title: 'Responsive Design Best Practices for 2025',
      excerpt: 'Stay ahead of the curve with these responsive design techniques',
      date: 'February 15, 2025',
      category: 'Web Design',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      slug: 'responsive-design-best-practices-2025'
    },
    {
      id: 5,
      title: 'Color Psychology in UI Design',
      excerpt: 'How to use color effectively to influence user behavior',
      date: 'February 10, 2025',
      category: 'UI Design',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      slug: 'color-psychology-in-ui-design'
    },
    {
      id: 6,
      title: 'Designing for Accessibility: A Complete Guide',
      excerpt: 'Make your digital products accessible to everyone with these essential tips',
      date: 'February 5, 2025',
      category: 'Accessibility',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      slug: 'designing-for-accessibility-guide'
    }
  ];

  const categories = [
    'All Categories',
    'Landing Page Design',
    'App Design',
    'Branding',
    'Web Design',
    'UI Design',
    'Accessibility'
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(0, 3);
  
  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All Categories' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              DesignPulse Studio Blog
            </h1>
            <p className="text-xl text-gray-200 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Insights, tips, and updates on landing page design, app design, and more
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-5 py-3 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Featured Article
            </h2>
            <div className="w-20 h-1 bg-[#003366] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#003366]/10 text-[#003366]">
                  <Tag className="h-4 w-4 mr-1" />
                  {featuredPost.category}
                </span>
                <span className="inline-flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {featuredPost.date}
                </span>
                <span className="inline-flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {featuredPost.readTime}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                {featuredPost.excerpt}
              </p>
              <Link 
                to={`/blog/${featuredPost.slug}`} 
                className="inline-flex items-center px-6 py-3 bg-[#003366] text-white rounded-lg font-medium hover:bg-[#002244] transition-colors"
              >
                Read Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Recent Articles
            </h2>
            <div className="w-20 h-1 bg-[#003366] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#003366]/10 text-[#003366]">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center font-medium text-[#003366] hover:text-[#002244] transition-transform hover:translate-x-1"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              All Articles
            </h2>
            <div className="w-20 h-1 bg-[#003366] mx-auto"></div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-[#003366] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#003366]/10 text-[#003366]">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="inline-flex items-center font-medium text-[#003366] hover:text-[#002244] transition-transform hover:translate-x-1"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="px-6 py-3 bg-white border border-[#003366] text-[#003366] rounded-lg font-medium hover:bg-[#003366] hover:text-white transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ backgroundColor: '#003366' }} className="text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-200 mb-8">
              Stay updated with our latest articles and design tips
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-5 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-[#003366] rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;