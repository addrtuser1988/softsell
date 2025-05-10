import React from 'react';

const Footer = () => (
  <footer className="bg-white text-gray-700 text-center py-4 shadow-inner">
    <div className="container mx-auto">
      &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
    </div>
  </footer>
);

export default Footer;