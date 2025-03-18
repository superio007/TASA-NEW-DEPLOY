import { Outlet } from "react-router-dom";
import Navbar from "../components/General/Navbar";
import React, { useEffect, useState } from "react";
import Footer from "../components/General/Footer";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
const RecaptchaToken = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [iscaptchaToken, setiscaptchaToken] = useState(
    localStorage.getItem("_grecaptcha") || "" // ✅ Use sessionStorage instead of localStorage
  );

  // Function to fetch reCAPTCHA token
  const fetchRecaptchaToken = async () => {
    if (!executeRecaptcha) {
      console.warn("Waiting for reCAPTCHA to be available...");
      return;
    }
    try {
      const recaptchaToken = await executeRecaptcha("token_request");
      setiscaptchaToken(recaptchaToken);
      // sessionStorage.setItem("_grecaptcha", recaptchaToken); // ✅ Store in session
      // console.log("Stored reCAPTCHA Token in sessionStorage:", recaptchaToken);
    } catch (error) {
      console.error("reCAPTCHA Error:", error);
    }
  };

  // Auto-fetch reCAPTCHA token when the component loads
  useEffect(() => {
    if (!iscaptchaToken && executeRecaptcha) {
      fetchRecaptchaToken();
    }
  }, [executeRecaptcha, iscaptchaToken]); // Runs when executeRecaptcha becomes available

  return null; // No UI rendering
};
const MainLayout = () => {
  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_SITE_KEY}>
        <RecaptchaToken /> {/* Placed at top level */}
        <Navbar />
        <Outlet />
        <Footer />
      </GoogleReCaptchaProvider>
    </>
  );
};
export default MainLayout;
