import EnqueryForm from "../General/Enquery";
import styles from "./css/HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className="bg-[#ffffff]">
      <section className="body-font container mx-auto p-4 xl:px-0 2xl:px-30">
        <div
          className={`${styles.HeroSection} flex md:px-5 pt-24 pb-12 md:flex-row flex-col items-center`}
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className={`title-font text-4xl ${styles.LandHeroheading} uppercase xl:text-7xl mb-4 font-medium`}
            >
              TASA in the <br /> news
            </h1>
            <p className={`mb-8 leading-relaxed ${styles.LandHerosubheading}`}>
              We are humbled to be covered by multiple distinguished publication
              houses in the field of architecture and design. This recognition
              validates our design philosophies and spreads awareness about soft
              minimalism and functional japandi aesthetics.
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#1b8dff] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Book Now
              </button>
            </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <EnqueryForm />
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
