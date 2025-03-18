import React from "react";
import styles from "./css/AboutHeroSection.module.css";
const AboutHeroSection = () => {
  return (
    <>
      <div className={`${styles.bg}`}>
        <div className="flex justify-center items-center">
          <div className={`${styles.parent} container mx-auto xl:px-80`}>
            <div className={`${styles.child} bg-white p-4 md:px-12 md:py-18`}>
              <p className="text-lg pb-3 font-normal">About us</p>
              <div className="border-t-1 border-black w-[45px]"></div>
              <p className="font-light py-3 text-sm">
                TASA designs is a Mumbai based architectural practice that
                prioritises simplicity, warmth and practical sustainability as a
                part of its core design philosophy, thus ensuring that every
                project adheres to the principles of leaving a better earth
                behind and beyond ourselves.
              </p>
              <p className="font-light py-3 text-sm">
                We take a conscious effort to design spaces that respect their
                surroundings and expand the harmony between nature and the
                humans living in them
              </p>
              <p className="font-light py-3 text-sm">
                Obeying a decree to create aethetically calming dwellings with
                the use of natural light, wind and water bodies to enhance the
                cohabiting experience
              </p>
              <p className="font-light py-3 text-sm">
                Leading the charge of the philosophies set forth, the natural
                material choices of stone, metal, glass, plants & bio-based
                paints become a practicality
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHeroSection;
