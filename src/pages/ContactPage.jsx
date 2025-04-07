import Contact from "../components/contactPage/Contact";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HomeStaticData from "../Data/HomeStaticData.json";
const fetchHomepageContent = async (formattedData) => {
  const { data } = await axios.get(
    "https://starfish-app-ca2ju.ondigitalocean.app/api/home-page?populate[home_herosection][populate]=BackgroundImage&populate[projects][populate]=*&populate[publications_slider][populate]=*"
  );
  return data.data;
};
const ContactPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["contactpage-content"],
    queryFn: fetchHomepageContent,
  });

  // Use API data if available; fallback to static data on error
  const apiResponse = error ? HomeStaticData.data : data || {};
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <Contact
        ContactUsSubHeading={apiResponse.ContactUsSubHeading}
        ContactUsHeading={apiResponse.ContactUsHeading}
      />
    </>
  );
};
export default ContactPage;
