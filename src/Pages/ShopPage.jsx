import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Image1 from "../assets/Trending/1.png"
import Image2 from "../assets/Trending/2.png"

// In a real app, you would import your images like this:
// import Image1 from "../assets/Trending/1.png"
// import Image2 from "../assets/Trending/2.png"
// For this example, we'll use placeholders.
// const Image1 = 'https://placehold.co/400x500/f8f7f5/333?text=Product+Image+1';
// const Image2 = 'https://placehold.co/400x500/e0e0e0/333?text=Product+Image+2';


// --- Data ---
const products = [
    { id: 1, name: "Drop Hoops", price: "17,708", category: "earrings", images: [Image1, Image2] },
    { id: 2, name: "Sara Earrings", price: "17,436", category: "earrings", images: [Image1, Image2] },
    { id: 3, name: "Bow XL Earrings", price: "23,098", category: "earrings", images: [Image1, Image2] },
    { id: 4, name: "XXL Link Chain Hoops", price: "21,558", category: "earrings", images: [Image1, Image2] },
    { id: 5, name: "Aura Solitaire Ring", price: "25,500", category: "rings", images: [Image1, Image2] },
    { id: 6, name: "Minimalist Band", price: "12,200", category: "rings", images: [Image1, Image2] },
    { id: 7, name: "Celestial Pendant", price: "19,800", category: "pendants", images: [Image1, Image2] },
    { id: 8, name: "Serpent Chain", price: "28,000", category: "chains", images: [Image1, Image2] },
    { id: 9, name: "Classic Tennis Bracelet", price: "45,000", category: "bracelets", images: [Image1, Image2] },
    { id: 10, name: "Rope Bangle", price: "32,150", category: "bangles", images: [Image1, Image2] },
    { id: 11, name: "Cuff Bangle", price: "36,250", category: "bangles", images: [Image1, Image2] },
    { id: 12, name: "Figaro Chain", price: "22,500", category: "chains", images: [Image1, Image2] },
];

const categories = ["All", "Earrings", "Finger Rings", "Pendants", "Bracelets", "Bangles", "Chains"];

const categoryMap = {
    "All": "all",
    "Earrings": "earrings",
    "Finger Rings": "rings",
    "Pendants": "pendants",
    "Bracelets": "bracelets",
    "Bangles": "bangles",
    "Chains": "chains",
};

// --- Reusable Components ---
const ProductCard = ({ product }) => {
    return (
        <div className="group cursor-pointer">
            <div className="relative bg-stone-100 mb-4 overflow-hidden rounded-lg aspect-[4/5]">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                    onError={(e) => e.target.src = 'https://placehold.co/400x500/f8f7f5/333?text=Image+Not+Found'}
                />
                <img
                    src={product.images[1]}
                    alt={`${product.name} hover`}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                    onError={(e) => e.target.src = 'https://placehold.co/400x500/e0e0e0/333?text=Image+Not+Found'}
                />
            </div>
            <div className="text-center">
                <h3 className="font-cormorant text-xl md:text-2xl text-stone-800 tracking-wide uppercase">{product.name}</h3>
                <p className="text-stone-600 mt-1 text-sm tracking-wider">FROM RS. {product.price}</p>
            </div>
        </div>
    );
};

const FilterNav = ({ activeFilter }) => {
    return (
        <nav className="flex justify-center flex-wrap gap-4 md:gap-8 mb-12">
            {categories.map(category => {
                const filterValue = categoryMap[category];
                const isActive = activeFilter === filterValue;
                const linkTo = filterValue === 'all' ? '/shop' : `/shop/${filterValue}`;
                return (
                    <Link
                        key={category}
                        to={linkTo}
                        className={`text-lg text-stone-700 hover:text-stone-900 pb-1 transition-all duration-300 ${isActive ? 'font-bold border-b-2 border-stone-700' : ''}`}
                    >
                        {category}
                    </Link>
                );
            })}
        </nav>
    );
};


// --- Main ShopPage Component ---
export default function ShopPage() {
    const { category: categoryParam } = useParams();
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        // Update the active filter based on the URL parameter
        setActiveFilter(categoryParam || 'all');
    }, [categoryParam]);

    const filteredProducts = useMemo(() => {
        if (activeFilter === 'all') {
            return products;
        }
        return products.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    const StyleInjector = () => (
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Poppins:wght@400;500&display=swap');
            body { font-family: 'Poppins', sans-serif; }
            .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        `}</style>
    );
    
    return (
        <>
            <StyleInjector />
            <div className="bg-stone-50 text-stone-800">
                {/* Added pt-20 to account for the fixed navbar's height (h-20) */}
                <div className="container mx-auto px-4 py-12 pt-28 md:pt-32">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold font-cormorant text-stone-900 tracking-wider">Our Collection</h1>
                        <p className="text-stone-600 mt-2 max-w-2xl mx-auto">
                            Discover our curated selection of handcrafted jewelry. Each piece is a testament to timeless elegance and contemporary design.
                        </p>
                    </header>

                    <FilterNav activeFilter={activeFilter} />

                    <main>
                        {filteredProducts.length > 0 ? (
                             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 text-xl text-stone-500">
                                <p>No products found in this category.</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </>
    );
}
