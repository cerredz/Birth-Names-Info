import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/landing.css";
import { GiPolarStar } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { motion } from "framer-motion";
import checkmark from "../images/check.png";
import personIcon from "../images/person.png";
import contactIcon from "../images/contacts.png";
import folderIcon from "../images/folder.png";
import networkIcon from "../images/network.png";

const Landing = () => {
  const [name, setName] = useState("");
  const [isCompletedData, setIsCompletedData] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);
  return (
    <div className="">
      <Navbar />
      <div
        id="hero"
        className="min-h-screen relative flex flex-col items-center justify-center px-[5%] gap-6"
      >
        {/* TITLE CONTAINER */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-start text-green-500 text-sm tracking-wide font-medium">
            <GiPolarStar />
            <p>In-Depth Data Analysis</p>
          </div>
          <h1 className="text-4xl sm:text-7xl font-bold text-center tracking-wider max-w-xs sm:max-w-xl relative">
            Finding the{" "}
            <span className="text-green-500 drop-shadow-md underline">
              Perfect
            </span>{" "}
            name
            <Icons />
          </h1>
          <p className="mt-4 text-center text-neutral-400 font-medium tracking-wide sm:max-w-lg text-sm sm:text-base px-[5%] sm:px-0">
            Begin your exploration of birth name statistics dating back to 1880
            - all to assist you in selecting the perfect baby name
          </p>
        </div>
        {/* INPUT CONTAINER */}
        <div className="flex flex-col items-center justify-center mt-6">
          {/* ENTER NAME CONTAINER */}
          <span className="enter-name-container rounded-2xl relative">
            <div className="flex flex-row md:w-[500px] items-center justify-between bg-white py-2 px-6 rounded-2xl relative ">
              <input
                placeholder="Enter a Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="z-10 bg-white enter-name text-lg tracking-wider font-medium"
              ></input>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => console.log("Hello World")}
                className="z-10 flex flex-row items-center justify-center gap-2 bg-green-500 py-2 text-lg px-4 rounded-md font-medium tracking-wide shadow-lg shadow-green-500/30 transition duration-500 hover:transition hover:duration-500 hover:bg-green-600"
              >
                Search
              </motion.button>
            </div>
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-sm tracking-wider font-medium text-neutral-400">
            <span className="text-green-500">Millions</span> of data parameters
          </h1>
          <img
            src={checkmark}
            alt="green check icon"
            className="w-[20px]"
          ></img>
        </div>
      </div>
    </div>
  );
};

/* BACKGROUND ICONS */
const Icons = () => {
  return (
    <>
      <div className="hidden absolute left-[-100px] top-[35px] -rotate-12 p-4 bg-white rounded-full md:flex items-center justify-center shadow-lg">
        <img src={personIcon} alt="person icon" className="w-[35px]"></img>
      </div>
      <div className="hidden absolute left-0 top-[-50px] -rotate-12 p-3 bg-white rounded-full md:flex items-center justify-center shadow-lg">
        <img src={contactIcon} alt="contact icon" className="w-[25px]"></img>
      </div>
      <div className="hidden absolute right-0 top-[-50px] rotate-12 p-3 bg-white rounded-full md:flex items-center justify-center shadow-lg">
        <img src={folderIcon} alt="folder icon" className="w-[30px]"></img>
      </div>
      <div className="hidden absolute right-[-100px] top-[40px] rotate-12 p-4 bg-white rounded-full md:flex items-center justify-center shadow-lg">
        <img src={networkIcon} alt="network icon" className="w-[37px]"></img>
      </div>
    </>
  );
};
export default Landing;
