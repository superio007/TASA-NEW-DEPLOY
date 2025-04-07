import project3 from "../../assets/HomePage/VillaKochil.png";
import styles from "./css/FeaturedProject.module.css";
import { Link } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";
import { IKImage } from "imagekitio-react";
const Project = ({ apiRes }) => {
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
          <div className={`${styles.project3}  bg-white  py-10 px-12`}>
            <p className="text-sm pb-3 font-medium">
              {apiRes.ProjectName || "Villa Kochi"}
            </p>
            <div className="border-t-1 border-black w-[70px]"></div>
            <p className="font-light py-3 text-sm">
              {truncateText(apiRes.ProjectDescription, 200) ||
                truncateText(
                  "Villa Kochi is a 3BHK apartment designed for a family of 4. The design is inspired by the Japanese culture of minimalism and the use of natural materials.",
                  200
                )}
            </p>
            <Link to={`/projects/${apiRes.ProjectName.split(" ").join("-")}`}>
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
            <IKImage
              urlEndpoint={import.meta.env.VITE_IMAGEKIT_BASE_URL}
              path={apiRes.ProfilePicture.formats.large.url
                .split("https://ik.imagekit.io/2cdga3aqf/TasaUploads/")
                .join("/")}
              loading="lazy"
              className={`${styles.project3Img}`}
              transformation={[{ progressive: true, quality: "auto" }]}
              alt={apiRes.ProfilePicture.alternativeText || "Project 5"}
            />
          </div>
        </div>
      </div>
      <div className="md:hidden container mx-auto pt-7 pb-16 p-4 xl:px-35">
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGEKIT_BASE_URL}
          path={apiRes.ProfilePicture.formats.large.url
            .split("https://ik.imagekit.io/2cdga3aqf/TasaUploads/")
            .join("/")}
          loading="lazy"
          transformation={[{ progressive: true, quality: "auto" }]}
          alt={apiRes.ProfilePicture.alternativeText || "Project 5"}
        />
        <div className={`bg-white p-10 `}>
          <p className="text-sm pb-3 font-medium">
            {apiRes.ProjectName || "Villa Kochi"}
          </p>
          <div className="border-t-1 border-black w-[70px]"></div>
          <p className="font-light py-3 text-sm">
            {truncateText(apiRes.ProjectDescription, 200) ||
              truncateText(
                "Villa Kochi is a 3BHK apartment designed for a family of 4. The design is inspired by the Japanese culture of minimalism and the use of natural materials.",
                200
              )}
          </p>
          <Link to={`/projects/${apiRes.ProjectName.split(" ").join("-")}`}>
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
