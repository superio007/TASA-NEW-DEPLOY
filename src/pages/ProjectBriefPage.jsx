import { React, useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
var projects = [];
const ProjectBrief = ({ apiRes }) => {
  console.log(apiRes);
  var count = 1;
  useEffect(() => {
    projects = apiRes.map((project) => ({
      id: count++,
      name: project.ProjectName,
      ARCHITECT: project.ArchitectName,
      PHOTOS: project.PhotosBy,
      description: project.ProjectDescription,
      images: project.ProjectsImages.map((image) => ({
        url: image.url,
        alt: image.alternativeText,
      })),
      ytEmbeded: project.ytEmbeded || null,
    }));
  }, []);
  // console.log("formattedProjects", formattedProjects);
  const { id } = useParams();
  const ProjectName = id.split("-").join(" ");

  const [currentIndex, setCurrentIndex] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [showPrev, setShowPrev] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);
  useEffect(() => {
    const index = projects.findIndex((project) => project.name === ProjectName);

    if (index !== -1) {
      setCurrentIndex(index);
      setShowPrev(index > 0);
      setShowNext(index < projects.length - 1);
    } else {
      setCurrentIndex(null); // Handle case where project is not found
    }
  }, [id, ProjectName]);

  if (currentIndex === null) {
    return <div className="text-center py-10">Project not found.</div>;
  }

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

          <div>
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
        </div>

        {/* Image Gallery */}
        <div className="pt-18 bg-[#e9ebeb]">
          <div className="container mx-auto p-4 xl:px-80">
            <div className="flex flex-col w-full gap-8">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-auto object-cover  shadow-md"
                />
              ))}
            </div>
          </div>
        </div>

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
        {/* Navigation */}
        <div className="container mx-auto p-4 pt-16 xl:px-80">
          <div className="flex justify-between items-center">
            {showPrev && prevProject && (
              <NavLink
                to={`/projects/${prevProject.name.replace(/\s+/g, "-")}`}
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
                  <p className=" text-xl">Next Project</p>
                  <MdOutlineKeyboardArrowRight className="text-2xl" />
                </div>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBrief;
