import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import { ShopPage, ProductDetailPage } from './Pages/ShopPage'; // Adjust path as needed


function App() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/:category" element={<ShopPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} /> {/* Add this route */}
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;