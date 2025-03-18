import project3 from "./assets/project3.avif";
import styles from "./css/FeaturedProject.module.css";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";
const Project = () => {
  return (
    <>
      <div className="container mx-auto pt-7 md:pb-60 pb-16 p-4 xl:px-35">
        <div className="relative">
          <div
            className={`${styles.project3} border-black border-2 py-10 px-34`}
          >
            <p className="text-sm pb-3 font-medium">Villa Kochi</p>
            <div className="border-t-1 border-black w-[70px]"></div>
            <p className="font-light py-3 text-sm">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you. ​
            </p>
            <p className="font-light py-3 text-sm">
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
            <NavLink>
              <div className="flex items-center hover:text-[#8E8E8E] hover:cursor-pointer">
                <span className="text-sm">View Project</span>
                <MdOutlineArrowRight
                  style={{
                    // marginLeft: "-8px",
                    fontSize: "20px",
                  }}
                />
              </div>
            </NavLink>
          </div>
          <div>
            <img className={`${styles.project3Img}`} src={project3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
