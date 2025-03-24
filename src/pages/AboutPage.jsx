import React from "react";
import AboutHeroSection from "../components/AboutPage/AboutHeroSection";
import OurTeam from "../components/AboutPage/OurTeam";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AboutStaticData from "../Data/AboutData.json"
const fetchAboutpageContent = async (formattedData) => {
  const { data } = await axios.get(
    "https://starfish-app-ca2ju.ondigitalocean.app/api/about-page?populate[about_hero_section_heading][populate]=*&populate[our_team][populate]=*&populate[team_members][populate]=*&populate[about_hero_descriptions][populate]=*"
  );
  return data.data;
};
const AboutPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["homepage-content"],
    queryFn: fetchAboutpageContent,
  });

  // Use API data if available; fallback to static data on error
  const apiResponse = error ? AboutStaticData.data : data || {};
  if (isLoading) return <p>Loading...</p>;
  return apiResponse.about_hero_descriptions ? (
    <>
      <AboutHeroSection
        description={apiResponse.about_hero_descriptions}
        heading={apiResponse.about_hero_section_heading}
      />
      <OurTeam team={apiResponse.our_team} members={apiResponse.team_members} />
    </>
  ) : (
    <p>No data available</p>
  );
};

export default AboutPage;
