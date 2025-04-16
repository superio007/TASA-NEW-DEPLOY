import Contact from "../components/contactPage/Contact";
import { useEffect, useState } from "react";
import HeroSection from "../components/HomePage/HeroSection";
import { ParallaxProvider } from "react-scroll-parallax";
import FeaturedProject from "../components/HomePage/FeaturedProject";
import BrandSlider from "../components/PublicationPage/BrandSlider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HomeStaticData from "../Data/HomeStaticData.json";
const fetchHomepageContent = async (formattedData) => {
  const { data } = await axios.get(
    "https://akgswo8ccs0kw8kckg8gg4c8.82.25.90.229.sslip.io/api/home-page?populate[home_herosection][populate]=BackgroundImage&populate[projects][populate]=*&populate[publications_slider][populate]=*"
  );
  return data.data;
};

const HomePage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["homepage-content"],
    queryFn: fetchHomepageContent,
    initialData: HomeStaticData.data,
    initialDataUpdatedAt: 0,
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

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
          <Contact
            ContactUsSubHeading={apiResponse.ContactUsSubHeading}
            ContactUsHeading={apiResponse.ContactUsHeading}
          />
        </ParallaxProvider>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};
export default HomePage;
