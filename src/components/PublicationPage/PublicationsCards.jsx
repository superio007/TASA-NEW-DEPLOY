import React from "react";
import styles from "./css/PublicationsCards.module.css";
import { IKImage } from "imagekitio-react";
import { MdOutlineArrowRight } from "react-icons/md";
function PublicationsCards({ apiRes }) {
  let publication = [];
  apiRes.map((item) =>
    publication.push({
      ArticleLogo: item.PublicationLogo[0].url,
      ArticleLogoAlt: item.PublicationLogo[0].alternativeText,
      ArticleTitle: item.Heading,
      ArticalBack: item.ArticalBackground.formats.large.url,
      ArticalAlt: item.ArticalBackground.alternativeText,
      ArticleLink: item.ArticalLink,
      ArticleDescription: item.Description,
    })
  );
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
  return (
    <>
      <div className="bg-[#e9ebeb]">
        <div className="hidden md:block container mx-auto md:pb-28 p-4 xl:px-80">
          {publication.map((item, index) => (
            <div key={index} className="flex pt-18 flex-col items-center">
              <div className={styles.LeftSuperParent}>
                <div className={styles.LeftParent}>
                  <IKImage
                    urlEndpoint={import.meta.env.VITE_IMAGEKIT_BASE_URL}
                    path={item.ArticalBack.split(
                      "https://ik.imagekit.io/2cdga3aqf/TasaUploads/"
                    ).join("/")}
                    className={styles.LeftImage}
                    loading="lazy"
                    transformation={[{ progressive: true, quality: "auto" }]}
                    alt={item.ArticalAlt || truncateText(item.ArticleTitle, 15)}
                  />
                  <div
                    className={`${styles.LeftChild} md:px-10 p-8 md:py-10 bg-white`}
                  >
                    <div className="flex w-full justify-start items-center">
                      <IKImage
                        urlEndpoint={import.meta.env.VITE_IMAGEKIT_BASE_URL}
                        path={item.ArticleLogo.split(
                          "https://ik.imagekit.io/2cdga3aqf/TasaUploads/"
                        ).join("/")}
                        loading="lazy"
                        className="h-[60px]"
                        transformation={[
                          { progressive: true, quality: "auto" },
                        ]}
                        alt={
                          item.ArticleLogoAlt ||
                          truncateText(item.ArticleTitle, 15)
                        }
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
                  <IKImage
                    urlEndpoint={import.meta.env.VITE_IMAGEKIT_BASE_URL}
                    path={item.ArticleLogo.split(
                      "https://ik.imagekit.io/2cdga3aqf/TasaUploads/"
                    ).join("/")}
                    loading="lazy"
                    className="h-[60px]"
                    transformation={[{ progressive: true, quality: "auto" }]}
                    alt={
                      item.ArticleLogoAlt || truncateText(item.ArticleTitle, 15)
                    }
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
                <IKImage
                  urlEndpoint={import.meta.env.VITE_IMAGEKIT_BASE_URL}
                  path={item.ArticalBack.split(
                    "https://ik.imagekit.io/2cdga3aqf/TasaUploads/"
                  ).join("/")}
                  loading="lazy"
                  className={`${styles.LeftImage}`}
                  transformation={[{ progressive: true, quality: "auto" }]}
                  alt={item.ArticalAlt || truncateText(item.ArticleTitle, 15)}
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
