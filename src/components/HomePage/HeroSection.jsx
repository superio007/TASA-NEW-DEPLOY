import styles from "./css/HeroSection.module.css";
import { Parallax } from "react-scroll-parallax";
const HeroSection = () => {
    return (
      <>
        <div className={`${styles.bg}`}>
          <Parallax translateY={["-40%", "50%"]}>
            <div className="flex justify-center items-center min-h-[80vh]">
              <h1 className="text-9xl text-center text-white">
                TASA
              </h1>
            </div>
          </Parallax>
        </div>
      </>
    );
}
export default HeroSection;