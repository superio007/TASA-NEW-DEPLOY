import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import PublicationHeroSection from "../components/PublicationPage/PublicationHeroSection";
import PublicationsCards from "../components/PublicationPage/PublicationsCards";
function PublicationPage() {
  return (
    <>
      <ParallaxProvider>
        <PublicationHeroSection />
      </ParallaxProvider>
      <PublicationsCards />
    </>
  );
}

export default PublicationPage;
