import Project5 from "../../assets/HomePage/SailorAbode.png";
import styles from "./css/FeaturedProject.module.css";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
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
      <div className="container mx-auto pt-7 pb-16 p-4 xl:px-65">
        {/* Project 5 */}
        <div>
          <div className="md:relative md:min-h-[650px]">
            <IKImage
              urlEndpoint={import.meta.env.VITE_IMAGEKIT_BASE_URL}
              path={apiRes.ProfilePicture.formats.large.url
                .split("https://ik.imagekit.io/2cdga3aqf/TasaUploads/")
                .join("/")}
              loading="lazy"
              transformation={[{ progressive: true, quality: "auto" }]}
              alt={apiRes.ProfilePicture.alternativeText || "Project 3"}
            />
            <div className="flex justify-end md:absolute right-15 bottom-0 items-center">
              <div className={`${styles.Project5} bg-white px-12 py-18`}>
                <p className="text-sm pb-3 font-medium">
                  {apiRes.ProjectName || "Sailor’s Abode"}
                </p>
                <div className="border-t-1 border-black w-[70px]"></div>
                <p className="font-light py-3 text-sm">
                  {truncateText(apiRes.ProjectDescription, 200) ||
                    truncateText(
                      "Sailor’s Abode is a 3BHK apartment designed for a family of 4. The design is inspired by the Japanese culture of minimalism and the use of natural materials.",
                      200
                    )}
                </p>
                <Link
                  to={`/projects/${apiRes.ProjectName.split(" ").join("-")}`}
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
    </>
  );
};
export default Project;
