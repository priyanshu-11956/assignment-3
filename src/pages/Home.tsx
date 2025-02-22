import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Package, Heart } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=2070"
            alt="Gift background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Find the Perfect Gift
              <span className="block text-purple-400">For Every Occasion</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Discover our curated collection of unique and thoughtful gifts that will make every moment special.
            </p>
            <Link
              to="/products"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transform transition-all hover:scale-105 hover:shadow-xl"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4 transform transition-all hover:scale-105">
              <Gift className="w-12 h-12 text-purple-400 mx-auto" />
              <h3 className="text-xl font-bold">Unique Selection</h3>
              <p className="text-gray-400">Carefully curated gifts for every taste and occasion</p>
            </div>
            <div className="text-center space-y-4 transform transition-all hover:scale-105">
              <Package className="w-12 h-12 text-purple-400 mx-auto" />
              <h3 className="text-xl font-bold">Premium Packaging</h3>
              <p className="text-gray-400">Beautiful gift wrapping included with every purchase</p>
            </div>
            <div className="text-center space-y-4 transform transition-all hover:scale-105">
              <Heart className="w-12 h-12 text-purple-400 mx-auto" />
              <h3 className="text-xl font-bold">Satisfaction Guaranteed</h3>
              <p className="text-gray-400">Love it or return it, no questions asked</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};