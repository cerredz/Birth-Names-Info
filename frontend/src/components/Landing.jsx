import React from "react";
import Navbar from "./Navbar";
import "../styles/landing.css";
import { GiPolarStar } from "react-icons/gi";

const Landing = () => {
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
          <h1 className="text-4xl sm:text-7xl font-bold text-center tracking-wider max-w-xl">
            Finding the <span>Perfect </span>name
          </h1>
          <p className="mt-4 text-center text-neutral-400 font-medium tracking-wide max-w-lg">
            Begin your exploration of birth name statistics dating back to 1880
            - all to assist you in selecting the perfect baby name
          </p>
        </div>
        {/* INPUT CONTAINER */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <input placeholder="Enter a Name"></input>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
