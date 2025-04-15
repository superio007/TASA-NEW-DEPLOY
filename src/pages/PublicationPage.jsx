import { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import PublicationHeroSection from "../components/PublicationPage/PublicationHeroSection";
import PublicationsCards from "../components/PublicationPage/PublicationsCards";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PublicationsStaticData from "../Data/PublicationsStaticData.json";
const fetchPublicationspageContent = async (formattedData) => {
  const { data } = await axios.get(
    "http://akgswo8ccs0kw8kckg8gg4c8.82.25.90.229.sslip.io/api/publication-page?populate[publication_hero_section][populate]=*&populate[publications_slider][populate]=*&populate[publications][populate]=*"
  );
  return data.data;
};
function PublicationPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["publicationspage-content"],
    queryFn: fetchPublicationspageContent,
    initialData: PublicationsStaticData.data,
    initialDataUpdatedAt: 0,
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
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
              EnquerySubHeading={apiResponse.EnquerySubHeading}
              EnqueryHeading={apiResponse.EnqueryHeading}
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
