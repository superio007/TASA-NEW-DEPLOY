import Project4 from "./assets/project4.avif";
import styles from "./css/FeaturedProject.module.css";
import { Link } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";
const Project = () => {
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
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you. ​
              </p>
              <p className="font-light py-3 text-sm">
                This is a great space to write long text about your company and
                your services. You can use this space to go into a little more
                detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out and
                show your visitors who you are.
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
