import HeroSection from "../Components/HeroSection";
import Sliding from "../Components/Sliding";
import CategoryGrid from "../Components/CategoryCards";
import TrendingJewelry from "../Components/TrendingNow";
import ContactForm from "../Components/ContactForm";
import PromoSection from "../Components/Gifting";
import Collections from "../Components/Collections";
import Instagram from "../Components/Instagram";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Sliding />
      <CategoryGrid />
      <TrendingJewelry />
      <Collections/>
      <PromoSection/>
      {/* <Instagram/> */}
      <ContactForm />
    </>
  );
};

export default HomePage;