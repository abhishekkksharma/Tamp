import image1 from "../assets/HeroSection/1.png"
import image2 from "../assets/HeroSection/2.png"
import image3 from "../assets/HeroSection/3.png"

function HeroSection() {
  return (
    <>
      <div className="w-full lg:flex relative">
        {/* Images */}
        <img className="lg:w-1/3 lg:h-screen object-cover" src={image1} alt="" />
        <img className="lg:w-1/3 lg:h-screen object-cover" src={image2} alt="" />
        <img className="lg:w-1/3 lg:h-screen object-cover" src={image3} alt="" />

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-baseline-last mb-20 justify-center">
          <p className="text-white text-4xl tracking-widest">
            C U L T U R E
          </p>
        </div>
      </div>
    </>
  )
}

export default HeroSection
