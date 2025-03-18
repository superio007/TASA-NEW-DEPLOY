import React from "react";
import { NavLink } from "react-router-dom";
import Left from "./assets/TASAAR.webp";
import styles from "./css/PublicationsCards.module.css";
import Logo from "./assets/deZeen.png";
import { MdOutlineArrowRight } from "react-icons/md";
function PublicationsCards() {
  let publication = [
    {
      ArticleLogo:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290895/architecturalDigest_dcsbuf.png",
      ArticleTitle:
        "This Mumbai office adapts Japandi design to the Indian context",
      ArticalBack:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290895/TASAAR_krxsut.jpg",
      ArticleLink:
        "https://www.architecturaldigest.in/story/this-mumbai-office-adapts-japandi-design-to-the-indian-context/",
      ArticleDescription: `“As an architect, I was looking for a style and strong
                    foundation that would define my work—serving as an
                    architectural signature in everything I built,” recalls
                    Tanzeem Sarguroh, when looking back at how she found a way
                    to blend Japandi (Japanese-Scandinavian)”`,
    },
    {
      ArticleLogo:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290894/deZeen_vsex2l.webp",
      ArticleTitle:
        "Tasa Designs has created a workspace in India that balances form, function and simplicity.",
      ArticalBack:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290902/DazeenBack_yn1fak.jpg",
      ArticleLink: "https://www.dezeen.com/awards/2022/longlists/811/",
      ArticleDescription: `The project is a 40 square metre space designed with a Japandi aesthetic to align with objectives of minimalism and practical sustainability.
An open layout was adopted for working with natural elements and best use of daylight, and was constructed with materials including 100-year-old reclaimed teak wood salvaged from demolished structures of Old Bombay built during the British Era.`,
    },
    {
      ArticleLogo:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290893/DesignPataki_lyoitu.png",
      ArticleTitle:
        "Three Contemporary Workspaces In India That Champion Colour And Texture",
      ArticalBack:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290895/TASAAR_krxsut.jpg",
      ArticleLink:
        "https://www.designpataki.com/three-contemporary-workspaces-in-india-that-champion-colour-and-texture/",
      ArticleDescription: `As work-life boundaries have gotten fuzzier, it has led to an increase in expectations for comfort and flexibility in the workplace. “Flexibility is key for employee retention, productivity, and quality of life – one size doesn’t fit all – and hybrid work environments that encourage both the digital and the physical workplace are in demand, and designers are adapting to seamlessly move between the two!”, said Cindy Allen, Editor-in-Chief at Interior Design Magazine. The outcome is chic, contemporary and clean, with the right amount of cosy across the realm of office design.”`,
    },
    {
      ArticleLogo:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290895/thehindu-logo_nckjjl.svg",
      ArticleTitle:
        "Channel your energy in the Year of the Wood Snake to create calming spaces",
      ArticalBack:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290895/TASAAR_krxsut.jpg",
      ArticleLink:
        "https://www.thehindu.com/life-and-style/homes-and-gardens/channel-your-energy-in-the-year-of-the-wood-snake-to-create-calming-spaces/article69104467.ece",
      ArticleDescription: `The mystical serpent of the Chinese zodiac slithers into 2025, bringing a transformative Year of the Wood Snake that promises more strategic moves than a chess grandmaster’s playbook.
Rooted in a 60-year cyclical calendar combining 12 zodiac animals and five elemental forces, the 2025 Yin Wood Snake represents a nuanced dance of wisdom and adaptability. Unlike the rigid Yang Wood Dragon of 2024, this year embodies a ‘small green snake’ capable of calculated, diplomatic maneuvers.`,
    },
    {
      ArticleLogo:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290895/architecturalDigest_dcsbuf.png",
      ArticleTitle:
        "AD Small Spaces: 5 compact offices that prove limited space is never a constraint",
      ArticalBack:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290895/TASAAR_krxsut.jpg",
      ArticleLink:
        "https://www.architecturaldigest.in/story/ad-small-spaces-5-compact-offices-that-prove-limited-space-is-never-a-constraint/",
      ArticleDescription: `Designing small spaces in an efficient yet aesthetically pleasing style may seem like a daunting task, but not for the designers of these projects. In this collection of compact offices taken from the AD archives, the designers put their best foot forward to showcase unique design styles and maximise the functionality of a small space.`,
    },
    {
      ArticleLogo:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290894/rethinking_hbgeia.webp",
      ArticleTitle: "811 by TASA designs",
      ArticalBack:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290894/TAsa2_ljup6b.jpg",
      ArticleLink:
        "https://www.re-thinkingthefuture.com/residentail-interior-design/8837-811-by-tasa-designs/",
      ArticleDescription: `The use of non-natural products is skyrocketing with their innovations and versatility, and the short-term incentives for the end-users to choose natural materials over them are on a steep decline. The reasons may range from inconvenient availability to higher costs.
With 40sqm of space, it was challenging to fit our ambitious requirements that included a powder bathroom, a pantry, some storage, all the workstations and a meeting room/cabin. Additionally, a lounge area for us to just sit and do nothing, an attempt at bringing some hygge to the space.`,
    },
    {
      ArticleLogo:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290895/architecturalDigest_dcsbuf.png",
      ArticleTitle:
        "5 minimalist workspaces from the AD archives that are “very demure, very mindful”",
      ArticalBack:
        "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742290895/TASAAR_krxsut.jpg",
      ArticleLink:
        "https://www.architecturaldigest.in/story/5-minimalist-workspaces-from-the-ad-archives-that-are-very-demure-very-mindful/",
      ArticleDescription: `Warm neutrals, unostentatious details, and timeless elegance—these minimalist workspaces from the AD archives are architectural personifications of the “very demure, very mindful” TikTok phenomenon by beauty influencer Jools Lebron; perfect for those of you who don’t come to work with a green cut-crease.`,
    },
  ];
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;

    let truncated = text.slice(0, maxLength);

    // Ensure we don't cut off in the middle of a word
    let lastSpace = truncated.lastIndexOf(" ");
    if (lastSpace > 0) {
      truncated = truncated.slice(0, lastSpace);
    }

    return truncated + "...";
  }
  // console.log(publication.length)
  return (
    <>
      <div className="bg-[#e9ebeb]">
        <div className="hidden md:block container mx-auto md:pb-28 p-4 xl:px-80">
          {publication.map((item, index) => (
            <div key={index} className="flex pt-18 flex-col items-center">
              <div className={styles.LeftSuperParent}>
                <div className={styles.LeftParent}>
                  <img
                    loading="lazy"
                    className={styles.LeftImage}
                    src={item.ArticalBack}
                    alt=""
                  />
                  <div
                    className={`${styles.LeftChild} md:px-10 p-8 md:py-10 bg-white`}
                  >
                    <div className="flex w-full justify-start items-center">
                      <img
                        loading="lazy"
                        src={item.ArticleLogo}
                        alt=""
                        className="h-[60px]"
                      />
                    </div>
                    <a
                      href={item.ArticleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p
                        className="font-light py-3 hover:text-[#8E8E8E] hover:cursor-pointer text-[36.5px]"
                        style={{
                          fontFamily: "Copse, serif",
                          fontStyle: "normal",
                          fontWeight: "400",
                        }}
                      >
                        {item.ArticleTitle}
                      </p>
                    </a>
                  </div>
                  <div className={`${styles.RightChild} px-10 py-12 bg-white`}>
                    <div className="border-t-1 border-black w-[70px]"></div>
                    <p className="font-light py-3 text-sm">
                      {truncateText(item.ArticleDescription, 200)}
                    </p>
                    <a href={item.ArticleLink} target="_blank" rel="noreferrer">
                      <div className="flex items-center hover:text-[#8E8E8E] hover:cursor-pointer">
                        <span className="text-sm">Read More</span>
                        <MdOutlineArrowRight
                          style={{
                            // marginLeft: "-8px",
                            fontSize: "20px",
                          }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          {publication.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className={`w-full bg-white`}>
                <div className="flex w-full justify-start items-center p-4">
                  <img
                    loading="lazy"
                    src={item.ArticleLogo}
                    alt=""
                    className="h-[60px]"
                  />
                </div>
                <a
                  href={item.ArticleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p
                    className="font-light px-4 hover:text-[#8E8E8E] hover:cursor-pointer text-[22.6px]"
                    style={{
                      fontFamily: "Copse, serif",
                      fontStyle: "normal",
                      fontWeight: "400",
                    }}
                  >
                    {item.ArticleTitle}
                  </p>
                </a>
              </div>
              <div className="w-full bg-white p-4">
                <img
                  loading="lazy"
                  className={`${styles.LeftImage}`}
                  src={item.ArticalBack}
                  alt=""
                />
              </div>
              <div className={`px-10 py-8 bg-white`}>
                <div className="border-t-1 border-black w-[70px]"></div>
                <p className="font-light py-3 text-sm">
                  {truncateText(item.ArticleDescription, 200)}
                </p>
                <a href={item.ArticleLink} target="_blank" rel="noreferrer">
                  <div className="flex items-center hover:text-[#8E8E8E] hover:cursor-pointer">
                    <span className="text-sm">Read More</span>
                    <MdOutlineArrowRight
                      style={{
                        // marginLeft: "-8px",
                        fontSize: "20px",
                      }}
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PublicationsCards;
