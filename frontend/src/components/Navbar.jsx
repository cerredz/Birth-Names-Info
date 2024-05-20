import React from "react";
import "../styles/navbar.css";
import logo from "../images/saturn.png";
import { LuMail } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="z-10 fixed w-full  flex flex-row justify-between items-center pb-4 pt-6 px-[5%] backdrop-blur-md nav-container">
      <div className="flex items-center justify-center gap-2 ">
        <img src={logo} alt="universe" className="w-[50px]"></img>
        <h1 className="font-bold text-xl tracking-wider">NamesVerse</h1>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className=" items-center justify-center gap-2 hidden sm:flex">
          <LuMail className="text-neutral-800 text-md" />

          <p className="text-md font-medium text-neutral-800 tracking-wider">
            retto12345678@gmail.com
          </p>
        </div>
        <span className="w-[3px] rounded-2xl h-8 bg-neutral-300"></span>
        {/* GITHUB BUTTON */}
        <Link
          to={"https://github.com/cerredz/Birth-Names-Info"}
          target="_blank"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-md bg-green-400 github-btn cursor-pointer hover:bg-green-500 transition duration-200 hover:transition hover:duration-200"
          >
            <FaGithub className="text-lg" />
          </motion.div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
