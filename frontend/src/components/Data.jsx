import React from "react";
import { motion } from "framer-motion";
import "../styles/data.css";
import boyIcon from "../images/boy.png";
import girlIcon from "../images/girl.png";
import neutralIcon from "../images/neutral.png";
import { MdOutlineWorkspacePremium } from "react-icons/md";

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

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center ">
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
        className="origin-center rounded-xl bg-[rgba(0,0,0,.05)] backdrop-blur-lg relative flex items-center justify-center"
      >
        {/* DATA CONTENT CONTAINER */}
        <motion.div
          initial={{ display: "none" }}
          animate={{ display: "flex", transition: { delay: 3 } }}
          className="relative flex-col lg:flex-row items-center justify-center min-w-full min-h-full p-[5%] gap-6 "
        >
          {/* LEFT COLUMN CONTENT */}
          <motion.div className="flex w-full lg:basis-4/12 flex-col items-between justify-center gap-4 h-[90vh] ">
            <div className="flex flex-col basis-1/2 gap-4">
              <div className="flex flex-row items-center justify-between basis-1/2 gap-4">
                {/* BIRTH COUNT CONTAINER */}
                <div className="bg-white basis-1/2 py-4 px-8 rounded-xl flex items-center justify-center gap-2 flex-col h-full light-shadow">
                  <h1 className="text-center text-4xl font-bold text-green-400 tracking-wider drop-shadow-md absolute -translate-y-4 green-title">
                    {props.data.getNameCount}
                  </h1>
                  <p className="text-center text-neutral-300 text-xs font-medium tracking-wider absolute translate-y-4 z-10">
                    people with the name {props.name}
                  </p>
                </div>
                {/* MOST POPULAR DECADE CONTAINER*/}
                <div className="bg-white basis-1/2 py-4 px-8 rounded-xl flex items-center justify-center gap-2 flex-col h-full light-shadow">
                  <h1 className="text-center text-4xl font-bold text-green-400 tracking-wider drop-shadow-md absolute -translate-y-4 green-title">
                    {props.data.getMostPopularDecade}
                  </h1>
                  <p className="text-neutral-300 text-xs font-medium tracking-wider absolute translate-y-4 z-10">
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
                        {popularity.percentage.toFixed(2)}%
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
          <motion.div className="flex w-full lg:basis-5/12 flex-col items-between justify-center gap-4 h-[90vh] bg-red-500">
            {/* POPULARITY CONTAINER */}
            <div className="flex basis-5/12 bg-slate-500">
              <h1>Popularity</h1>
            </div>
            <div className="flex basis-4/12 bg-purple-300 flex-row items-center jsutify-between gap-4">
              {/* PERCENTILE CONTAINER */}
              <div className="flex basis-1/2 h-full bg-yellow-500">
                <h1>Percentile</h1>
              </div>
              {/* REGION CONTAINER */}
              <div className="flex basis-1/2 h-full bg-green-400">
                <h1>Region</h1>
              </div>
            </div>
            {/* CENTURY CONTAINER */}
            <div className="flex basis-3/12 bg-purple-600">
              <h1>Century</h1>
            </div>
          </motion.div>
          {/* RIGHT COLUMN CONTENT */}
          <motion.div className="flex w-full lg:basis-3/12 flex-col items-between justify-start gap-4 h-[90vh] bg-blue-500">
            <h1>Browse</h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Data;
