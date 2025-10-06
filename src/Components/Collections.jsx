import React from 'react';
import image1 from "../assets/Collections/1.png"
import image2 from "../assets/Collections/2.png"
import image3 from "../assets/Collections/3.png"
// You might want to add this to your main CSS or index.html for a similar font style:
// @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Dancing+Script:wght@400..700&display=swap');
// font-family: 'Playfair Display', serif;
// font-family: 'Dancing Script', cursive;

const CollectionCard = ({ imgSrc, imgAlt, title, titleClassName, positionClassName, children }) => (
    <div className="relative rounded-lg overflow-hidden group h-full cursor-pointer">
        <img 
            src={imgSrc} 
            alt={imgAlt} 
            className="w-full h-full object-cover transform group-hover:scale-105 object-bottom transition-transform duration-500 ease-in-out" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        <div className={`absolute ${positionClassName} p-4 md:p-6`}>
            {children ? children : <h3 className={titleClassName}>{title}</h3>}
        </div>
    </div>
);


const Collections = () => {
  return (
    <section className=" font-sans py-8 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-10 sm:px-12 md:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 tracking-tight">Tamp's Collections</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-2">Explore our newly launched collection</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {/* Left Big Card */}
          <div className="h-[320px] sm:h-[400px] md:h-[500px]">
            <CollectionCard 
                imgSrc={image1}
                imgAlt="Festive jewelry collection"
                positionClassName="bottom-0 left-0"
            >
            </CollectionCard>
          </div>
          
          {/* Right Column with two cards */}
          <div className="grid grid-rows-2 gap-2 h-[320px] sm:h-[400px] md:h-[500px]">
            <CollectionCard 
                imgSrc={image2}
                imgAlt="Stunning earrings"
                positionClassName="top-1/2 -translate-y-1/2 right-0 text-right"
            >

            </CollectionCard>
            
            <CollectionCard 
                imgSrc={image3}
                imgAlt="Floral design jewelry"
                positionClassName="bottom-0 left-0"
            >
            </CollectionCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;