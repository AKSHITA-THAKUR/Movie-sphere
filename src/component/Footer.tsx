
import React from 'react';
import "./hover.css"
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center h-[180px]">
        <h5 className=" font-semibold mb-2 mt-5 text-xl">Moviesphere</h5>
        <p className="text-md mb-4 mt-5">
          Moviesphere gives the details of all movies, TV shows, and much more.
        </p>
        <p className="text-md mt-5">
          &copy; {new Date().getFullYear()} Moviesphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
