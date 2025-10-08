import React, { useState } from 'react';

const faqData = [
  {
    question: "What is the return policy?",
    answer: "You can return any item within 30 days of purchase for a full refund. The item must be in its original condition, with all tags attached. Please note that sale items are final and cannot be returned."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 5-7 business days. We also offer expedited shipping options at checkout, which can deliver your order in 2-3 business days. International shipping times may vary."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times will be calculated at checkout based on your location. Please be aware of any potential customs fees or import taxes."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has shipped, you will receive an email with a tracking number and a link to the carrier's website. You can use this link to monitor the progress of your delivery."
  }
];

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const FaqItem = ({ item, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  const handleToggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="mb-4 last:mb-0">
      <div 
        className={`rounded-xl transition-all duration-300 ease-in-out ${isOpen ? 'bg-white shadow-lg p-6' : 'bg-slate-100 hover:bg-slate-200 p-5'}`}
      >
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={handleToggle}
        >
          <h3 className="text-lg font-semibold text-slate-800">{item.question}</h3>
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${isOpen ? 'bg-slate-100' : 'bg-white'}`}>
            {isOpen ? <CloseIcon /> : <PlusIcon />}
          </div>
        </div>
        {isOpen && (
          <div className="mt-4">
            <p className="text-slate-600 leading-relaxed">{item.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0); 

  return (
    <div className="font-sans p-8 my-20">
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-slate-500 tracking-[0.2em] uppercase mb-2">
            Trusted By
          </p>
          <h1 className="text-4xl md:text-4xl text-slate-900">
            Frequently Asked Questions
          </h1>
        </div>
        
        <div>
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

