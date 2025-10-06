import HeroSection from "../Components/HeroSection";
import Sliding from "../Components/Sliding";
import CategoryGrid from "../Components/CategoryCards";
import TrendingJewelry from "../Components/TrendingNow";
import ContactForm from "../Components/ContactForm";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Sliding />
      <CategoryGrid />
      <TrendingJewelry />
      <ContactForm />
    </>
  );
};

export default HomePage;