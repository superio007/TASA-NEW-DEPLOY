import { useState, useEffect, use } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ProjectsData from "../Data/ProjectsData.json";
import { IoCameraOutline } from "react-icons/io5";
import styles from "../css/ProjectBriefPage.module.css";
import { IKImage, IKContext } from "imagekitio-react";

const fetchProjectpageContent = async () => {
  const { data } = await axios.get(
    "https://starfish-app-ca2ju.ondigitalocean.app/api/projects?populate=*"
  );
  return data.data;
};

async function callFeatureApi(documentedID) {
  try {
    const apilink = `https://starfish-app-ca2ju.ondigitalocean.app/api/featured-ons/${documentedID}?populate=*`;
    const { data } = await axios.get(apilink);
    let res = {
      src: data.data.ArticalBrandlogo.url,
      link: data.data.ArticalLink,
      alt: data.data.ArticalBrandlogo.alternativeText,
    };
    return res;
  } catch (error) {
    console.error("Error fetching feature:", error);
    return null;
  }
}

const ProjectBrief = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Projectspage-content"],
    queryFn: fetchProjectpageContent,
  });

  const [projects, setProjects] = useState([]);
  const { id } = useParams();
  const ProjectName = id.split("-").join(" ");
  useEffect(() => {
    if (data && Array.isArray(data)) {
      console.log("Data fetched:", data);
      let count = 1;
      const mappedProjects = data?.map((project) => ({
        id: count++,
        name: project.ProjectName,
        ARCHITECT: project.ArchitectName,
        PHOTOS: project.PhotosBy,
        description: project.ProjectDescription,
        images:
          project.ProjectsImages?.map((image) => ({
            url: image.formats.large.url,
            alt: image.formats.large.name,
          })) || [],
        features: project.featured_ons || [],
        ytEmbeded: project.ProjectYTLink || null,
      }));
      setProjects(mappedProjects);
    } else if (error) {
      setProjects(ProjectsData.data);
    }
  }, [data, error, isLoading]);

  const [currentIndex, setCurrentIndex] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [showPrev, setShowPrev] = useState(false);
  const [showMedia, setshowMedia] = useState(false);
  const [featureImages, setFeatureImages] = useState([]);
  const [change, setChange] = useState("");

  useEffect(() => {
    if (projects.length > 0) {
      const index = projects.findIndex(
        (project) => project.name === ProjectName
      );
      if (index !== -1) {
        setCurrentIndex(index);
        setShowPrev(index > 0);
        setShowNext(index < projects.length - 1);
      } else {
        setCurrentIndex(null);
      }
    }
  }, [projects, ProjectName]);

  useEffect(() => {
    const fetchFeatures = async () => {
      if (
        currentIndex !== null &&
        projects[currentIndex]?.features?.length > 0
      ) {
        setshowMedia(true);
        try {
          const featuresImages = await Promise.all(
            projects[currentIndex].features.map((feature) =>
              callFeatureApi(feature.documentId)
            )
          );
          setFeatureImages(featuresImages.filter(Boolean));
        } catch (error) {
          console.error("Error fetching feature images:", error);
        }
      } else {
        setFeatureImages([]);
        setshowMedia(false);
      }
    };

    fetchFeatures();
  }, [currentIndex, projects]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);
  
  if (isLoading) return <p>Loading...</p>;
  if (currentIndex === null)
    return <div className="text-center py-10">Project not found.</div>;

  const project = projects[currentIndex];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="py-18 bg-[#e9ebeb]">
      <div className="container mx-auto">
        <div className="bg-white md:py-20 p-4 md:px-24">
          <h1 className="md:text-4xl py-6 text-center font-medium">
            Project Details
          </h1>
          <p className="py-2">{project.description}</p>

          <div className="flex md:flex-row flex-col gap-6 py-2">
            <p className="py-2 flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
              </svg>
              : <span className="font-normal">{project.name}</span>
            </p>
            <p className="py-2 flex gap-2 items-center">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/architect.png"
                alt="architect"
              />
              : <span className="font-normal">{project.ARCHITECT}</span>
            </p>
            <p className="py-2 flex gap-2 items-center">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/image-gallery.png"
                alt="image-gallery"
              />
              : <span className="font-normal">{project.PHOTOS}</span>
            </p>
          </div>

          {featureImages.length > 4 ? (
            <div className={styles.brandCouterContainer}>
              <div className={styles.brandSliderContainer}>
                <div className="flex w-full items-center gap-4">
                  {showMedia && (
                    <div className="md:w-[250px]">
                      <p className="font-normal md:text-2xl">Media Feature:</p>
                    </div>
                  )}
                  <div className={styles.brandSlider}>
                    <div className={styles.sliderTrack}>
                      {featureImages.map((feature, index) => (
                        <Link
                          to={feature.link}
                          target="_blank"
                          className={styles.slide}
                          key={index}
                        >
                          <IKImage
                            urlEndpoint={import.meta.env.VITE_IMAGEKIT_BASE_URL}
                            path={feature.src
                              .split(
                                "https://ik.imagekit.io/2cdga3aqf/TasaUploads/"
                              )
                              .join("/")}
                            loading="lazy"
                            transformation={[
                              { progressive: true, quality: "auto" },
                            ]}
                            alt={feature.alt}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-2 flex flex-wrap items-center gap-4">
              {showMedia && (
                <div className="md:w-[250px]">
                  <p className="font-medium md:text-2xl">Media Features</p>
                </div>
              )}
              {featureImages.map((feature, index) => (
                <Link
                  to={feature.link}
                  target="_blank"
                  className={styles.slide}
                  key={index}
                >
                  <IKImage
                    urlEndpoint={import.meta.env.VITE_IMAGEKIT_BASE_URL}
                    path={feature.src
                      .split("https://ik.imagekit.io/2cdga3aqf/TasaUploads/")
                      .join("/")}
                    loading="lazy"
                    transformation={[{ progressive: true, quality: "auto" }]}
                    alt={feature.alt}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>

        <IKContext
          publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
          urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
          transformationPosition="path"
        >
          {/* Image Gallery */}
          <div className="pt-18 bg-[#e9ebeb]">
            <div className="container mx-auto p-4 xl:px-80">
              <div className="flex flex-col w-full gap-8">
                {project.images.map((image, index) => {
                  const imagePath = image.url
                    .split("https://ik.imagekit.io/2cdga3aqf")
                    .join("/"); // Keep folder structure

                  const cacheBuster =
                    image.updatedAt || project.updatedAt || Date.now();

                  return (
                    <IKImage
                      key={index}
                      path={imagePath}
                      loading="lazy"
                      className="w-full h-auto object-cover shadow-md"
                      transformation={[
                        { progressive: true, quality: "auto" },
                        { width: "auto" }, // Optional dummy transformation
                        { height: "auto" }, // Optional dummy transformation
                      ]}
                      alt={project.name}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </IKContext>

        {/* Video Section */}

        {project.ytEmbeded && (
          <div className="pt-18 bg-[#e9ebeb]">
            <div className="container flex justify-center mx-auto p-4 xl:px-80">
              <iframe
                width="560"
                height="315"
                src={project.ytEmbeded}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Navigation
        <div className="container mx-auto p-4 pt-16 xl:px-80">
          <div className="flex justify-between items-center">
            {showPrev && prevProject && (
              <NavLink
                to={`/projects/${prevProject.name.replace(/\s+/g, "-")}`}
                onclick={() => setChange(!change)}
              >
                <div className="flex flex-row items-center gap-4 text-gray-700 hover:text-black transition">
                  <MdOutlineKeyboardArrowLeft className="text-2xl" />
                  <p className=" text-xl">Previous Project</p>
                </div>
              </NavLink>
            )}
            {showNext && nextProject && (
              <NavLink
                to={`/projects/${nextProject.name.replace(/\s+/g, "-")}`}
              >
                <div className="flex flex-row items-center gap-4 text-gray-700 hover:text-black transition">
                  <p className="text-xl">Next Project</p>
                  <MdOutlineKeyboardArrowRight className="text-2xl" />
                </div>
              </NavLink>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectBrief;
