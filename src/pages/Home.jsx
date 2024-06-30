import React from "react";
import { Link } from "react-router-dom";
import Marquee from "./Marquee";
import FeaturedProducts from "./FeaturedProducts";

const Home = () => {
  return (
    <>
      <div className="p-8">
        <div className="mt-20 text-container flex justify-between items-center">
          <h1 className="text-6xl font-poppins text-black w-[75%] leading-tight">
            Empower your home with sustainable energy solutions. Harness the
            power of the sun with our cutting-edge solar panels. 
          </h1>

          <div className="w-[25%] flex flex-col">
            <p className="text-lg font-poppins text-dark_gray mb-5 font-[400]">
              Welcome to Sunvolt power solutions Harnessing Clean Energy for a
              Sustainable Future. Explore our cutting-edge solar panels designed
              to power your world efficiently and sustainably
            </p>

            <Link className="w-[180px] h-[50px] border px-8 py-4 rounded-full font-poppins flex justify-center items-center hover:bg-blue hover:border-none hover:text-white hover:ease-linear hover:duration-300">
              View Products
            </Link>
          </div>
        </div>
        <div className="videos-container w-full flex justify-between items-center bg-red-400 h-[600px] mt-10 rounded-lg overflow-hidden">
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            src="https://videos.pexels.com/video-files/9310079/9310079-uhd_2560_1440_30fps.mp4"
          ></video>
        </div>
      </div>

      <Marquee />
      <FeaturedProducts />
    </>
  );
};

export default Home;
