import Right  from "./assets/601SakuraHome.jpg";
import Left from "./assets/811.jpg";
import styles from "./css/FeaturedProject.module.css";
import { MdOutlineArrowRight } from "react-icons/md";
import Project4 from "./Project4";
import Project5 from "./Poject5";
import Project3 from "./Project3";
import { Link } from "react-router-dom";

const FeaturedProject = () => {
  return (
    <>
      <div className="bg-[#e9ebeb]">
        <div className="container mx-auto pt-14 p-4 xl:px-80">
          <div className="pt-8 pb-16">
            <h2 className="text-2xl text-center font-bold ">
              Our Portfolio of Excellence
            </h2>
          </div>
          {/* Project 1 & 2 */}
          <div className="flex md:flex-row gap-8 mb-14 flex-col md:items-center md:justify-center">
            <div className="flex flex-col items-center">
              <div className={styles.LeftSuperParent}>
                <div className={styles.LeftParent}>
                  <img loading="lazy" src={Left} alt="" />
                  <div className={`${styles.LeftChild} p-12 bg-white`}>
                    <p className="text-sm pb-3 font-medium">811</p>
                    <div className="border-t-1 border-black w-[70px]"></div>
                    <p className="font-light py-3 text-sm">
                      811 is a 40sqm workspace designed using the 100-year-old
                      reclaimed Teak Wood salvaged from demolished structures of
                      Old Bombay built during the British Era.
                    </p>
                    <Link to={"/projects/811"}>
                      <div className="flex items-center hover:text-[#8E8E8E] hover:cursor-pointer">
                        <span className="text-sm">View Project</span>
                        <MdOutlineArrowRight
                          style={{
                            // marginLeft: "-8px",
                            fontSize: "20px",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className={styles.RightSuperParent}>
                <div className={styles.RightParent}>
                  <img loading="lazy" src={Right} alt="" />
                  <div className={`${styles.RightChild} p-12 bg-white`}>
                    <p className="text-sm pb-3 font-medium">601 Sakura Home</p>
                    <div className="border-t-1 border-black w-[70px]"></div>
                    <p className="font-light py-3 text-sm">
                      Stepping away from the hustle of the city, Sakura Home
                      aims to be a mental switch-off space. The home stands as a
                      testament to the fusion of design innovation and the
                      pursuit of tranquillity.
                    </p>
                    <Link to={"/projects/601-Sakura-Home"}>
                      <div className="flex items-center hover:text-[#8E8E8E] hover:cursor-pointer">
                        <span className="text-sm">View Project</span>
                        <MdOutlineArrowRight
                          style={{
                            // marginLeft: "-8px",
                            fontSize: "20px",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Project5 />
        <Project4 />
        <Project3 />
      </div>
    </>
  );
};
export default FeaturedProject;
