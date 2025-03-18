import React from "react";
import { FaStar } from "react-icons/fa"; // Import star icons
import styles from "./css/BrandSlider.module.css"; // Import CSS

const brands = {
  title: "As Seen On",
  brandLogos: [
    {
      src: "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290895/architecturalDigest_dcsbuf.png",
      alt: "architecturalDigest",
    },
    {
      src: "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290894/deZeen_vsex2l.webp",
      alt: "deZeen",
    },
    {
      src: "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290893/DesignPataki_lyoitu.png",
      alt: "DesignPataki",
    },
    {
      src: "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290895/thehindu-logo_nckjjl.svg",
      alt: "thehindu-logo",
    },
    {
      src: "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290894/rethinking_hbgeia.webp",
      alt: "rethinking",
    },
    {
      src: "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290895/architecturalDigest_dcsbuf.png",
      alt: "architecturalDigest",
    },
    {
      src: "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290894/deZeen_vsex2l.webp",
      alt: "deZeen",
    },
    {
      src: "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290893/DesignPataki_lyoitu.png",
      alt: "DesignPataki",
    },
    {
      src: "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290895/thehindu-logo_nckjjl.svg",
      alt: "thehindu-logo",
    },
    {
      src: "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290894/rethinking_hbgeia.webp",
      alt: "rethinking",
    },
  ],
};

const BrandSlider = () => {
  return (
    <div className={styles.brandCouterContainer}>
      <div className={styles.brandSliderContainer}>
        <div className={styles.headingContent}>
          <span className={styles.headingText}>{brands.title}</span>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={styles.starIcon} />
            ))}
          </div>
        </div>

        {/* Scrolling Brand Logos */}
        <div className={styles.brandSlider}>
          <div className={styles.sliderTrack}>
            {[...brands.brandLogos, ...brands.brandLogos].map(
              (brand, index) => (
                <div className={styles.slide} key={index}>
                  <img loading="lazy" src={brand.src} alt={brand.alt} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
