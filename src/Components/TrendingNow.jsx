
const trendingProducts = [
  {
    id: 1,
    title: 'Auspicious Occasion',
    imageUrl: 'https://placehold.co/400x400/364531/FFFFFF?text=Jewelry+1',
    alt: 'Gold pendant for auspicious occasions',
  },
  {
    id: 2,
    title: 'Gifting Jewellery',
    imageUrl: 'https://placehold.co/400x400/8B0000/FFFFFF?text=Jewelry+2',
    alt: 'Pendant in a gift box',
  },
  {
    id: 3,
    title: 'Drops of Radiance',
    imageUrl: 'https://placehold.co/400x400/F5F5F5/333333?text=Jewelry+3',
    alt: 'Rose gold ring with a blue gemstone',
  },
];

// A single card component for better structure
const JewelryCard = ({ imageUrl, title, alt }) => {
  return (
    <div className="group flex flex-col items-center text-center cursor-pointer p-4 lg:p-0">
      <div className="overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <p className="mt-4 text-base text-gray-700 font-serif tracking-wide">
        {title}
      </p>
    </div>
  );
};


// The main component for the "Trending Now" section
function TrendingJewelry() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-gray-800 mb-2">
            Trending Now
          </h2>
          <p className="text-base text-gray-500">
            Jewellery pieces everyone's eyeing right now
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trendingProducts.map((product) => (
            <JewelryCard
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              alt={product.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingJewelry;