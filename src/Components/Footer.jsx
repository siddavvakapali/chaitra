import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Misho</h2>
          <p className="text-gray-400 text-sm">
            Elevating your shopping experience. High-quality products with a modern touch.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
    
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
          
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
         
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">All Products</a></li>
            <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
            <li><a href="#" className="hover:text-white transition">Discounts</a></li>
          </ul>
        </div>

        {/* Info Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-gray transition">About Us</a></li>
            <li><a href="#" className="hover:text-gray transition">Careers</a></li>
            <li><a href="#" className="hover:text-gray transition">Blog</a></li>
            <li><a href="#" className="hover:text-gray transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Email: support@misho.com</li>
            <li>Phone: +1 (800) 123-4567</li>
            <li>Address: 123 Misho Lane, NY, USA</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Misho. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
