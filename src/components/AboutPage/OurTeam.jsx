import React from "react";
import styles from "./css/OurTeam.module.css";
import { MdOutlineArrowRight } from "react-icons/md";
import TanzeemHeadshot from "./assets/Ar-Tanzeem-Headshot.png";
import KshitijPatil from "./assets/KshitijPatil.jpg";

const OurTeam = () => {
  return (
    <>
      <div className="bg-white">
        <div className={`${styles.OurTeamContainer} container mx-auto`}>
          <h2 className="text-center text-2xl pb-24 font-bold">
            The Visionaries Shaping Spaces
          </h2>
          <div className="flex md:p-0 p-4 flex-col gap-24 md:items-start items-center">
            <div className={`${styles.LeftParent} flex px-12 pb-24 flex-col`}>
              <p className="text-lg pb-3 font-normal">Tanzeem Sarguroh</p>
              <div className="border-t-1 border-black w-[45px]"></div>
              <p className="font-bold pt-3 text-sm">Partner</p>
              <p className="text-sm pt-[2px] font-light">
                {" "}
                <a href="mailto:info@tasaarchitects.com">
                  info@tasaarchitects.com
                </a>
              </p>
              {/* <p className="text-sm pt-[2px] font-light">
                Tel: <a href="tel:123456789">123-456-7890</a>
              </p> */}
              <div className="flex items-center pt-3">
                <div className="border-t-1 border-black w-[70px]"></div>
                <MdOutlineArrowRight
                  style={{ marginLeft: "-8px", fontSize: "12px" }}
                />
              </div>
              <div className={`${styles.LeftChild} flex items-center`}>
                <img
                  loading="lazy"
                  src={TanzeemHeadshot}
                  alt="TanzeemHeadshot"
                />
              </div>
            </div>
          </div>
          <div className="flex md:p-0 p-4 flex-col mt-24 md:items-end items-center">
            <div className={`${styles.LeftParent} flex px-12 pb-24 flex-col`}>
              <p className="text-lg pb-3 font-normal">Kshitij Patil</p>
              <div className="border-t-1 border-black w-[45px]"></div>
              <p className="font-bold pt-3 text-sm">Partner</p>
              <p className="text-sm pt-[2px] font-light">
                {" "}
                <a href="mailto:info@tasaarchitects.com">
                  info@tasaarchitects.com
                </a>
              </p>
              <p className="text-sm pt-[2px] font-light">
                Tel: <a href="tel:8652233399">+91 8652-233-399</a>
              </p>
              <div className="flex items-center pt-3">
                <div className="border-t-1 border-black w-[70px]"></div>
                <MdOutlineArrowRight
                  style={{ marginLeft: "-8px", fontSize: "12px" }}
                />
              </div>
              <div className={`${styles.LeftChild} flex items-center`}>
                <img loading="lazy" src={KshitijPatil} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
