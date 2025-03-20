import React from "react";
import FeturedProjects from "../components/HomePage/FeaturedProject";
import { ParallaxProvider } from "react-scroll-parallax";

const ProjectsPage = () => {
  return (
    <>
      <ParallaxProvider>
        <FeturedProjects />
      </ParallaxProvider>
    </>
  );
};

export default ProjectsPage;
