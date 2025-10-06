import React from 'react';
import GiftImage from "../assets/gift.png"
import GiftImage2 from "../assets/gift2.png"
const GiftOfChoiceCard = () => (
  <div 
    className="bg-cover bg-center p-6 rounded-xl shadow-lg relative flex flex-col justify-center items-center text-center overflow-hidden min-h-[320px] md:min-h-[280px]"
    // Replace the URL below with the path to your own image
    style={{ backgroundImage: `url(${GiftImage2})` }}
  >
    {/* Semi-transparent overlay for text readability */}
    <div className="absolute inset-0 bg-gray-100/30"></div>
    
    <div className="relative z-10 text-pink-700 p-4">
      <h3 className="text-4xl font-bold font-serif">#GiftOfChoice</h3>
      <p className="mt-3 text-sm max-w-xs mx-auto">
        Breathtaking gifts for your loved one's <span className="font-semibold">STARTING AT ₹10,000</span>
      </p>
      <a 
        href="#" 
        className="mt-5 inline-block border-2 border-white rounded-lg px-5 py-2 text-xs font-semibold bg-gray-100/80 tracking-wider hover:bg-white hover:text-pink-700 transition-all duration-300"
      >
        Explore Now &gt;
      </a>
    </div>
  </div>
);

const GoldExchangeCard = () => (
  <div className="p-6 rounded-2xl border-2 border-dashed border-amber-300 flex flex-col justify-center items-center text-center min-h-[320px] md:min-h-[280px]">
    <img src="https://placehold.co/80x30/78350F/FFFFFF?text=TAMP" alt="Brand Logo" className="mb-4 rounded-sm" />
    <h3 className="text-xl font-semibold text-amber-900 leading-tight font-serif">
      Add your own message 
    </h3>
    <p className="mt-3 text-xs text-gray-700 max-w-xs mx-auto">
      Get Customized gifts for your loved ones <br /> <span className="font-semibold">Gift Now!</span>
    </p>
    <a 
      href="#" 
      className="mt-5 inline-block border-2 border-amber-800 text-amber-900 rounded-lg px-5 py-2 text-xs font-semibold tracking-wider hover:bg-amber-800 hover:text-white transition-all duration-300"
    >
      Know more &gt;
    </a>
  </div>
);


export default function PromoSection() {
  return (
    <div className="p-8 sm:p-8 py-20">
        <div className="max-w-4xl mx-auto pb-20">
          <div className='flex justify-center items-center mb-10 flex-col'>
          <p className='text-red-300 text-4xl font-semibold mb-4 animate-pulse tracking-widest text-center'>Coming soon !</p>
          <p className='text-2xl font-serif text-gray-800'>Gift your people!</p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                <GiftOfChoiceCard />
                <GoldExchangeCard />
            </div>
        </div>
    </div>
  );
}

