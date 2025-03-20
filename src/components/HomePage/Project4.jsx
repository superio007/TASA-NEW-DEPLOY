import Project4 from "./assets/AmberLakeResort.png";
import styles from "./css/FeaturedProject.module.css";
import { Link } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";
const Project = () => {
  function truncateText(text, limit = 200) {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  }
  return (
    <>
      <div className="container mx-auto pt-7 md:pb-32 pb-16 p-4 xl:px-35">
        {/* Project 4 */}
        <div className="relative">
          <img
            loading="lazy"
            className={styles.Project4Img}
            src={Project4}
            alt="Project 5"
          />
          <div className="flex justify-end items-center">
            <div className={`${styles.Project4} bg-white px-12 py-18`}>
              <p className="text-sm pb-3 font-medium">Amber Lake Resort</p>
              <div className="border-t-1 border-black w-[70px]"></div>
              <p className="font-light py-3 text-sm">
                {truncateText(
                  "Amber Lake Resort is a 3BHK apartment designed for a family of 4. The design is inspired by the Japanese culture of minimalism and the use of natural materials.",
                  200
                )}
              </p>
              <Link to={"/projects/Amber-Lake-Resort"}>
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
    </>
  );
};
export default Project;
