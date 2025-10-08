import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import Navbar from './Components/Navbar';
import ShopPage from './Pages/ShopPage';
import Footer from './Components/Footer';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add this dynamic route */}
        <Route path="/shop/:category" element={<ShopPage />} /> 
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;