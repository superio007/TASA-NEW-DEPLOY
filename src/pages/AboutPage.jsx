import React, { useEffect, useState } from "react";
import AboutHeroSection from "../components/AboutPage/AboutHeroSection";
import OurTeam from "../components/AboutPage/OurTeam";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AboutStaticData from "../Data/AboutData.json";
const fetchAboutpageContent = async (formattedData) => {
  const { data } = await axios.get(
    "http://akgswo8ccs0kw8kckg8gg4c8.82.25.90.229.sslip.io/api/about-page?populate[about_hero_section_heading][populate]=*&populate[team_members][populate]=*&populate[our_team][populate]=*"
  );
  return data.data;
};
const AboutPage = () => {
  const [apiResponse, setapiResponse] = useState([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["Aboutpage-content"],
    queryFn: fetchAboutpageContent,
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  // Use API data if available; fallback to static data on error
  useEffect(() => {
    setapiResponse(error ? AboutStaticData.data : data || {});
  }, [data]);
  if (isLoading) return <p>Loading...</p>;
  return apiResponse.about_hero_section_heading ? (
    <>
      <AboutHeroSection
        description={
          apiResponse.about_hero_section_heading.about_hero_descriptions
        }
        heading={apiResponse.about_hero_section_heading}
      />
      <OurTeam team={apiResponse.our_team} members={apiResponse.team_members} />
    </>
  ) : (
    <p>No data available</p>
  );
};

export default AboutPage;
