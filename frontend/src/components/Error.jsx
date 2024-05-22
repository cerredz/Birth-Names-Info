import React from "react";
import { motion } from "framer-motion";
import "../styles/error.css";
import { PiCursorClick } from "react-icons/pi";
import errorIcon from "../images/error.png";

const Error = (props) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      exit={{
        scale: 0,
        opacity: 0,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      className="origin-center fixed z-20 backdrop-blur-lg w-full h-full top-0 left-0 flex items-center justify-center"
    >
      {/* ERROR CONTENT CONTAINER */}
      <div className="flex items-center justify-center px-16 py-8 flex-col rounded-2xl shadow-md bg-white max-w-xl">
        <img
          src={errorIcon}
          alt="error icon"
          className="w-[100px] rounded-full "
        />
        <h1 className="text-center text-3xl md:text-5xl mt-4 tracking-widest font-bold text-red-600 ">
          Error
        </h1>
        <p className="text-center my-6 text-neutral-400 font-medium  tracking-wider">
          We are sorry, but we do not have enough data on the name that you
          inputted, please try entering another name
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden flex gap-2 rounded-xl items-center justify-center bg-red-600 error-btn py-3 px-12 text-lg font-bold tracking-wider text-neutral-200"
          onClick={props.handleErrorClick}
        >
          <PiCursorClick />
          Try Again
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Error;
