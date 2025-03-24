import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Contact from "./pages/ContactPage";
import MainLayout from "./Layouts/MainLayout";
import ProjectBrief from "./pages/ProjectBriefPage";
import Projects from "./pages/ProjectsPage";
import About from "./pages/AboutPage";
import Publications from "./pages/PublicationPage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HomeStaticData from "./Data/HomeStaticData.json";
import ProjectsContext from "./context/ProjectContext";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";

const fetchHomepageContent = async () => {
  const { data } = await axios.get(
    "https://starfish-app-ca2ju.ondigitalocean.app/api/home-page?populate[home_herosection][populate]=BackgroundImage&populate[projects][populate]=*&populate[publications_slider][populate]=*"
  );
  return data.data;
};

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["homepage-content"],
    queryFn: fetchHomepageContent,
  });

  // Use API data if available; fallback to static data on error
  const apiResponse = error ? HomeStaticData.data : data || {};

  // Store projects in state so that context updates when data changes
  const [projects, setProjects] = useState(apiResponse.projects || []);

  useEffect(() => {
    if (data) {
      setProjects(data.projects || []);
    }
  }, [data]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <ProjectsContext.Provider value={projects}>
            <MainLayout apiRes={apiResponse} />
          </ProjectsContext.Provider>
        }
      >
        <Route path="/" element={<Homepage apiResponse={apiResponse} />} />
        <Route
          path="/contact"
          element={
            <Contact
              ContactUsSubHeading={apiResponse.ContactUsSubHeading}
              ContactUsHeading={apiResponse.ContactUsHeading}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/:id"
          element={<ProjectBrief apiRes={projects} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
