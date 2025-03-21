import React from "react";
import { FaStar } from "react-icons/fa"; // Import star icons
import styles from "./css/BrandSlider.module.css"; // Import CSS

let BrandLogos = [];
const BrandSlider = ({ apiRes }) => {
  apiRes.PublicationsLogos.map((logo) => {
    BrandLogos.push({
      src: logo.url,
      alt: logo.alternativeText,
    });
  })
  return (
    <div className={styles.brandCouterContainer}>
      <div className={styles.brandSliderContainer}>
        <div className={styles.headingContent}>
          <span className={styles.headingText}>{apiRes.Title}</span>
          <div className={`${styles.stars}`}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={styles.starIcon} />
            ))}
          </div>
        </div>

        {/* Scrolling Brand Logos */}
        <div className={styles.brandSlider}>
          <div className={styles.sliderTrack}>
            {BrandLogos.map((brand, index) => (
              <div className={styles.slide} key={index}>
                <img loading="lazy" src={brand.src} alt={brand.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
