import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 bg-white w-full flex items-center justify-between px-8 py-4 border-b border-zinc-200">
      <div className="logo flex items-center gap-4">
        <img className="w-[50px]" src={logo} alt="Sunvolt Logo" />
        <p className="text-lg font-poppins font-medium text-black">
          Sunvolt Power Solution
        </p>
      </div>

      <div className="nav-links flex items-center gap-8">
        <Link to={"/"} className="text-dark_gray font-poppins hover:text-blue hover:ease-linear hover:duration-200">
          Home
        </Link>

        <Link to={"/products"} className="text-dark_gray font-poppins hover:text-blue hover:ease-linear hover:duration-200">
          Products
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
