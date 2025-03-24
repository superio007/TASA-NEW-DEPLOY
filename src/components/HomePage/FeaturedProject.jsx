import Right from "./assets/601SakuraHome.jpg";
import Left from "./assets/811.jpg";
import styles from "./css/FeaturedProject.module.css";
import { MdOutlineArrowRight } from "react-icons/md";
import Project4 from "./Project4";
import Project5 from "./Poject5";
import Project3 from "./Project3";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProjectsContext from "../../context/ProjectContext";
const FeaturedProject = ({}) => {
  const apiRes = useContext(ProjectsContext);
  function truncateText(text, limit = 200) {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  }
  return (
    <>
      <div className="bg-[#e9ebeb]">
        <div className="container mx-auto pt-14 p-4 xl:px-80">
          <div className="pt-8 pb-16">
            <h2 className="text-2xl text-center">Our Projects</h2>
          </div>
          {/* Project 1 & 2 */}
          <div className="hidden md:flex md:flex-row gap-8 mb-14 flex-col md:items-center md:justify-center">
            <div className="flex flex-col items-center">
              <div className={styles.LeftSuperParent}>
                <div className={styles.LeftParent}>
                  <img
                    loading="lazy"
                    src={apiRes[0].ProfilePicture.url || Left}
                    alt={apiRes[0].ProfilePicture.alternativeText || "Project"}
                  />
                  <div className={`${styles.LeftChild} p-12 bg-white`}>
                    <p className="text-sm pb-3 font-medium">
                      {apiRes[0].ProjectName || "811"}
                    </p>
                    <div className="border-t-1 border-black w-[70px]"></div>
                    <p className="font-light py-3 text-sm">
                      {truncateText(apiRes[0].ProjectDescription, 200) ||
                        truncateText(
                          "811 is a 40sqm workspace designed using the 100-year-old reclaimed Teak Wood salvaged from demolished structures of Old Bombay built during the British Era.",
                          200
                        )}
                    </p>
                    <Link to={`/projects/${apiRes[0].ProjectName}`}>
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
                  <img
                    loading="lazy"
                    src={apiRes[1].ProfilePicture.url || Right}
                    alt={apiRes[1].ProfilePicture.alternativeText || "Project"}
                  />
                  <div className={`${styles.RightChild} p-12 bg-white`}>
                    <p className="text-sm pb-3 font-medium">{apiRes[1].ProjectName|| "601 Sakura Home"}</p>
                    <div className="border-t-1 border-black w-[70px]"></div>
                    <p className="font-light py-3 text-sm">
                      {truncateText(apiRes[1].ProjectDescription, 200) ||
                        truncateText(
                          "601 Sakura Home is a 3BHK apartment designed for a family of 4. The design is inspired by the Japanese culture of minimalism and the use of natural materials.",
                          200
                        )}
                    </p>
                    <Link
                      to={`/projects/${apiRes[1].ProjectName.split(" ").join(
                        "-"
                      )}`}
                    >
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
          <div className="md:hidden flex flex-col items-center gap-8">
            <div className="flex flex-col items-center">
              <div>
                <img
                  loading="lazy"
                  src={apiRes[0].ProfilePicture.url || Left}
                  alt={apiRes[0].ProfilePicture.alternativeText || "Project"}
                  className="w-full h-auto"
                />

                {/* Project Info */}
                <div className="p-12 bg-white">
                  <p className="text-sm pb-3 font-medium">
                    {apiRes[0].ProjectName || 811}
                  </p>
                  <div className="border-t-1 border-black w-[70px]"></div>
                  <p className="font-light py-3 text-sm">
                    {truncateText(apiRes[0].ProjectDescription, 200) ||
                      truncateText(
                        "811 is a 40sqm workspace designed using the 100-year-old reclaimed Teak Wood salvaged from demolished structures of Old Bombay built during the British Era.",
                        200
                      )}
                  </p>
                  <Link to={`/projects/${apiRes[0].ProjectName}`}>
                    <div className="flex items-center hover:text-[#8E8E8E] hover:cursor-pointer">
                      <span className="text-sm">View Project</span>
                      <MdOutlineArrowRight
                        style={{
                          fontSize: "20px",
                        }}
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div id="image2" className="mt-14">
                {/* Image Container */}
                <img
                  loading="lazy"
                  src={apiRes[1].ProfilePicture.url || Right}
                  alt={apiRes[1].ProfilePicture.alternativeText || "Project"}
                  className="w-full h-auto"
                />

                {/* Content Container */}
                <div className="p-12 bg-white">
                  <p className="text-sm pb-3 font-medium">
                    {apiRes[1].ProjectName || "601 Sakura Home"}
                  </p>
                  <div className="border-t-1 border-black w-[70px]"></div>
                  <p className="font-light py-3 text-sm">
                    {truncateText(apiRes[1].ProjectDescription, 200) ||
                      truncateText(
                        `601 Sakura Home is a 3BHK apartment designed for a family of
                    4. The design is inspired by the Japanese culture of
                    minimalism and the use of natural materials.`,
                        200
                      )}
                  </p>
                  <Link
                    to={`/projects/${apiRes[1].ProjectName.split(" ").join(
                      "-"
                    )}`}
                  >
                    <div className="flex items-center hover:text-[#8E8E8E] hover:cursor-pointer">
                      <span className="text-sm">View Project</span>
                      <MdOutlineArrowRight style={{ fontSize: "20px" }} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Project5 apiRes={apiRes[2]} />
        <Project4 apiRes={apiRes[3]} />
        <Project3 apiRes={apiRes[4]} />
      </div>
    </>
  );
};
export default FeaturedProject;
