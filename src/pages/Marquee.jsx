import React from "react";
import { marqueeImages } from "../utils/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Marquee = () => {
  useGSAP(() => {
    gsap.to(".logo-row", {
      xPercent: -100,
      duration: 10,
      repeat: -1,
      ease: "linear"
    });
  }, []);
  return (
    <div className="my-10 px-8 overflow-hidden whitespace-nowrap">
      <div className="logo-row flex w-full gap-10">
        {marqueeImages && marqueeImages.length > 0
          ? marqueeImages.map((i, index) => (
              <img
                src={i.image}
                alt=""
                className="w-[120px] object-contain object-center"
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Marquee;
