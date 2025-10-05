import React from 'react';
import earrings from "../assets/CategoryCards/earrings.png"
import rings from "../assets/CategoryCards/rings.png"
import Pendants from "../assets/CategoryCards/Pendants.png"
import Bracelets from "../assets/CategoryCards/Bracelets.png"
import Bangles from "../assets/CategoryCards/Bangles.png"
import Chains from "../assets/CategoryCards/chains.png"


// Category Grid Component
const CategoryGrid = () => {
  const categories = [
    { name: 'Earrings', image: earrings },
    { name: 'Finger Rings', image: rings },
    { name: 'Pendants', image: Pendants },
    { name: 'Bracelets', image: Bracelets },
    { name: 'Bangles', image: Bangles },
    { name: 'Chains', image: Chains },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-800">Find Your Perfect Match</h2>
          <p className="mt-2 text-lg text-gray-500 tracking-wider">Shop by Categories</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div key={category.name} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center mt-4 text-sm font-semibold text-gray-700 tracking-widest uppercase">{category.name}</p>
            </div>
          ))}
          {/* View All Card */}
          <div className="group cursor-pointer flex flex-col items-center justify-center bg-gray-50 rounded-lg p-4 aspect-square border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <p className="text-3xl font-bold text-red-800/70">10+</p>
              <p className="text-center mt-2 text-sm text-gray-600">Categories to chose from</p>
              <p className="text-center mt-8 text-sm font-semibold text-gray-700 tracking-widest uppercase">VIEW ALL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CategoryGrid