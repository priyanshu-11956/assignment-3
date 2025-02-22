import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Gift, Menu, SlidersHorizontal } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFilter } from '../context/FilterContext';
import { FilterPanel } from './FilterPanel';

export const Navbar: React.FC = () => {
  const { state } = useCart();
  const { isFilterOpen, setIsFilterOpen } = useFilter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-xl font-bold hover:text-purple-400 transition-all duration-300 animate-float text-3d"
            >
              <Gift className="h-6 w-6" />
              <span>GiftHub</span>
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link 
                to="/products" 
                className="hover:text-purple-400 transition-all duration-300 hover-3d"
              >
                Products
              </Link>
              <Link 
                to="/categories" 
                className="hover:text-purple-400 transition-all duration-300 hover-3d"
              >
                Categories
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="relative button-3d p-2 rounded-full hover:text-purple-400 transition-colors"
              >
                <SlidersHorizontal className="h-6 w-6" />
                {isFilterOpen && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"></span>
                )}
              </button>
              <Link 
                to="/cart" 
                className="relative button-3d p-2 rounded-full"
              >
                <ShoppingCart className="h-6 w-6" />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse-soft">
                    {state.items.length}
                  </span>
                )}
              </Link>
              <Link 
                to="/login" 
                className="button-3d p-2 rounded-full"
              >
                <User className="h-6 w-6" />
              </Link>
              <button
                className="md:hidden button-3d p-2 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className={`
            md:hidden 
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
            overflow-hidden glass-effect mt-2 rounded-lg
          `}>
            <div className="py-4 space-y-4 px-4">
              <Link 
                to="/products" 
                className="block hover:text-purple-400 transition-colors hover-3d"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/categories" 
                className="block hover:text-purple-400 transition-colors hover-3d"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <FilterPanel />
    </>
  );
};