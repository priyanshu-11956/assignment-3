import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useFilter } from '../context/FilterContext';
import { ShoppingCart, Plus } from 'lucide-react';
import type { Product } from '../types';

export const Products: React.FC = () => {
  const { dispatch } = useCart();
  const { selectedCategory, priceRange } = useFilter();
  const [searchParams] = useSearchParams();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Price range filter
    filtered = filtered.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange]);

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      setAddedItems(prev => new Set(prev).add(productId));
      setTimeout(() => {
        setAddedItems(prev => {
          const next = new Set(prev);
          next.delete(productId);
          return next;
        });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4 texture-dots">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-white text-3d mb-12">Our Products</h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 card-3d glass-effect"
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <p className="text-gray-400">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-400">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all button-3d ${
                      addedItems.has(product.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    {addedItems.has(product.id) ? (
                      <ShoppingCart className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                    <span>
                      {addedItems.has(product.id) ? 'Added!' : 'Add to Cart'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-4">No products found</h2>
            <p className="text-gray-400">Try adjusting your filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};