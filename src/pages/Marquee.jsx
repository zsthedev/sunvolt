import React from "react";
import { marqueeImages } from "../utils/data";

const Marquee = () => {
  return (
    <div className="my-10 px-8 ">
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
