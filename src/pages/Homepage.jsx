import Contact from "../components/contactPage/Contact";
import HeroSection from "../components/HomePage/HeroSection";
import { ParallaxProvider } from "react-scroll-parallax";
import FeaturedProject from "../components/HomePage/FeaturedProject";
import BrandSlider from "../components/PublicationPage/BrandSlider";
import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HomeStaticData from "../Data/HomeStaticData.json"
const fetchHomepageContent = async (formattedData) => {
  const { data } = await axios.get(
    "https://starfish-app-ca2ju.ondigitalocean.app/api/home-page?populate[home_herosection][populate]=BackgroundImage&populate[projects][populate]=*&populate[publications_slider][populate]=*"
  );
  return data.data;
};

const HomePage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["homepage-content"],
    queryFn: fetchHomepageContent,
  });

  // Use API data if available; fallback to static data on error
  const apiResponse = error ? HomeStaticData.data : data || {};
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {apiResponse.home_herosection ? (
        <ParallaxProvider>
          <HeroSection apiRes={apiResponse.home_herosection} />
          <div className=" w-full p-4 ">
            <BrandSlider apiRes={apiResponse.publications_slider} />
          </div>
          <FeaturedProject apiRes={apiResponse.projects} />
          <Contact />
        </ParallaxProvider>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};
export default HomePage;
