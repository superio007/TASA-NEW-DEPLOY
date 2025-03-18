import Contact from "../components/contactPage/Contact";
import Contact2 from "../components/contactPage/Conatct2";
import HeroSection from "../components/HomePage/HeroSection"
import { ParallaxProvider } from "react-scroll-parallax";
import FeaturedProject from "../components/HomePage/FeaturedProject"
const HomePage = () => {
  return (
    <>
      <ParallaxProvider>
        <HeroSection />
      </ParallaxProvider>
      <FeaturedProject/>
      {/* <Contact /> */}
      <Contact2 />
    </>
  );
};
export default HomePage;
