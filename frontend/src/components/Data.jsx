import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/data.css";
import boyIcon from "../images/boy.png";
import girlIcon from "../images/girl.png";
import neutralIcon from "../images/neutral.png";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import earth from "../images/earth.png";
import { PiRanking } from "react-icons/pi";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { GiJusticeStar } from "react-icons/gi";
import { customPercentileRound, customPopularityRound } from "../utils/Data";
import { GiRank3 } from "react-icons/gi";
import { VscFileSubmodule } from "react-icons/vsc";
import bookIcon from "../images/browse.png";
import { IoCloseOutline } from "react-icons/io5";

const Data = (props) => {
  const gender = props.data.gender;
  const genderIconSource =
    gender === "M" ? boyIcon : gender === "N" ? neutralIcon : girlIcon;
  const genderStatment =
    gender === "M"
      ? `The name ${props.name} is a boy name`
      : gender === "N"
      ? `The name ${props.name} is both a girl and a boy name`
      : `The Name ${props.data.name} is a Girl name`;

  const [percentile, setPercentile] = useState(props.data.getPercentile);
  const [popularity, setPopularity] = useState(props.data.getNamePopularity);
  useEffect(() => {
    setPercentile(customPercentileRound(percentile));
    setPopularity(customPopularityRound(popularity));
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full lg:h-full z-50 flex items-center justify-center  ">
      {/* TRANSITION CONTAINER */}
      <motion.div
        initial={{ width: 0, height: `5px` }}
        animate={{
          width: `100%`,
          height: "100%",
        }}
        transition={{
          width: { duration: 0.9, ease: "easeInOut", delay: 0.2 },
          height: { duration: 1.1, ease: "easeInOut", delay: 1.2 },
        }}
        className="origin-center rounded-xl bg-[rgba(0,0,0,.05)] backdrop-blur-lg relative flex items-center justify-center   "
      >
        {/* DATA CONTENT CONTAINER */}
        <motion.div
          initial={{ display: "none" }}
          animate={{ display: "flex", transition: { delay: 3 } }}
          className="relative flex-col lg:flex-row items-center justify-center w-full p-[5%] gap-6 "
        >
          {/* EXIT BUTTON */}
          <div
            onClick={() => props.exit()}
            className="top-[85px] right-[25px] absolute p-3 rounded-full bg-white text-2xl exit-btn cursor-pointer hidden xl:block"
          >
            <IoCloseOutline />
          </div>
          {/* LEFT COLUMN CONTENT */}
          <motion.div className="flex w-full lg:basis-4/12 flex-col items-between justify-center gap-4 h-[90vh] ">
            <div className="flex flex-col basis-1/2 gap-4">
              <div className="flex flex-row items-center justify-between basis-1/2 gap-4">
                {/* BIRTH COUNT CONTAINER */}
                <div className="bg-white basis-1/2 py-4 px-8 rounded-xl flex items-center justify-center gap-2 flex-col h-full light-shadow relative">
                  <h1 className="text-center text-4xl font-bold text-green-400 tracking-wider drop-shadow-md absolute -translate-y-4 green-title lg:text-lg xl:text-4xl">
                    {props.data.getNameCount}
                  </h1>
                  <p className="text-center text-neutral-300 text-xs font-medium tracking-wider absolute translate-y-4 z-10">
                    people with the name {props.name}
                  </p>
                </div>
                {/* MOST POPULAR DECADE CONTAINER*/}
                <div className="relative bg-white basis-1/2 py-4 px-8 rounded-xl flex items-center justify-center gap-2 flex-col h-full light-shadow">
                  <h1 className="text-center text-4xl font-bold text-green-400 tracking-wider drop-shadow-md absolute -translate-y-4 green-title lg:text-lg xl:text-4xl">
                    {props.data.getMostPopularDecade}
                    <span className=" text-neutral-300 font-bold text-lg">
                      s
                    </span>
                  </h1>
                  <p className="text-center text-neutral-300 text-xs font-medium tracking-wider absolute translate-y-4 z-10">
                    most popular decade
                  </p>
                </div>
              </div>

              {/* GENDER CONTAINER */}
              <div className="flex flex-row items-center justify-between basis-1/2 px-6 bg-white rounded-xl light-shadow">
                <div className="flex flex-col items-center justify-center h-full basis-1/2">
                  <h1
                    className={`text-3xl tracking-wider font-neutral-800 font-bold drop-shadow-md `}
                  >
                    Gender
                  </h1>
                  <p className="text-center font-medium text-neutral-400 tracking-wide drop-shadow-sm text-sm">
                    {genderStatment}
                  </p>
                </div>
                <div
                  className={`basis-1/2 flex items-center justify-center relative gender-img ${
                    gender === "M" && "gender-boy"
                  } ${gender === "N" && "gender-neutral"} ${
                    gender === "F" && "gender-girl"
                  }
                    `}
                >
                  <img
                    src={genderIconSource}
                    alt="person icon"
                    className="z-10"
                  />
                </div>
              </div>
            </div>
            {/* PEAK POPULARITY CONTAINER */}
            <div className="flex basis-1/2 light-shadow bg-white rounded-xl flex-col items-center justify-between pt-1 pb-6 px-6">
              {/* TITLE */}
              <div className="py-3 flex flex-col items-center justify-center w-full ">
                <div className=" flex flex-row items-center justify-center text-xs text-green-400 gap-1">
                  <MdOutlineWorkspacePremium className="font-bold" />
                  <p className="font-bold tracking-wide ">Most Popular Years</p>
                </div>
                <h1 className="text-2xl font-bold text-center tracking-wider drop-shadow-md">
                  Peak Popularity
                </h1>
                <hr className="w-full h-[2px] mt-2 bg-[rgba(0,0,0,.05)]"></hr>
              </div>
              {/* RANKINGS */}
              <div className="flex flex-col items-center justify-center gap-3">
                {props.data.getPeakPopularity.map((popularity, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center  "
                  >
                    <div className="flex flex-row items-center justify-center gap-10">
                      <div className="flex flex-row items-center justify-center gap-1">
                        <p
                          className={`font-bold text-xl tracking-wide ${
                            index === 0 && "text-yellow-400"
                          } ${index === 1 && "text-gray-400"} ${
                            index === 2 && "text-amber-800"
                          }`}
                        >
                          {" "}
                          {index + 1})
                        </p>
                        <p className="font-semibold tracking-wider flex items-center justify-center">
                          {popularity.year}
                        </p>
                      </div>
                      <p className="relative tracking-wide italic text-neutral-400 font-medium flex items-center justify-center">
                        <span className="absolute w-[15px] h-[3px] rounded-xl left-[-25px] bg-[rgba(0,0,0,.1)]"></span>
                        {customPopularityRound(popularity.percentage)}%
                      </p>
                    </div>
                    {index !== 4 && (
                      <hr className="w-full h-[2px] mt-2 bg-[rgba(0,0,0,.05)]"></hr>
                    )}
                  </div>
                ))}
              </div>
              {/* PEAK POPULARITY FUN FACT */}
              <div className="flex flex-col items-center justify-center gap-2 w-full">
                <hr className="w-full h-[2px] mt-2 bg-[rgba(0,0,0,.05)]"></hr>
                <p className="text-center text-xs italic tracking-wider font-medium text-neutral-400">
                  In the year {props.data.getPeakPopularity[0].year} there were{" "}
                  {props.data.getPeakPopularity[0].count} people born with the
                  name {props.name}
                </p>
              </div>
            </div>
          </motion.div>
          {/* MIDDLE COLUMN CONTENT */}
          <motion.div className="flex w-full lg:basis-5/12 flex-col items-between justify-center gap-4 h-[90vh] ">
            {/* POPULARITY CONTAINER */}
            <div className="flex basis-5/12 bg-white light-shadow p-8 rounded-xl flex-row items-center justify-center gap-12 relative overflow-hidden">
              <span className="popularity-glow"></span>
              <div className="flex flex-col items-center justify-center h-full gap-1 basis-1/2">
                <div className="flex flex-row items-center justify-center gap-1 text-green-500 text-xs font-medium tracking-wide">
                  <GiRank3 />
                  <p>Percentage</p>
                </div>
                <h1 className="text-3xl font-bold drop-shadow-md tracking-wider text-neutral-800">
                  Popularity
                </h1>
                <p className="text-center text-neutral-400 text-sm tracking-wider font-medium">
                  Percentage of people with the name {props.name}
                </p>
              </div>
              <div className="basis-1/2 flex flex-col items-center justify-center">
                <div className="absolute flex items-center justify-center rounded-full p-3 bg-gradient-to-r z-10 from-green-400 via-green-500 to-green-400 w-40 h-40 popularity-container">
                  <h1
                    className={`text-center absolute font-bold text-neutral-800 drop-shadow-md tracking-wider z-10 ${
                      popularity < 0.01 ? "text-2xl" : "text-4xl"
                    }`}
                  >
                    {popularity}
                    <span className="text-lg font-medium text-neutral-600 ">
                      %
                    </span>
                  </h1>
                  <span className="outer-glow"></span>
                </div>
                <p className="absolute translate-y-28 text-neutral-300 italic font-bold tracking-wider text-lg">
                  rank: {props.data.getNameRanking}
                </p>
              </div>
            </div>
            <div className="flex basis-5/12 flex-row items-center jsutify-between gap-4">
              {/* PERCENTILE CONTAINER */}
              <div className="flex basis-1/2 h-full bg-white light-shadow rounded-xl py-6 px-8 flex-col items-center justify-between">
                <div className="flex w-full items-start justify-start flex-col">
                  <div className="flex flex-row items-center justify-center gap-1 text-xs text-green-500 font-medium tracking-wide">
                    <PiRanking />
                    <p>Ranking</p>
                  </div>
                  <h1 className="text-3xl tracking-wider drop-shadow-md text-neutral-800 font-bold">
                    Percentile
                  </h1>
                  <p className="text-xs font-medium text-neutral-400 tracking-wide">
                    Name popularity ranking percentage
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="relative flex items-center justify-center">
                    <SemiCircleProgressBar
                      percentage={percentile}
                      stroke={`#4ade80`}
                      strokeWidth={12}
                    />
                    <GiJusticeStar className="absolute text-3xl translate-y-4 text-green-400 percentile-icon" />
                  </div>
                  <div className="z-10 w-full flex flex-row items-start justify-between mx-auto bg-[#F2F2F2] rounded-xl px-3 py-2">
                    <p className="basis-1/6 text-xs text-neutral-800 tracking-wider font-bold">
                      0%
                    </p>
                    <div className="basis-4/6 flex flex-col items-center justify-center mt-2 w-full">
                      <h1 className="text-center text-xl font-bold tracking-wider text-green-400 drop-shadow-md">
                        {percentile}%
                      </h1>
                      <p className="text-xs text-neutral-500 italic tracking-wider font-bold">
                        Based on Popularity{" "}
                      </p>
                    </div>
                    <p className="basis-1/6 text-xs text-neutral-800 tracking-wider font-bold">
                      100%
                    </p>
                  </div>
                </div>
              </div>
              {/* REGION CONTAINER */}
              <div className="overflow-hidden flex basis-1/2 h-full bg-white light-shadow rounded-xl flex-col items-center justify-between relative">
                <div className="flex flex-col items-center justify-center gap-1 mt-8 z-10">
                  <h1 className="text-3xl font-bold tracking-wider text-neutral-800 drop-shadow-md">
                    Region
                  </h1>
                  <p className="w-3/4 mx-auto text-xs text-neutral-400 text-center font-medium tracking-wider">
                    Data comes from a United States birth dataset
                  </p>
                </div>
                <div className="absolute translate-y-32 lg:translate-y-48 xl:translate-y-32 earth-icon rounded-full">
                  <img
                    src={earth}
                    alt="Earth icon"
                    className=" rotate-180 scale-110"
                  ></img>
                </div>
              </div>
            </div>
            {/* CENTURY CONTAINER */}
            <div className="basis-2/12 py-3 px-6 rounded-xl flex flex-row items-center justify-between bg-white light-shadow gap-6">
              <div className="flex flex-col items-center justify-center basis-1/4">
                <div className="flex flex-row items-center justify-center gap-1 text-green-400 font-bold text-xs tracking-wider">
                  <FaBook />
                  <p>History</p>
                </div>
                <h1 className="text-3xl lg:text-xl xl:text-3xl font-bold text-neutral-800 drop-shadow-md tracking-wider">
                  Century
                </h1>
                <p className="text-center text-neutral-400 font-medium tracking-wider text-xs w-[190px] lg:w-[150px]">
                  See how many people share your name each century.
                </p>
              </div>
              <div className="flex flex-row items-center justify-between basis-3/4 flex-wrap">
                <div className="relative flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold text-green-400 tracking-wider drop-shadow-md green-title lg:text-lg xl:text-2xl  ">
                    {props.data.getBirthCountByCentury.century19}
                  </h1>
                  <p className="mt-1 font-medium text-neutral-300 italic tracking-wider">
                    1800s
                  </p>
                  <span className="absolute bg-[rgba(0,0,0,.1)] right-[-15px] h-1/2 w-[3px] rounded-xl lg:hidden xl:block"></span>
                </div>
                <div className="relative flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold text-green-400 tracking-wider drop-shadow-md green-title  lg:text-lg xl:text-2xl">
                    {props.data.getBirthCountByCentury.century20}
                  </h1>
                  <p className="mt-1 font-medium text-neutral-300 italic tracking-wider">
                    1900s
                  </p>
                  <span className="absolute bg-[rgba(0,0,0,.1)] right-[-15px] h-1/2 w-[3px] rounded-xl lg:hidden xl:block"></span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold text-green-400 tracking-wider drop-shadow-md green-title  lg:text-lg xl:text-2xl">
                    {props.data.getBirthCountByCentury.century21}
                  </h1>
                  <p className="mt-1 font-medium text-neutral-300 tracking-wider italic">
                    2000s
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* RIGHT COLUMN CONTENT */}
          <motion.div className="flex w-full lg:basis-3/12 flex-col items-between justify-start gap-4 h-[90vh] bg-white light-shadow p-8 rounded-xl">
            <div className="flex items-center justify-center w-full flex-col">
              <div className="flex flex-row items-center justify-center gap-1 text-green-400 tracking-wide text-xs font-medium">
                <VscFileSubmodule />
                <p>Collection</p>
              </div>
              <h1 className="text-3xl drop-shadow-md tracking-wider font-bold text-neutral-800">
                Browse
              </h1>
              <p className="text-neutral-400 text-sm font-medium tracking-wide text-center">
                Explore other names that are similiar to {props.name}
              </p>
              <hr className="w-full h-[2px] mt-2 bg-[rgba(0,0,0,.05)]"></hr>
            </div>
            <div className="flex flex-row items-start justify-start flex-wrap gap-2 overflow-y-auto browse-names-container">
              {props.data.getSimiliarNames.map((similiarName, index) => (
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  className="cursor-pointer rounded-md border-2 border-neutral-800 px-3 py-1 text-neutral-600 tracking-wide font-medium text-sm lg:text-xs xl:text-sm shadow-md shadow-neutral-300 transition duration-300 hover:bg-neutral-800 hover:text-green-400"
                  onClick={() => props.handleBrowseClick(similiarName)}
                >
                  <p className="">{similiarName}</p>
                </motion.div>
              ))}
            </div>
            <div className="book-icon rounded-full relative ">
              <img
                src={bookIcon}
                alt="book icon"
                className="scale-110 w-[3/4] mx-auto max-w-72"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Data;
