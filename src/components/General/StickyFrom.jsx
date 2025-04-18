import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import styles from "./css/NonStickyFrom.module.css";
import emailjs from "@emailjs/browser";
import styles from "./css/StickyFrom.module.css";
import { encryptData, decryptData } from "../utils/cryptoUtils";
import axios from "axios";
const postContactForm = async (formattedData) => {
  const { data } = await axios.post(
    "https://akgswo8ccs0kw8kckg8gg4c8.82.25.90.229.sslip.io/api/sticky-forms",
    formattedData, // Sending formattedData in the request body
    {
      headers: {
        "Content-Type": "application/json", // Ensure JSON content type
      },
    }
  );
  return data;
};
const StickyFrom = () => {
  const [isUserToken, setIsUserToken] = useState(
    !!localStorage.getItem("user-token")
  );

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("user-token");
    setIsUserToken(token ? true : false);
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    localStorage.setItem("user-token", JSON.stringify(encryptData(data)));
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsUserToken(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICEID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_ENQUERYTEMPLATEID, // Replace with your EmailJS Template ID
        data,
        import.meta.env.VITE_PUBLICID // Replace with your EmailJS Public Key
      )
      .then(() => console.log("Email sent successfully"))
      .catch((error) => alert("Error sending email: " + error.text));
    const formattedData = {
      data: {
        Email: data.email,
        Phone: data.PhoneNumber,
      },
    };
    // console.log("Formatted Data:", formattedData);
    postContactForm(formattedData);
    setLoading(false);
    reset();
  };

  return !isUserToken ? (
    <div className={`${styles.fromDiv} bg-white mx-auto`}>
      <div className="container md:px-40 p-4 mx-auto grid grid-cols-1 xl:grid-cols-12 xl:items-center  w-full gap-4">
        {/* Left Section - Contact Us (4 Columns) */}
        <div className="xl:col-span-4 w-full text-center xl:text-left">
          <h2 className="text-2xl font-semibold text-gray-700">
            Book Your Free Consultation
          </h2>
        </div>

        {/* Right Section - Inputs and Button (8 Columns) */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="xl:col-span-8 flex flex-col xl:flex-row w-full space-y-4 xl:space-y-0 xl:space-x-4 items-end"
        >
          {/* Phone Number Input */}
          <div className="relative flex-grow w-full">
            <input
              type="text"
              placeholder="Enter Phone Number"
              id="PhoneNumber"
              {...register("PhoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              className={`w-full bg-gray-100 bg-opacity-50 border ${
                errors.PhoneNumber ? "border-red-500" : "border-gray-300"
              } focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
            {errors.PhoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.PhoneNumber.message}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div className="relative flex-grow w-full">
            <input
              placeholder="Enter Email"
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className={`w-full bg-gray-100 bg-opacity-50  border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Call Me Button */}
          <div className="w-full xl:w-auto flex items-center">
            <button
              type="submit"
              className="text-white w-full xl:w-[180px] bg-[#000] border-0 py-3 px-8 focus:outline-none  text-lg flex justify-center items-center"
              disabled={isSubmitting || loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Call Me"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className={`${styles.NonFromDiv} bg-white mx-auto`}>
      <div className="container md:px-40 p-4 mx-auto grid grid-cols-1 xl:grid-cols-12 xl:items-center  w-full gap-4">
        {/* Left Section - Contact Us (4 Columns) */}
        <div className="xl:col-span-4 w-full text-center xl:text-left">
          <h2 className="text-2xl font-semibold ">
            Book Your Free Consultation
          </h2>
        </div>

        {/* Right Section - Inputs and Button (8 Columns) */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="xl:col-span-8 flex flex-col xl:flex-row w-full space-y-4 xl:space-y-0 xl:space-x-4 items-end"
        >
          {/* Phone Number Input */}
          <div className="relative flex-grow w-full">
            <input
              type="text"
              placeholder="Enter Phone Number"
              id="PhoneNumber"
              {...register("PhoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              className={`w-full bg-gray-100 bg-opacity-50 border ${
                errors.PhoneNumber ? "border-red-500" : "border-gray-300"
              } focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-2 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
            {errors.PhoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.PhoneNumber.message}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div className="relative flex-grow w-full">
            <input
              placeholder="Enter Email"
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className={`w-full bg-gray-100 bg-opacity-50 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-2 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Call Me Button */}
          <div className="w-full xl:w-auto flex items-center">
            <button
              type="submit"
              className="text-white w-full xl:w-[180px] bg-[#000] border-0 py-3 px-8 focus:outline-none text-lg flex justify-center items-center"
              disabled={isSubmitting || loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Call Me"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StickyFrom;
