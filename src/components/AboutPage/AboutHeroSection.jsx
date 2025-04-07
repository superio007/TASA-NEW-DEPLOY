import React from "react";
import styles from "./css/AboutHeroSection.module.css";
import AboutImage from "../../assets/AboutPage/About.jpg";
const AboutHeroSection = ({ description, heading }) => {
  return { description, heading } ? (
    <>
      <div
        className={`${styles.bg}`}
        style={{
          backgroundImage: `url(${
            heading.BackgroundImage.formats.large.url || AboutImage
          })`,
        }}
      >
        <div className="flex justify-center items-center">
          <div className={`${styles.parent} container mx-auto xl:px-80`}>
            <div className={`${styles.child} bg-white p-4 md:px-12 md:py-18`}>
              <p className="text-lg pb-3 font-normal">{heading.Heading}</p>
              <div className="border-t-1 border-black w-[45px]"></div>
              {description.map((item, index) => (
                <p key={index} className="font-light py-3 text-sm">
                  {item.description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <p>No kiran available</p>
  );
};

export default AboutHeroSection;
