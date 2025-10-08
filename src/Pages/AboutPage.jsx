import RingImage from "../assets/About/ring.png"
import Image from "../assets/About/image.png"

const AboutPage = () => {
  return (
    <>
      <div className=" relative flex flex-col justify-center items-center font-sans mt-30 px-10 lg:px-120">
        <p className="text-8xl lg:text-[9rem] my-5 tracking-widest z-10 text-gray-200">TAMP</p>
        <p className="font-light text-lg text-center lg:text-3xl absolute top-12 lg:top-20 z-20 tracking-widest ">Taposi's Adornment of Modern Preciousness</p>
        <p className="text-center py-2 text-sm">
        At <span className="text-gray-400">Tamp</span>, we believe that everyone deserves to feel beautiful. As a retailer of aesthetic and contemporary jewelry, we offer thoughtfully curated pieces at customer-driven prices — where style meets affordability.
        </p>
        <p className="text-center py-2 text-sm">  
        Our focus is on you. Every collection is designed with care and crafted to enhance confidence, individuality, and everyday elegance. At Tamp, customer satisfaction isn’t just our goal — it’s the heart of everything we do.
        </p>
      </div>

      {/* Add "relative" to the parent div */}
      <div className="relative bg-gray-100 h-100 my-40 flex mt-40 lg:mt-50 justify-center lg:justify-end">

        {/* Change the image to use absolute positioning */}
        <img 
          className="absolute w-80 lg:w-140 h-auto left-0 -top-40 lg:-top-70" 
          src={Image} 
          alt="" 
        />
        <div className="flex justify-center items-center p-20 lg:p-40"> 
        <p className="tracking-widest text-4xl lg:text-4xl text-center">"Embrace Your Beauty"</p>
        </div>
        
      </div>
    </>
  );
};

export default AboutPage;