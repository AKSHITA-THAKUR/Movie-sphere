
import React from 'react';

const NotFound:React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Oops! Page Not Found</p>
        <a href="/" className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300">Go Home</a>
      </div>
    </div>
  );
};

export default NotFound;
