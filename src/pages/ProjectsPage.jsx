import { React, useEffect, useState } from "react";
import FeaturedProjects from "../components/HomePage/FeaturedProject";
import { ParallaxProvider } from "react-scroll-parallax";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ProjectsData from "../Data/ProjectsData.json";

const fetchProjectpageContent = async () => {
  const { data } = await axios.get(
    `${process.env.VITE_API_URL}api/home-page?populate[home_herosection][populate]=BackgroundImage&populate[projects][populate]=*&populate[publications_slider][populate]=*`
  );
  return data.data;
};

const ProjectsPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Projectspage-content"],
    queryFn: fetchProjectpageContent,
    initialData: ProjectsData.data,
    initialDataUpdatedAt: 0,
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

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
