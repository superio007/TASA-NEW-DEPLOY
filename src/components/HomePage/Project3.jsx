import project3 from "./assets/VillaKochil.png";
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
      <div className="hidden md:block container mx-auto md:pb-60 pb-16 pt-36 p-4 xl:px-35">
        <div className="relative">
          <div
            className={`${styles.project3} md:bg-[transparent] bg-white md:border-black md:border-2 py-10 px-34`}
          >
            <p className="text-sm pb-3 font-medium">Villa Kochi</p>
            <div className="border-t-1 border-black w-[70px]"></div>
            <p className="font-light py-3 text-sm">
              {truncateText(
                "Villa Kochi is a 3BHK apartment designed for a family of 4. The design is inspired by the Japanese culture of minimalism and the use of natural materials.",
                200
              )}
            </p>
            <Link to={"/projects/Villa-Kochi"}>
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
          <div>
            <img
              loading="lazy"
              className={`${styles.project3Img}`}
              src={project3}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="md:hidden container mx-auto pt-7 pb-16 p-4 xl:px-35">
        <img src={project3} alt="" />
        <div
          className={`bg-white p-10 `}
        >
          <p className="text-sm pb-3 font-medium">Villa Kochi</p>
          <div className="border-t-1 border-black w-[70px]"></div>
          <p className="font-light py-3 text-sm">
            {truncateText(
              "Villa Kochi is a 3BHK apartment designed for a family of 4. The design is inspired by the Japanese culture of minimalism and the use of natural materials.",
              200
            )}
          </p>
          <Link to={"/projects/Villa-Kochi"}>
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
    </>
  );
};
export default Project;
