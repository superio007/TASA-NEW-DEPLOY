import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
const postContactForm = async (formattedData) => {
  const { data } = await axios.post(
    "http://akgswo8ccs0kw8kckg8gg4c8.82.25.90.229.sslip.io/api/contact-forms",
    formattedData, // Sending formattedData in the request body
    {
      headers: {
        "Content-Type": "application/json", // Ensure JSON content type
      },
    }
  );
  return data;
};
const usePostContactForm = () => {
  return useMutation({
    mutationFn: postContactForm, // ✅ Correct way to use mutation function
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Form Submitted Successfully!",
        text: "Your contact form has been sent.",
        confirmButtonText: "OK",
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
        confirmButtonText: "OK",
      });
    },
  });
};
const Contact2 = ({ ContactUsHeading, ContactUsSubHeading }) => {
  const { mutate } = usePostContactForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_SERVICEID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_CONTACTTEMPLATEID, // Replace with your EmailJS Template ID
        data,
        import.meta.env.VITE_PUBLICID // Replace with your EmailJS Public Key
      )
      .then(() => console.log("Email sent successfully"))
      .catch((error) => alert("Error sending email: " + error.text));
    const formattedData = {
      data: {
        Name: data.name,
        Email: data.email,
        Message: data.message,
      },
    };
    mutate(formattedData);
    reset();
    // Handle form submission (e.g., send data to API)
  };
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container md:px-40 p-4 py-24 mx-auto flex flex-col-reverse md:flex-row  sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300  overflow-hidden sm:mr-10 p-2 flex flex-col md:gap-0 gap-10 md:flex-row items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="md:absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1376028680306!2d72.95325577125448!3d19.189191345570787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9c75ae9c327%3A0xf0d95826bfdc0f13!2sTASA%20Architects!5e0!3m2!1sen!2sus!4v1741863845636!5m2!1sen!2sus"
            // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            allowFullScreen
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6  shadow-md">
            <div className="lg:w-1/2 px-6">
              {/* <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2> */}
              <p className="font-light text-black pt-4">
                811, Opal Square, SG Barve Rd, opp. Rayla Devi Lake, Thane,
                Maharashtra 400604
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              {/* <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2> */}
              <a
                href="mailto:info@tasaarchitects.com"
                target="_blank"
                className="font-light text-black block pt-4"
              >
                info@tasaarchitects.com
              </a>
              <p className="font-light text-black pt-4">
                Tel:{" "}
                <a
                  href="tel:02246035650"
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  022 4603 5650
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mb-8 md:mb-0">
          <h2 className="text-gray-900 text-2xl  mb-1 uppercase title-font">
            {ContactUsHeading}
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            {ContactUsSubHeading}
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="text-white bg-black hover:cursor-pointer border-0 py-2 px-6 focus:outline-none  text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
