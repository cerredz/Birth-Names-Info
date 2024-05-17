import React from "react";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <nav className="z-10 fixed w-full bg-white flex flex-row justify-between items-center py-4 px-8 backdrop-blur-md nav-container">
      <div className="flex items-center justify-center gap-2 ">
        <h1 className="font-bold text-xl tracking-wider">NamesVerse</h1>
      </div>
    </nav>
  );
};

export default Navbar;
