import React from 'react';
import { useFilter } from '../context/FilterContext';
import { products } from '../data/products';

export const FilterPanel: React.FC = () => {
  const {
    isFilterOpen,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange
  } = useFilter();

  const categories = ['all', ...new Set(products.map(p => p.category))];

  return (
    <div className={`
      fixed top-16 right-0 w-full md:w-96 h-auto z-40
      transform transition-all duration-300 ease-in-out
      ${isFilterOpen 
        ? 'translate-y-0 opacity-100' 
        : '-translate-y-2 opacity-0 pointer-events-none'
      }
    `}>
      <div className="m-4">
        <div className="bg-gray-800 rounded-xl p-6 shadow-2xl glass-effect">
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      px-4 py-2 rounded-lg button-3d transition-all duration-300
                      ${selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }
                    `}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Price Range</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max={Math.max(...products.map(p => p.price))}
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-white font-mono">
                    ${priceRange.max.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};