import { NavLink , Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./css/Navbar.module.css";
import StickyFrom from "./StickyFrom"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }

    // Clean up function to reset when the component is unmounted or `isMenuOpen` changes
    return () => {
      document.body.style.overflowY = "visible";
    };
  }, [isMenuOpen]); 
  return (
    <>
      <div className="bg-[#ffffff] border-b-2 border-[#b8b8b8]">
        <div className="container mx-auto p-4 xl:px-0 2xl:px-80">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
                <span className={styles.logo}>TASA</span>
                <span className={styles.sublogo}>designs</span>
              </Link>
            </div>
            <div className="hidden xl:flex flex-row gap-8 items-center">
              <NavLink to={"/projects"}>
                <p className="  hover:rounded-none p-2 rounded-2xl uppercase">
                  Projects
                </p>
              </NavLink>
              <NavLink to={"/publications"}>
                <p className="  hover:rounded-none px-1 py-3 rounded-3xl uppercase">
                  Publications
                </p>
              </NavLink>
              <NavLink to={"/about"}>
                <p className="  hover:rounded-none p-2 rounded-2xl uppercase">
                  Our Story
                </p>
              </NavLink>
              <NavLink to={"/contact"}>
                <p className="  hover:rounded-none p-2 rounded-2xl uppercase">
                  Contact
                </p>
              </NavLink>
            </div>
            {/* mobile menu btn */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="relative w-10 h-10 flex items-end justify-start rounded-md focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  className="relative w-6 h-6 flex flex-col justify-between"
                >
                  {/* Top Line */}
                  <motion.span
                    className="absolute w-6 h-0.5 bg-gray-500 rounded"
                    variants={{
                      closed: { rotate: 0, y: -6 },
                      open: { rotate: 45, y: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Middle Line */}
                  <motion.span
                    className="absolute w-6 h-0.5 bg-gray-500 rounded"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Bottom Line */}
                  <motion.span
                    className="absolute w-6 h-0.5 bg-gray-500 rounded"
                    variants={{
                      closed: { rotate: 0, y: 6 },
                      open: { rotate: -45, y: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu (Toggled) */}
      <div
        id="mobile-menu"
        className={`xl:hidden ${styles.mobileMenuNav} ${
          isMenuOpen ? "block" : "hidden"
        } p-4 bg-white xl:px-10 flex flex-col justify-between min-h-screen`}
      >
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col justify-center text-center gap-6">
            <NavLink to={"/projects"} onClick={() => setIsMenuOpen(false)}>
              <p className="  hover:rounded-none p-2 rounded-2xl uppercase">
                Projects
              </p>
            </NavLink>
            <NavLink to={"/publications"} onClick={() => setIsMenuOpen(false)}>
              <p className="  hover:rounded-none p-2 rounded-2xl uppercase">
                Publications
              </p>
            </NavLink>
            <NavLink to={"/about"} onClick={() => setIsMenuOpen(false)}>
              <p className="  hover:rounded-none p-2 rounded-2xl uppercase">
                Our Story
              </p>
            </NavLink>
            <NavLink to={"/contact"} onClick={() => setIsMenuOpen(false)}>
              <p className="  hover:rounded-none p-2 rounded-2xl uppercase">
                Contact
              </p>
            </NavLink>
          </div>
          <div>
            <StickyFrom />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
