import HeroSection from "../Components/HeroSection";
import Sliding from "../Components/Sliding";
import CategoryGrid from "../Components/CategoryCards";
import TrendingJewelry from "../Components/TrendingNow";
import ContactForm from "../Components/ContactForm";
import PromoSection from "../Components/Gifting";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Sliding />
      <CategoryGrid />
      <TrendingJewelry />
      <ContactForm />
      <PromoSection/>
    </>
  );
};

export default HomePage;