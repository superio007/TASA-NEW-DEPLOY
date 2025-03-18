import { React, useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const ProjectBrief = () => {
  const [shownxt, setshownxt] = useState(false);
  const [showprev, setshowprev] = useState(false);
  const ProjectId = useParams().id;
  console.log(ProjectId);
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
        "https://static.wixstatic.com/media/3e801a90be0c49beb6e8b0b2fb157374.jpg/v1/fit/w_1740,h_437,q_90/3e801a90be0c49beb6e8b0b2fb157374.webp",
        "https://static.wixstatic.com/media/a8a68fb8d07f45ccbecec54d20509694.jpg/v1/fit/w_1740,h_437,q_90/a8a68fb8d07f45ccbecec54d20509694.webp",
        "https://static.wixstatic.com/media/20b77430ee264fa296a893330e2b839b.jpg/v1/fit/w_1740,h_437,q_90/20b77430ee264fa296a893330e2b839b.webp",
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
      images: [
        "https://static.wixstatic.com/media/3e801a90be0c49beb6e8b0b2fb157374.jpg/v1/fit/w_1740,h_437,q_90/3e801a90be0c49beb6e8b0b2fb157374.webp",
        "https://static.wixstatic.com/media/a8a68fb8d07f45ccbecec54d20509694.jpg/v1/fit/w_1740,h_437,q_90/a8a68fb8d07f45ccbecec54d20509694.webp",
        "https://static.wixstatic.com/media/20b77430ee264fa296a893330e2b839b.jpg/v1/fit/w_1740,h_437,q_90/20b77430ee264fa296a893330e2b839b.webp",
      ],
    },
    {
      id: 3,
      name: "Project 3",
      ARCHITECT: "Tanzeem Sarguroh",
      PHOTOS: " Kuber Shah | thekuber.com",
      description: [
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
        "This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
        "At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think",
      ],
      images: [
        "https://static.wixstatic.com/media/3e801a90be0c49beb6e8b0b2fb157374.jpg/v1/fit/w_1740,h_437,q_90/3e801a90be0c49beb6e8b0b2fb157374.webp",
        "https://static.wixstatic.com/media/a8a68fb8d07f45ccbecec54d20509694.jpg/v1/fit/w_1740,h_437,q_90/a8a68fb8d07f45ccbecec54d20509694.webp",
        "https://static.wixstatic.com/media/20b77430ee264fa296a893330e2b839b.jpg/v1/fit/w_1740,h_437,q_90/20b77430ee264fa296a893330e2b839b.webp",
      ],
    },
    {
      id: 4,
      name: "Project 4",
      ARCHITECT: "Tanzeem Sarguroh",
      PHOTOS: " Kuber Shah | thekuber.com",
      description: [
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
        "This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
        "At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think",
      ],
      images: [
        "https://static.wixstatic.com/media/3e801a90be0c49beb6e8b0b2fb157374.jpg/v1/fit/w_1740,h_437,q_90/3e801a90be0c49beb6e8b0b2fb157374.webp",
        "https://static.wixstatic.com/media/a8a68fb8d07f45ccbecec54d20509694.jpg/v1/fit/w_1740,h_437,q_90/a8a68fb8d07f45ccbecec54d20509694.webp",
        "https://static.wixstatic.com/media/20b77430ee264fa296a893330e2b839b.jpg/v1/fit/w_1740,h_437,q_90/20b77430ee264fa296a893330e2b839b.webp",
      ],
    },
    {
      id: 5,
      name: "Project 5",
      ARCHITECT: "Tanzeem Sarguroh",
      PHOTOS: " Kuber Shah | thekuber.com",
      description: [
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
        "This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
        "At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think",
      ],
      images: [
        "https://static.wixstatic.com/media/3e801a90be0c49beb6e8b0b2fb157374.jpg/v1/fit/w_1740,h_437,q_90/3e801a90be0c49beb6e8b0b2fb157374.webp",
        "https://static.wixstatic.com/media/a8a68fb8d07f45ccbecec54d20509694.jpg/v1/fit/w_1740,h_437,q_90/a8a68fb8d07f45ccbecec54d20509694.webp",
        "https://static.wixstatic.com/media/20b77430ee264fa296a893330e2b839b.jpg/v1/fit/w_1740,h_437,q_90/20b77430ee264fa296a893330e2b839b.webp",
      ],
    },
  ];
  useEffect(() => {
    console.log(projects.length);
    if (parseInt(ProjectId) === 1) {
      setshowprev(false);
      setshownxt(true);
    } else if (parseInt(ProjectId) === projects.length) {
      setshowprev(true);
      setshownxt(false);
    } else {
      setshowprev(true);
      setshownxt(true);
    }
  });
  const project = projects.find(
    (project) => project.id === parseInt(ProjectId)
  );
  console.log(project);
  function handleNxtProject(ProjectId) {
    let Id = parseInt(ProjectId);
    Id += 1;
    console.log(Id);
  }
  function handlePervProject(ProjectId) {
    let Id = parseInt(ProjectId);
    Id -= 1;
    console.log(Id);
  }
  return (
    <div className="py-18 bg-[#e9ebeb]">
      <div className="container mx-auto">
        <div className="bg-white py-20 px-24">
          <div>
            <h1 className="text-xl font-medium ">{project.name}</h1>
          </div>
          <div className="mt-30">
            {project.description.map((desc, index) => (
              <p className="py-2" key={index}>
                {desc}
              </p>
            ))}
          </div>
        </div>
        <div className="pt-18 bg-[#e9ebeb]">
          <div className="container mx-auto p-4 xl:px-80">
            <div className="flex flex-col w-full gap-24">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 xl:px-80">
          <div className="flex justify-between items-center">
            {showprev && (
              <NavLink to={`/projects/${parseInt(ProjectId) - 1}`}>
                <div className="flex flex-row items-center gap-4">
                  <MdOutlineKeyboardArrowLeft className="text-2xl" />
                  <p className="font-bold text-xl">Previous Project</p>
                </div>
              </NavLink>
            )}
            {shownxt && (
              <NavLink to={`/projects/${parseInt(ProjectId) + 1}`}>
                <div className="flex flex-row items-center gap-4">
                  <p className="font-bold text-xl">Next Project</p>
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
