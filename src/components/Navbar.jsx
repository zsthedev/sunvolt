import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 bg-white w-full flex items-center justify-between px-8 py-4 border-b border-zinc-200">
      <div className="logo flex items-center gap-4">
        <img className="w-[50px]" src={logo} alt="Sunvolt Logo" />
        <p className="text-lg font-poppins font-medium text-black hidden md:block">
          Sunvolt Power Solution
        </p>
      </div>

      <div className="hidden md:flex nav-links items-center gap-8">
        <Link
          to={"/"}
          className="text-dark_gray font-poppins hover:text-blue hover:ease-linear hover:duration-200"
        >
          Home
        </Link>
        <Link
          to={"/products"}
          className="text-dark_gray font-poppins hover:text-blue hover:ease-linear hover:duration-200"
        >
          Products
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t border-zinc-200">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link
              to={"/"}
              className="text-dark_gray font-poppins hover:text-blue hover:ease-linear hover:duration-200"
            >
              Home
            </Link>
            <Link
              to={"/products"}
              className="text-dark_gray font-poppins hover:text-blue hover:ease-linear hover:duration-200"
            >
              Products
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
