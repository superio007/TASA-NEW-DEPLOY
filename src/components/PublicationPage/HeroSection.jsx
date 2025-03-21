import EnqueryForm from "../General/Enquery";
import styles from "./css/HeroSection.module.css";
const HeroSection = ({ apiRes }) => {
  return (
    <div className="bg-[#ffffff]">
      <section className="body-font container mx-auto p-4 xl:px-0 2xl:px-30">
        <div
          className={`${styles.HeroSection} flex md:px-5 pt-24 pb-12 md:flex-row flex-col items-center`}
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0">
            <h1
              className={`title-font text-4xl ${styles.LandHeroheading} uppercase xl:text-7xl mb-4 font-light`}
            >
              {apiRes.heading || "TASA in the news"}
            </h1>
            <p
              className={`md:mb-8 leading-relaxed ${styles.LandHerosubheading}`}
            >
              {apiRes.subHeading ||
                `We are humbled to be covered by multiple distinguished publication
              houses in the field of architecture and design. This recognition
              validates our design philosophies and spreads awareness about soft
              minimalism and functional japandi aesthetics.`}
            </p>
          </div>
          <div className="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <EnqueryForm />
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
