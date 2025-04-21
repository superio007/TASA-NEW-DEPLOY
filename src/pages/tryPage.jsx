import React from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const TryPage = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleVerify = async () => {
    if (!executeRecaptcha) {
      console.warn("executeRecaptcha not yet available");
      return;
    }

    try {
      const recaptchaToken = import.meta.env.VITE_SITE_KEY;

      const response = await fetch("http://localhost:5000/verify-recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: recaptchaToken }),
      });

      const result = await response.json();
      console.log("reCAPTCHA Verification Result:", result);
    } catch (err) {
      console.error("reCAPTCHA verification failed:", err);
    }
  };

  return (
    <div>
      <h1>Try Page</h1>
      <p>This is a try page.</p>
      <button onClick={handleVerify}>Verify reCAPTCHA</button>
    </div>
  );
};

export default TryPage;
