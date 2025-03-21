import React from "react";
import styles from "./css/PublicationHeroSection.module.css";
import { Parallax } from "react-scroll-parallax";
import BrandSlider from "./BrandSlider";
import HeroSection from "./HeroSection";

function PublicationHeroSection({ apiRes, slider }) {
  return (
    // <div className={`${styles.bg}`}>
    //   <Parallax translateY={["-40%", "50%"]}>
    //     <div className="flex justify-center p-4 items-center min-h-[80vh]">
    //       <h1 className=" text-9xl text-center text-white">Our Appearences</h1>
    //     </div>
    //   </Parallax>
    // </div>
    <>
      <HeroSection apiRes={apiRes} />
      {/* slider */}
      <div className="bg-white container mx-auto p-4 xl:px-20">
        <BrandSlider apiRes={slider}/>
      </div>
    </>
  );
}

export default PublicationHeroSection;
