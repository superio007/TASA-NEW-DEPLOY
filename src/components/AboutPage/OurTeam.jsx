import React from "react";
import styles from "./css/OurTeam.module.css";
import { MdOutlineArrowRight } from "react-icons/md";
import TanzeemHeadshot from "../../assets/AboutPage/Ar-Tanzeem-Headshot.png";
import KshitijPatil from "../../assets/AboutPage/KshitijPatil.jpg";

const OurTeam = ({ team, members }) => {
  return (
    <>
      <div className="bg-white">
        <div className={`${styles.OurTeamContainer} container mx-auto`}>
          <h2 className="text-center text-2xl">
            {team.Heading || "The Visionaries Shaping Spaces"}
          </h2>
        </div>
        <div className="container mx-auto md:px-24 pb-20 flex xl:flex-row flex-col justify-between gap-18 items-center">
          {members.map((member, index) => (
            <div
              key={index}
              className={`${styles.LeftParent} flex px-12 pb-24 flex-col md:items-start items-center`}
            >
              <div>
                <p className="text-lg pb-3 font-normal">{member.Name}</p>
                <div className="border-t-1 border-black w-[45px]"></div>
                <p className=" pt-3 text-sm">{member.Role}</p>
                <p className="text-sm pt-[2px] font-light">
                  <a href={`mailto:${member.Email}`}>{member.Email}</a>
                </p>
                {member.Phone && (
                  <p className="text-sm pt-[2px] font-light">
                    <a href={`tel:${member.Phone}`}>{member.Phone}</a>
                  </p>
                )}
                <div className="flex items-center pt-3">
                  <div className="border-t-1 border-black w-[70px]"></div>
                  <MdOutlineArrowRight
                    style={{ marginLeft: "-8px", fontSize: "12px" }}
                  />
                </div>
              </div>
              <div className={`${styles.LeftChild} flex items-center`}>
                <img
                  loading="lazy"
                  src={member.TeamPicture.url}
                  alt="TanzeemHeadshot"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
