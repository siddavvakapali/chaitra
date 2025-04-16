import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
      {/* Product Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Product Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-1 hover:text-orange-500 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button className="px-5 py-2 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600 transition duration-300">
            Add to Cart
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button className="w-1/2 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-md hover:bg-pink-200 transition">
            Quick View
          </button>
          <button className="w-1/2 py-2 text-sm font-medium bg-blue-500 text-black rounded-md hover:bg-pink-600 transition">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
