import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import image1 from "../assets/Trending/1.png"
import image2 from "../assets/Trending/2.png"
// --- Assets ---
// In a real app, you would import your images. For this example, we'll use placeholders.
const Image1 = image1;
const Image2 = image2;
const Image3 = image1;
const Image4 = image2;
const Ring1 = image2;
const Ring2 = image1;
const Pendant1 = image2;
const Pendant2 = image2;

// --- Data ---
const products = [
    { id: 1, name: "Drop Hoops", price: "17,708", category: "earrings", images: [Image1, Image2, Image3, Image4], description: "Elegant drop hoops that catch the light with every movement. A perfect blend of modern design and timeless appeal.", details: ["Material: 18k Gold Plated Sterling Silver", "Hypoallergenic, Nickel-Free", "Drop Length: 3.5cm", "Handcrafted in Jaipur"] },
    { id: 2, name: "Sara Earrings", price: "17,436", category: "earrings", images: [Image2, Image3, Image4, Image1], description: "Minimalist yet bold, the Sara Earrings feature a unique geometric shape for a contemporary look.", details: ["Material: Polished Brass", "Lightweight for all-day comfort", "Stud backing", "Dimensions: 2cm x 2cm"] },
    { id: 3, name: "Bow XL Earrings", price: "23,098", category: "earrings", images: [Image3, Image4, Image1, Image2], description: "Make a statement with these oversized bow earrings, designed to be the centerpiece of any outfit.", details: ["Material: Plated Alloy", "Available in Gold and Silver finish", "Weight: 15g per earring", "Secure clip-on available"] },
    { id: 4, name: "XXL Link Chain Hoops", price: "21,558", category: "earrings", images: [Image4, Image1, Image2, Image3], description: "Chunky link chain hoops that embody an edgy yet sophisticated aesthetic.", details: ["Material: Stainless Steel", "High-polish finish", "Diameter: 4cm", "Latch-back closure"] },
    { id: 5, name: "Aura Solitaire Ring", price: "25,500", category: "rings", images: [Ring1, Ring2, Pendant1, Pendant2], description: "A timeless solitaire ring featuring a brilliant-cut cubic zirconia set in a delicate sterling silver band.", details: ["Main Stone: 5mm Cubic Zirconia", "Band: 925 Sterling Silver", "Available in sizes 5-9", "Comes in a luxury gift box"] },
    { id: 6, name: "Minimalist Band", price: "12,200", category: "rings", images: [Ring2, Pendant1, Pendant2, Ring1], description: "A simple and elegant band perfect for stacking or wearing alone. Its smooth, polished surface offers a classic look.", details: ["Material: 14k Gold Vermeil", "Band Width: 2mm", "Comfort-fit design", "Unisex style"] },
    { id: 7, name: "Celestial Pendant", price: "19,800", category: "pendants", images: [Pendant1, Pendant2, Ring1, Ring2], description: "A beautiful celestial-inspired pendant with engraved stars and a central moonstone.", details: ["Stone: Natural Moonstone", "Chain: 18-inch adjustable silver chain", "Pendant Size: 1.5cm diameter", "Lobster clasp"] },
    { id: 8, name: "Serpent Chain", price: "28,000", category: "chains", images: [Image1, Pendant1, Ring2, Image3], description: "A fluid and sleek serpent chain that lays beautifully on the collarbone.", details: ["Material: 18k Gold Plated", "Length: 16 inches with 2-inch extender", "Width: 3mm", "Tarnish-resistant"] },
    { id: 9, name: "Classic Tennis Bracelet", price: "45,000", category: "bracelets", images: [Image2, Ring1, Pendant2, Image4], description: "An iconic tennis bracelet set with sparkling stones for a look of pure luxury.", details: ["Stones: AAA+ Grade Cubic Zirconia", "Length: 7 inches", "Box clasp with safety latch", "Rhodium plated for durability"] },
    { id: 10, name: "Rope Bangle", price: "32,150", category: "bangles", images: [Image3, Pendant2, Ring1, Image1], description: "A twisted rope design gives this bangle a unique texture and a substantial feel.", details: ["Material: Solid Brass", "Inner Diameter: 6.5cm", "Slip-on style", "Hand-polished finish"] },
    { id: 11, name: "Cuff Bangle", price: "36,250", category: "bangles", images: [Image4, Ring2, Pendant1, Image2], description: "A wide, polished cuff bangle that makes a bold and modern statement.", details: ["Material: Stainless Steel", "Width: 3cm", "Adjustable to fit most wrists", "Engravable surface"] },
    { id: 12, name: "Figaro Chain", price: "22,500", category: "chains", images: [Pendant1, Image1, Ring2, Image3], description: "The classic Figaro chain, known for its pattern of three small links followed by one large link.", details: ["Material: 925 Sterling Silver", "Available in 20 and 22-inch lengths", "Width: 5mm", "Made in Italy"] },
];
const categories = ["All", "Earrings", "Finger Rings", "Pendants", "Bracelets", "Bangles", "Chains"];
const categoryMap = { "All": "all", "Earrings": "earrings", "Finger Rings": "rings", "Pendants": "pendants", "Bracelets": "bracelets", "Bangles": "bangles", "Chains": "chains" };

// --- SVG Icons ---
const HeartIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19.5 12.572c-1.872 3.645-5.592 7.428-7.5 7.428s-5.628-3.783-7.5-7.428C2.25 8.928 6.138 2 12 2s9.75 6.928 7.5 10.572Z"/></svg>);
const BagIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6.333 8H17.67c.928 0 1.68.784 1.623 1.708l-1.15 10.592C18.02 21.28 17.15 22 16.115 22H7.885c-1.034 0-1.902-.72-2.02-1.7l-1.15-10.592C4.658 8.784 5.406 8 6.333 8Z"/><path d="M9 8V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v2"/></svg>);
const ChevronDownIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>);

// --- Helper for Styles ---
const StyleInjector = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Poppins:wght@400;500&display=swap');
        body { font-family: 'Poppins', sans-serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
    `}</style>
);


// --- Reusable Components ---
const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="group cursor-pointer">
            <div className="relative bg-stone-100 mb-4 overflow-hidden rounded-lg aspect-[4/5]">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0" onError={(e) => e.target.src = 'https://placehold.co/400x500/f8f7f5/333?text=Image+Not+Found'}/>
                <img src={product.images[1]} alt={`${product.name} hover`} className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" onError={(e) => e.target.src = 'https://placehold.co/400x500/e0e0e0/333?text=Image+Not+Found'}/>
            </div>
            <div className="text-center">
                <h3 className="font-cormorant text-xl md:text-2xl text-stone-800 tracking-wide uppercase">{product.name}</h3>
                <p className="text-stone-600 mt-1 text-sm tracking-wider">FROM RS. {product.price}</p>
            </div>
        </Link>
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
                    <Link key={category} to={linkTo} className={`text-lg text-stone-700 hover:text-stone-900 pb-1 transition-all duration-300 ${isActive ? 'font-bold border-b-2 border-stone-700' : ''}`}>
                        {category}
                    </Link>
                );
            })}
        </nav>
    );
};

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-stone-200">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center py-4 text-left">
                <span className="font-medium text-stone-800">{title}</span>
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><ChevronDownIcon /></span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pt-2 pb-4 text-stone-600 space-y-2">{children}</div>
            </div>
        </div>
    );
};


// --- Page Components ---

export const ShopPage = () => {
    const { category } = useParams();
    const activeFilter = category || 'all';

    const filteredProducts = useMemo(() => {
        if (activeFilter === 'all') return products;
        return products.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    return (
        <>
            <StyleInjector />
            <div className="bg-stone-50 text-stone-800">
                <div className="container mx-auto px-4 py-12 pt-28 md:pt-32">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold font-cormorant text-stone-900 tracking-wider">Our Collection</h1>
                        <p className="text-stone-600 mt-2 max-w-2xl mx-auto">Discover our curated selection of handcrafted jewelry. Each piece is a testament to timeless elegance and contemporary design.</p>
                    </header>
                    <FilterNav activeFilter={activeFilter} />
                    <main>
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                                {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
                            </div>
                        ) : (
                            <div className="text-center py-20 text-xl text-stone-500"><p>No products found in this category.</p></div>
                        )}
                    </main>
                </div>
            </div>
        </>
    );
};

export const ProductDetailPage = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [mainImage, setMainImage] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (product) {
            setMainImage(product.images[0]);
             window.scrollTo(0, 0);
        }
    }, [product]);

    if (!product) {
        return <div className="text-center py-40">Product not found. <Link to="/shop" className="text-blue-600 underline">Go back to shop</Link></div>;
    }

    return (
        <>
            <StyleInjector />
            <div className="bg-stone-50 text-stone-800">
                <div className="container mx-auto px-4 py-12 pt-28 md:pt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Image Gallery */}
                        <div className="flex flex-col-reverse md:flex-row gap-4">
                            <div className="flex md:flex-col gap-3 justify-center">
                                {product.images.map((img, index) => (
                                    <button key={index} onClick={() => setMainImage(img)} className={`w-16 h-20 md:w-20 md:h-24 rounded-lg overflow-hidden border-2 ${mainImage === img ? 'border-stone-800' : 'border-transparent'}`}>
                                        <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                            <div className="flex-1 bg-stone-100 rounded-lg overflow-hidden aspect-[4/5]">
                                <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div>
                            <Link to="/shop" className="text-sm text-stone-500 hover:underline mb-4 inline-block">&larr; Back to Collection</Link>
                            <h1 className="font-cormorant text-4xl md:text-5xl text-stone-900 tracking-wide uppercase">{product.name}</h1>
                            <p className="text-2xl text-stone-700 mt-4 tracking-wider">RS. {product.price}</p>
                            <p className="mt-6 text-stone-600 leading-relaxed">{product.description}</p>
                            
                            <div className="flex items-center gap-4 my-8">
                                <div className="flex items-center border border-stone-300 rounded-md">
                                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-2 text-xl">-</button>
                                    <span className="px-4 py-2 text-lg">{quantity}</span>
                                    <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-2 text-xl">+</button>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="w-full flex items-center justify-center gap-3 bg-stone-800 text-white py-3 px-6 rounded-md hover:bg-stone-900 transition-colors">
                                    <BagIcon /> ADD TO BAG
                                </button>
                                <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-stone-300 text-stone-800 py-3 px-6 rounded-md hover:bg-stone-100 transition-colors">
                                   <HeartIcon />
                                </button>
                            </div>

                            <div className="mt-10">
                               <AccordionItem title="Product Details">
                                    <ul className="list-disc pl-5">
                                        {product.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                    </ul>
                                </AccordionItem>
                                 <AccordionItem title="Shipping & Returns">
                                    <p>Free standard shipping on all orders. Express shipping available at checkout.</p>
                                    <p>We accept returns within 30 days of purchase. Please visit our returns page for more information.</p>
                                </AccordionItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
