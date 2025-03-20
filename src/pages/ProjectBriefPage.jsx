import { React, useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
const projects = [
  {
    id: 1,
    name: "601 Sakura Home",
    ARCHITECT: "Tanzeem Sarguroh",
    PHOTOS: " Kuber Shah | thekuber.com",
    description: [
      "Stepping away from the hustle of the city, Sakura Home aims to be a mental switch-off space. The home stands as a testament to the fusion of design innovation and the pursuit of tranquillity. ",

      "When our client approached us to redesign their home, their pivotal grievance was that despite the available floor space, the house always felt anything but spacious.",

      "When we set off to design a more welcoming abode, a couple of internal walls were demolished to usher in the natural light that bathed the entire home with positivity.",

      "With a rough east-west axis, the living room strategically opens to the south, flooding the space with natural light. We enlarged the windows embracing the south-facing aspect, creating a space where the family can gather, relax, and work in perfect harmony with the surroundings.",

      "We chose a neutral palette that permeates the interiors, providing a canvas that allows its residents to savour the peaceful aesthetic. The design philosophy focuses on creating focal points within the space, relinquishing superfluous features for a more coherent environment.",

      "Striving for the balance of form, function and simplicity, we adopted an open kitchen layout while working with natural materials and unconfined natural light. We leaned towards the Japandi aesthetic as it matched perfectly with our objectives of minimalism and Practical Sustainability. ",

      "Navigating the creation of a Japandi-inspired dwelling, we understood the significant task of steering clear of excessive embellishments. We aimed to hold onto the fundamentals while ensuring a cosy and inviting atmosphere. We opted for a pragmatic approach, taking measured steps in our choice of materials, and acknowledging the lasting transformations that small decisions can engender.",
    ],
    images: [
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742296759/EPHX_2052_FS_b5gkzu.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742296759/EPHX_1901-2_FS_eiuqol.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742296760/EPHX_2004_FS_hoi1rn.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742296760/EPHX_1971_FS_qkhtxl.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742296759/EPHX_1914_FS_h5mkde.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742296759/EPHX_1914_FS_h5mkde.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742296761/EPHX_2097_FS_pb94qn.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742296761/EPHX_1996_FS_mol7lz.jpg",
    ],
  },
  {
    id: 2,
    name: "811",
    ARCHITECT: "Tanzeem Sarguroh",
    PHOTOS: " Kuber Shah | thekuber.com",
    description: [
      "811 is a 40sqm workspace designed using the 100-year-old reclaimed Teak Wood salvaged from demolished structures of Old Bombay built during the British Era.",
      "        Striving for the balance of form, function and simplicity, we adopted an open layout while working with natural materials and unconfined natural light. We leaned towards the Japandi aesthetic as it matched perfectly with our objectives of minimalism and Practical Sustainability.",
      "We were squarely aware of the insurmountable charge of shunning the ornate, retaining the essentials whilst maintaining warmth and comfort. We took smaller steps towards the enduring and compounding changes possible with our material choices.",
    ],
    ytEmbeded: "https://www.youtube.com/embed/6v4y1fLHl8Y?si=MjICYPTYoCFWhMys",
    images: [
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742292379/811-TD-09_gz7mav.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742292379/811-TD-06_g0tldn.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742292379/811-TD-08_jmxnvo.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742292380/811-TD-04_gnjzay.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742292380/811-TD-05_ykreyc.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742292381/811-TD-02_mkzawd.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742292381/811-TD-03_loq77a.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742292382/811-TD-01_luzkbc.jpg",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742292383/811-TD-07_kw4zzq.jpg",
    ],
  },
  {
    id: 3,
    name: "Sailor’s Abode",
    ARCHITECT: "Tanzeem Sarguroh",
    PHOTOS: " Kuber Shah | thekuber.com",
    description: [
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      "This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
      "At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think",
    ],
    ytEmbeded: "https://www.youtube.com/embed/OFPe09V7Xao?si=kWDRwVsfzr4TodO4",
    images: [
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300625/videoframe_11556_xgplu1.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300624/videoframe_7419_t0yose.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300625/videoframe_18067_ifhgst.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300626/videoframe_33818_spequ8.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300626/videoframe_24904_moj971.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300636/videoframe_49521_djz0np.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300637/videoframe_62444_zex3h1.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300705/videoframe_68948_pvsmdu.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300705/videoframe_83504_ll021x.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300708/videoframe_98419_ilaxbt.png",
    ],
  },
  {
    id: 4,
    name: "Amber Lake Resort",
    ARCHITECT: "Tanzeem Sarguroh",
    PHOTOS: " Kuber Shah | thekuber.com",
    ytEmbeded: "https://www.youtube.com/embed/b5ZLaCFgx5M?si=hKbmonweraNk0sVF",
    description: [
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      "This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
      "At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think",
    ],
    images: [
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300024/videoframe_14252_dyrdnk.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300025/videoframe_45783_x1rlzo.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300024/videoframe_28628_ecusxo.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300029/videoframe_53156_jlxzgb.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300029/videoframe_99456_frpque.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300030/videoframe_105662_iqwaug.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300034/videoframe_134816_ls3tmf.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300034/videoframe_143025_yfbnji.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300035/videoframe_172937_v3uzu8.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742300039/videoframe_177743_bv1tvm.png",
    ],
  },
  {
    id: 5,
    name: "Villa Kochi",
    ARCHITECT: "Tanzeem Sarguroh",
    PHOTOS: " Kuber Shah | thekuber.com",
    description: [
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      "This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
      "At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think",
    ],
    ytEmbeded: "https://www.youtube.com/embed/fA4i6U3QRTw?si=gA_zaOu5YoVNXjQB",
    images: [
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742299139/videoframe_33108_wbbhqf.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742299140/videoframe_212566_rt7zuy.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742299140/videoframe_72150_o3qg68.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742299140/videoframe_199791_y8ap1y.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742299139/videoframe_36859_zuuvkv.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742299140/videoframe_116626_xvdexx.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742299140/videoframe_81487_f34q4y.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742299142/videoframe_268618_u4a6l5.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742299151/videoframe_313357_sxru7p.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742299151/videoframe_321585_jqluvf.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742299151/videoframe_338623_bbrfhf.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742299152/videoframe_407219_r8sxhs.png",
      "https://res.cloudinary.com/do3xm1yzb/image/upload/v1742299153/videoframe_416643_tpimon.png",
    ],
  },
];
const ProjectBrief = () => {
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
        <div className="bg-white py-20 px-24">
          <h1 className="md:text-4xl py-6 text-center font-medium">
            Project Details
          </h1>

          {project.description.map((desc, index) => (
            <p className="py-2" key={index}>
              {desc}
            </p>
          ))}

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
                  src={image}
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
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
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
