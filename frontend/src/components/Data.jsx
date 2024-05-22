import React, { useEffect } from "react";
import { motion } from "framer-motion";
const Data = (props) => {
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
        className="origin-center rounded-xl bg-[rgba(0,0,0,.025)] backdrop-blur-lg relative flex items-center justify-center"
      >
        {/* DATA CONTENT CONTAINER */}
        <motion.div
          initial={{ display: "none" }}
          animate={{ display: "flex", transition: { delay: 3 } }}
          className="relative flex-col lg:flex-row items-center justify-center min-w-full min-h-full p-[5%] gap-6 "
        >
          {/* LEFT COLUMN CONTENT */}
          <motion.div className="flex w-full lg:basis-4/12 flex-col items-between justify-center gap-4 h-[90vh] bg-green-500">
            <div className="flex flex-col basis-1/2 bg-yellow-400 gap-4">
              <div className="flex flex-row items-center justify-between basis-1/2 bg-blue-200">
                {/* BIRTH COUNT CONTAINER */}
                <div className="bg-blue-700">
                  <h1>{props.data.getNameCount}</h1>
                </div>
                {/* MOST POPULAR DECADE CONTAINER*/}
                <div className="bg-red-600">
                  {" "}
                  <h1>{props.data.getMostPopularDecade}</h1>
                </div>
              </div>

              {/* GENDER CONTAINER */}
              <div className="flex flex-row items-center justify-center basis-1/2 bg-blue-700">
                <h1>Gender</h1>
              </div>
            </div>
            {/* PEAK POPULARITY CONTAINER */}
            <div className="flex basis-1/2 bg-orange-500">
              <h1>Peak Popularity</h1>
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
