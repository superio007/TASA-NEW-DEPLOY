import ContactBack from "./assets/ContactBack.avif";
import styles from "./css/Contact.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Contact = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto pt-14 pb-32 p-4 xl:px-80">
          <div className="p-8">
            <h1 className="font-bold text-2xl xl:text-4xl text-center">Stay In Touch</h1>
          </div>
          <div className={``}>
            <div className={`${styles.parent} w-[980px] relative  h-[650px]`}>
              <img
                src={ContactBack}
                className={`${styles.contactBack}`}
                alt=""
              />
              <div className={`${styles.child} bg-white z-10 px-14 py-16`}>
                <div className={styles.innerChild}>
                  <div className="pb-4">
                    <p className="text-xl text-black font-bold">TASA</p>
                  </div>
                  <div className="border-t-2 border-black w-[80px]"></div>
                  <div className="">
                    <p className="font-light text-black pt-4">
                      811, Opal Square, SG Barve Rd, opp. Rayla Devi Lake,
                      Thane, Maharashtra 400604
                    </p>
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
                  <div className="pt-8 flex flex-row items-center gap-6">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/tasaarchitects/"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://www.instagram.com/tasaarchitects/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiInstagramFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
