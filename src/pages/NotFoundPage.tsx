import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
    <p className="text-lg text-gray-600 mb-6">
      Oops! The page you’re looking for doesn’t exist.
    </p>
    <Link
      to="/"
      className="inline-flex items-center px-6 py-3 bg-gray-800 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors"
    >
      Back to Home
    </Link>
  </div>
);

export default NotFoundPage;