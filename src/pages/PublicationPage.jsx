import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import PublicationHeroSection from "../components/PublicationPage/PublicationHeroSection";
import PublicationsCards from "../components/PublicationPage/PublicationsCards";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PublicationsStaticData from "../Data/PublicationsStaticData.json";
const fetchPublicationspageContent = async (formattedData) => {
  const { data } = await axios.get(
    "https://starfish-app-ca2ju.ondigitalocean.app/api/publication-page?populate[publication_hero_section][populate]=*&populate[publications_slider][populate]=*&populate[publications][populate]=*"
  );
  return data.data;
};
function PublicationPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["homepage-content"],
    queryFn: fetchPublicationspageContent,
  });

  // Use API data if available; fallback to static data on error
  const apiResponse = error ? PublicationsStaticData.data : data || {};
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {apiResponse.publication_hero_section ? (
        <>
          <ParallaxProvider>
            <PublicationHeroSection
              apiRes={apiResponse.publication_hero_section}
              slider={apiResponse.publications_slider}
            />
          </ParallaxProvider>
          <PublicationsCards apiRes={apiResponse.publications} />
        </>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
}

export default PublicationPage;
