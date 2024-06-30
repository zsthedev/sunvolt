import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="w-full bg-blue px-8 flex flex-col justify-center items-center py-10">
      <div className="footer-container w-full flex justify-center items-center flex-col text-center border-b border-b-white pb-4">
        <div className="logo-container w-[33%]">
          <p className="logo text-white text-3xl font-poppins font-semibold mb-2">
            Sunvolt Power Solution
          </p>
          <p className="text-white font-poppins">
            Welcome to Sunvolt power solutions: Harnessing Clean Energy for a
            Sustainable Future. Explore our cutting-edge solar panels designed
            to power your world efficiently and sustainably, bringing innovation
            and eco-consciousness together under the sun
          </p>
        </div>

        <ul className="flex items-center gap-3 my-3">
          <li className="flex items-center gap-2">
            <MdOutlineMail className="text-white text-xl" />
            <Link
              className="text-white text-base font-poppins"
              to={"mailto:sunvoltpakistan@gmail.com"}
            >
              sunvoltpakistan@gmail.com
            </Link>
          </li>

          <li className="flex items-center gap-2">
            <FaWhatsapp className="text-white text-xl" />
            <Link
              target="_blank"
              className="text-white text-base font-poppins"
              to={"https://wa.me/+923185059779"}
            >
              +923185059779
            </Link>
          </li>

          <li className="flex items-center gap-2">
            <FaWhatsapp className="text-white text-xl" />
            <Link
              target="_blank"
              className="text-white text-base font-poppins"
              to={"https://wa.me/+923185059779"}
            >
              +923185059779
            </Link>
          </li>

          <li className="flex items-center gap-2">
            <MdOutlineLocationOn className="text-white text-xl" />
            <Link target="_blank" className="text-white text-base font-poppins">
              Office 101 , Israr Plaza , Lane 5 , Main Peshawar Road Rawalpindi
            </Link>
          </li>
        </ul>
      </div>

      <p className="mt-4 text-white font-poppins">
        All Rights Reserved by Sunvolt Power Solution 2024
      </p>
    </footer>
  );
};

export default Footer;
