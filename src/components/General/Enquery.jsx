import { useState } from "react";
import { set, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import axios from "axios";
const postContactForm = async (formattedData) => {
  const { data } = await axios.post(
    "http://akgswo8ccs0kw8kckg8gg4c8.82.25.90.229.sslip.io/api/enquery-forms",
    formattedData, // Sending formattedData in the request body
    {
      headers: {
        "Content-Type": "application/json", // Ensure JSON content type
      },
    }
  );
  return data;
};
const ProposalForm = ({ EnquerySubHeading, EnqueryHeading }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isThanks, setIsThanks] = useState(false);

  const onSubmit = (data) => {
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
        Name: data.FullName,
        Phone: data.Phone,
        Message: data.message,
      },
    };
    postContactForm(formattedData);
    reset();
    setIsThanks(true);
  };

  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center py-10 px-5 max-w-md mx-auto shadow-lg">
        <h2 className="text-xl text-black font-medium uppercase text-center">
          {EnqueryHeading}
        </h2>
        <p className="text-center mb-5 text-sm">{EnquerySubHeading}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input
            type="text"
            placeholder="Full Name*"
            {...register("FullName", {
              required: "Full Name is required",
            })}
            className="w-full p-2 mb-3 outline-none text-black"
          />
          {errors.FullName && (
            <span className="text-red-500">{errors.FullName.message}</span>
          )}

          <input
            type="number"
            placeholder="Phone*"
            {...register("Phone", {
              required: true,
              maxLength: 10,
              minLength: 10,
            })}
            className="w-full  p-2 mb-3 outline-none text-black"
          />
          {(errors.Phone?.type === "maxLength" ||
            errors.Phone?.type === "minLength") && (
            <span className="text-red-500">Phone number must be 10 digits</span>
          )}
          {errors.Phone?.type === "required" && (
            <span className="text-red-500">Phone number is required</span>
          )}

          <textarea
            placeholder="Type message here..."
            rows={4}
            {...register("message")}
            className="w-full p-2 mb-3 outline-none text-black resize-none"
          ></textarea>

          <div className="flex flex-col xl:flex-row">
            <button
              type="submit"
              className="bg-[#000000] text-white py-2 px-5 hover:cursor-pointer uppercase  transition duration-300"
            >
              Get Your Free Proposal
            </button>
          </div>
        </form>
      </div>
      {isThanks && (
        <div className="text-green-700 text-center py-4">
          <p>Thanks for your message! Our team will get back to you shortly.</p>
        </div>
      )}
    </>
  );
};

export default ProposalForm;
