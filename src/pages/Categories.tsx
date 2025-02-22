import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Package, Heart, Coffee, Gem, Camera, Book, Music, Watch } from 'lucide-react';

const categories = [
  { id: 'luxury', name: 'Luxury Gifts', icon: Gem, color: 'from-purple-500 to-pink-500' },
  { id: 'tech', name: 'Tech Gadgets', icon: Watch, color: 'from-blue-500 to-cyan-500' },
  { id: 'books', name: 'Books & Media', icon: Book, color: 'from-green-500 to-emerald-500' },
  { id: 'music', name: 'Musical Gifts', icon: Music, color: 'from-yellow-500 to-orange-500' },
  { id: 'photography', name: 'Photography', icon: Camera, color: 'from-red-500 to-rose-500' },
  { id: 'coffee', name: 'Coffee & Tea', icon: Coffee, color: 'from-amber-500 to-yellow-500' },
  { id: 'accessories', name: 'Accessories', icon: Package, color: 'from-violet-500 to-purple-500' },
  { id: 'special', name: 'Special Occasions', icon: Heart, color: 'from-pink-500 to-rose-500' },
  { id: 'custom', name: 'Custom Gifts', icon: Gift, color: 'from-indigo-500 to-blue-500' },
];

export const Categories: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4 texture-dots">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-white mb-12 animate-fade-in text-3d">
          Gift Categories
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className={`
                  card-3d
                  relative overflow-hidden rounded-xl
                  bg-gradient-to-br ${category.color}
                  p-8 shadow-xl
                  group cursor-pointer
                  animate-fade-in
                  glass-effect
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: `perspective(1000px) rotateX(0) rotateY(0)`,
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
                }}
              >
                <div className="absolute -right-8 -bottom-8 opacity-10 transition-all duration-300 group-hover:scale-150 group-hover:opacity-20 transform-gpu">
                  <Icon size={120} />
                </div>
                <div className="relative z-10 flex flex-col items-start space-y-4">
                  <Icon className="h-8 w-8 text-white animate-float" />
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <div className="flex items-center text-white/80 transition-transform duration-300 group-hover:translate-x-2">
                    <span>Explore</span>
                    <svg
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};