import React from "react";
import FeturedProjects from "../components/HomePage/FeaturedProject";
import { ParallaxProvider } from "react-scroll-parallax";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ProjectsData from "../Data/ProjectsData.json";
import ProjectsContext from "../context/ProjectContext";
const fetchProjectpageContent = async (formattedData) => {
  const { data } = await axios.get(
    "https://starfish-app-ca2ju.ondigitalocean.app/api/projects?populate=*"
  );
  return data.data;
};
const ProjectsPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Projectspage-content"],
    queryFn: fetchProjectpageContent,
  });

  // Use API data if available; fallback to static data on error
  const apiResponse = error ? ProjectsData.data : data || {};
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {apiResponse ? (
        <>
          <ParallaxProvider>
            <ProjectsContext.Provider value={apiResponse}>
              <FeturedProjects />
            </ProjectsContext.Provider>
          </ParallaxProvider>
        </>
      ) : (
        <p>No data available</p>
      )
      }
    </>
  );
};

export default ProjectsPage;
