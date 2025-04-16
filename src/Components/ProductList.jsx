import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Headphone',
    description: 'Latest model with A15 Bionic chip, 5G capability, and great camera performance.',
    price: '799.99',
    image: '/h1.webp',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    description: 'Powerful Samsung phone with top-tier performance and camera quality.',
    price: '749.99',
    image: '/d2.webp',
  },
  {
    id: 3,
    name: 'MacBook Pro 16"',
    description: 'Powerful laptop with M1 Pro chip and stunning Retina display.',
    price: '2399.99',
    image: '/d1.jpg',
  },
  {
    id: 4,
    name: 'Dell"',
    description: 'Powerful laptop with M1 Pro chip and stunning Retina display.',
    price: '2399.99',
    image: '/d3.jpg',
  },
  {
    id: 1,
    name: 'Headphone',
    description: 'Latest model with A15 Bionic chip, 5G capability, and great camera performance.',
    price: '799.99',
    image: '/h1.webp',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    description: 'Powerful Samsung phone with top-tier performance and camera quality.',
    price: '749.99',
    image: '/d2.webp',
  },
  {
    id: 3,
    name: 'MacBook Pro 16"',
    description: 'Powerful laptop with M1 Pro chip and stunning Retina display.',
    price: '2399.99',
    image: '/d1.jpg',
  },
  {
    id: 4,
    name: 'Dell"',
    description: 'Powerful laptop with M1 Pro chip and stunning Retina display.',
    price: '2399.99',
    image: '/d3.jpg',
  },
  // Add more products here
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
