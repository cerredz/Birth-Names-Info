import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/landing.css";
import { GiPolarStar } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { motion } from "framer-motion";

const Landing = () => {
  const [name, setName] = useState("");
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen relative flex flex-col items-center justify-center px-[5%] gap-6">
        {/* TITLE CONTAINER */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-start text-green-500 text-sm tracking-wide font-medium">
            <GiPolarStar />
            <p>In-Depth Data Analysis</p>
          </div>
          <h1 className="text-4xl sm:text-7xl font-bold text-center tracking-wider max-w-xs sm:max-w-xl">
            Finding the{" "}
            <span className="text-green-500 drop-shadow-md underline">
              Perfect
            </span>{" "}
            name
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
      </div>
    </div>
  );
};

export default Landing;
