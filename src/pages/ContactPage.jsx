import Contact from "../components/contactPage/Contact";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HomeStaticData from "../Data/HomeStaticData.json";
const fetchHomepageContent = async (formattedData) => {
  const { data } = await axios.get(
    "http://akgswo8ccs0kw8kckg8gg4c8.82.25.90.229.sslip.io/api/home-page?populate[home_herosection][populate]=BackgroundImage&populate[projects][populate]=*&populate[publications_slider][populate]=*"
  );
  return data.data;
};
const ContactPage = () => {
  const [apiResponse, setapiResponse] = useState([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["contactpage-content"],
    queryFn: fetchHomepageContent,
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  // Use API data if available; fallback to static data on error
  useEffect(() => {
    setapiResponse(error ? HomeStaticData.data : data || {});
  }, [data]);
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
