import Contact from "../components/contactPage/Contact";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ContactStaticData from "../Data/ContactStaticData.json";
const fetchContactpageContent = async (formattedData) => {
  const { data } = await axios.get(
    `${process.env.VITE_API_URL}api/home-page?populate[home_herosection][populate]=BackgroundImage&populate[projects][populate]=*&populate[publications_slider][populate]=*`
  );
  return data.data;
};
const ContactPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["contactpage-content"],
    queryFn: fetchContactpageContent,
    initialData: ContactStaticData.data,
    initialDataUpdatedAt: 0,
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  const apiResponse = error ? ContactStaticData.data : data || {};
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
