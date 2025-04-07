import React from "react";
import FeaturedProjects from "../components/HomePage/FeaturedProject";
import { ParallaxProvider } from "react-scroll-parallax";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ProjectsData from "../Data/ProjectsData.json";

const fetchProjectpageContent = async () => {
  const { data } = await axios.get(
    "http://localhost:1337/api/home-page?populate[home_herosection][populate]=BackgroundImage&populate[projects][populate]=*&populate[publications_slider][populate]=*"
  );
  return data.data;
};

const ProjectsPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Projectspage-content"],
    queryFn: fetchProjectpageContent,
  });

  // Use API response if available, otherwise fallback to static data
  const apiResponse = error ? ProjectsData.data : data;

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {apiResponse && apiResponse.projects ? (
        <ParallaxProvider>
          <FeaturedProjects apiRes={apiResponse.projects} />
        </ParallaxProvider>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default ProjectsPage;
