import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import CategoryGrid from './Components/CategoryCards'
import Sliding from './Components/Sliding'
import TrendingJewelry from './Components/TrendingNow'
import ContactForm from './Components/ContactForm'

function App() {

  return (
    <>
      <div className='bg-white'>
        <Navbar/>
        <HeroSection/>
        <Sliding/>
        <CategoryGrid/>
        <TrendingJewelry/>
        <ContactForm/>
      </div>
    
    </>
  )
}

export default App
