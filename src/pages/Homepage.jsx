import Contact from "../components/contactPage/Contact";
import HeroSection from "../components/HomePage/HeroSection"
import { ParallaxProvider } from "react-scroll-parallax";
import FeaturedProject from "../components/HomePage/FeaturedProject"
import BrandSlider from "../components/PublicationPage/BrandSlider";
const HomePage = () => {
  return (
    <>
      <ParallaxProvider>
        <HeroSection />
        <div className=" w-full p-4 ">
          <BrandSlider />
        </div>
        <FeaturedProject />
        <Contact />
      </ParallaxProvider>
    </>
  );
};
export default HomePage;
