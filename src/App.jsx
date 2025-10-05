import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import CategoryGrid from './Components/CategoryCards'

function App() {

  return (
    <>
      <div className='bg-white h-1200'>
        <Navbar/>
        <HeroSection/>
        <CategoryGrid/>
      </div>
    
    </>
  )
}

export default App
