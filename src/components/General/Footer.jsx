import styles from "./css/Footer.module.css";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [currentIndex, setCurrentIndex] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);
  return (
    <>
      <div className="bg-[#cccece] p-4 relative bottom-0 ">
        <div className="hidden md:block container mx-auto p-4 2xl:px-80">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <Link to={"/"} onClick={() => setCurrentIndex(!currentIndex)}>
                <span className={styles.logo}>TASA</span>
                <span className={styles.sublogo}>designs</span>
              </Link>
            </div>
            <div className="flex gap-6 items-center">
              <Link
                target="_blank"
                to={"https://in.linkedin.com/company/tasaarchitects"}
              >
                <FaLinkedin className={styles.social} />
              </Link>
              <Link
                target="_blank"
                to={"https://instagram.com/tasaarchitects/"}
              >
                <FaInstagram className={styles.social} />
              </Link>
              <Link
                target="_blank"
                to={"https://www.facebook.com/tasaarchitects"}
              >
                <FaFacebookF className={styles.social} />
              </Link>
              <Link target="_blank" to={"https://x.com/tasaarchitects/"}>
                <FaXTwitter className={styles.social} />
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:flex-row flex-col items-center md:gap-4 mt-4">
            <Link
              to={"/publications"}
              onClick={() => setCurrentIndex(!currentIndex)}
            >
              <p className="text-white hover:rounded-none px-1 py-3 rounded-3xl uppercase">
                Publications
              </p>
            </Link>
            <Link
              to={"/projects"}
              onClick={() => setCurrentIndex(!currentIndex)}
            >
              <p className="text-white hover:rounded-none p-2 rounded-2xl uppercase">
                Projects
              </p>
            </Link>
            <Link to={"/about"} onClick={() => setCurrentIndex(!currentIndex)}>
              <p className="text-white hover:rounded-none p-2 rounded-2xl uppercase">
                Our Story
              </p>
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setCurrentIndex(!currentIndex)}
            >
              <p className="text-white hover:rounded-none p-2 rounded-2xl uppercase">
                Contact
              </p>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-sm text-white">
              © <span>{year}</span> TASA Designs. All rights reserved.
            </p>
            <p className="text-sm text-white">
              Designed by{" "}
              <a
                href="https://www.esycommerce.com/"
                target="_blank"
                rel="noreferrer"
              >
                EsyCommerce
              </a>
            </p>
          </div>
        </div>
        <div className="md:hidden container mx-auto p-4 2xl:px-80">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <Link to={"/"} onClick={() => setCurrentIndex(!currentIndex)}>
                <span className={styles.logo}>TASA</span>
                <span className={styles.sublogo}>designs</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center mt-4 text-center">
            <Link
              to={"/publications"}
              onClick={() => setCurrentIndex(!currentIndex)}
            >
              <p className="text-white hover:rounded-none px-1 py-3 rounded-3xl uppercase">
                Publications
              </p>
            </Link>
            <Link
              to={"/projects"}
              onClick={() => setCurrentIndex(!currentIndex)}
            >
              <p className="text-white hover:rounded-none p-2 rounded-2xl uppercase">
                Projects
              </p>
            </Link>
            <Link to={"/about"} onClick={() => setCurrentIndex(!currentIndex)}>
              <p className="text-white hover:rounded-none p-2 rounded-2xl uppercase">
                Our Story
              </p>
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setCurrentIndex(!currentIndex)}
            >
              <p className="text-white hover:rounded-none p-2 rounded-2xl uppercase">
                Contact
              </p>
            </Link>
            {/* <div className="border-white border-r-2 h-[160px]"></div> */}
          </div>
          <div className="flex gap-8 justify-center mt-4">
            <Link
              target="_blank"
              to={"https://in.linkedin.com/company/tasaarchitects"}
            >
              <FaLinkedin className={styles.social} />
            </Link>
            <Link target="_blank" to={"https://instagram.com/tasaarchitects/"}>
              <FaInstagram className={styles.social} />
            </Link>
            <Link
              target="_blank"
              to={"https://www.facebook.com/tasaarchitects"}
            >
              <FaFacebookF className={styles.social} />
            </Link>
            <Link target="_blank" to={"https://x.com/tasaarchitects/"}>
              <FaXTwitter className={styles.social} />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-sm text-white">
              © <span>{year}</span> TASA Designs. All rights reserved.
            </p>
            <p className="text-sm text-white">
              Designed by{" "}
              <a
                href="https://www.esycommerce.com/"
                target="_blank"
                rel="noreferrer"
              >
                EsyCommerce
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
