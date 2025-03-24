import Contact from "../components/contactPage/Contact";
import HeroSection from "../components/HomePage/HeroSection";
import { ParallaxProvider } from "react-scroll-parallax";
import FeaturedProject from "../components/HomePage/FeaturedProject";
import BrandSlider from "../components/PublicationPage/BrandSlider";
import HomeStaticData from "../Data/HomeStaticData.json";

const HomePage = ({ apiResponse }) => {
  return (
    <>
      {apiResponse.home_herosection ? (
        <ParallaxProvider>
          <HeroSection apiRes={apiResponse.home_herosection} />
          <div className=" w-full p-4 ">
            <BrandSlider apiRes={apiResponse.publications_slider} />
          </div>
          <FeaturedProject />
          <Contact />
        </ParallaxProvider>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};
export default HomePage;
