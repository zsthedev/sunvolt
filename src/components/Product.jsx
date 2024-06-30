import React from "react";
import { Link } from "react-router-dom";

const Product = ({ image, title, description, id, price }) => {
  return (
    <div className=" w-[49.5%] h-[65vh] rounded-xl relative overflow-hidden mb-6">
      <img
        src={image}
        alt=""
        className="w-full h-full object-contain object-center bg-zinc-200"
      />
      <Link
        to={`/product/${id}`}
        className="overlay p-10 w-full h-full backdrop-blur-2xl opacity-0 hover:opacity-100 hover:duration-200 hover:ease-linear  absolute top-0 left-0 flex justify-start items-end"
      >
        <div className="text text-black flex flex-col gap-2">
          <p className="text-4xl font-poppins font-semibold text-black">
            {title}
          </p>
          <p className="text-2xl font-poppins font-semibold text-blue">
            PKR {price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
