import React from "react";
import { FaStar } from "react-icons/fa"; // Import star icons
import styles from "./css/BrandSlider.module.css"; // Import CSS
import { IKImage } from "imagekitio-react";
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
                <IKImage
                  urlEndpoint={import.meta.env.VITE_IMAGEKIT_BASE_URL}
                  path={brand.src
                    .split("https://ik.imagekit.io/2cdga3aqf/TasaUploads/")
                    .join("/")}
                  loading="lazy"
                  transformation={[{ progressive: true, quality: "auto" }]}
                  alt={brand.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
