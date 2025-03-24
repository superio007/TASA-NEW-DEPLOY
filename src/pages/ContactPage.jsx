import Contact from "../components/contactPage/Contact";
const ContactPage = ({ ContactUsHeading, ContactUsSubHeading }) => {
  return (
    <>
      <Contact
        ContactUsHeading={ContactUsHeading}
        ContactUsSubHeading={ContactUsSubHeading}
      />
    </>
  );
};
export default ContactPage;
