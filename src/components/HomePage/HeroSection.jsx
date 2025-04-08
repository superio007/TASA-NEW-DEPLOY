import styles from "./css/HeroSection.module.css";
import { Parallax } from "react-scroll-parallax";
import HomeImage from "../../assets/HomePage/Home.jpg";
const HeroSection = ({ apiRes }) => {
  console.log("apiRes", apiRes);
  return (
    <>
      <div
        className={`${styles.bg}`}
        style={{ backgroundImage: `url(${apiRes.BackgroundImage.formats.large.url})` }}
        // style={{
        //   backgroundImage:`url(${HomeImage})`
        // }}
      >
        <Parallax translateY={["-40%", "50%"]}>
          <div className="flex justify-center items-center min-h-[60vh]">
            <h1 className="text-9xl font-light text-center text-white">
              {apiRes.Heading || TASA}
            </h1>
          </div>
        </Parallax>
      </div>
    </>
  );
};
export default HeroSection;