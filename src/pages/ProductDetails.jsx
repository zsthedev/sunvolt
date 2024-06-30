import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/data";

const ProductDetails = () => {
  const params = useParams();
  const selectedProduct = products[params.id - 1];

  return (
    <section className="w-full px-8 h-screen">
      <div className="container w-full mt-[150px] h-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="image-col w-full md:w-[49%] h-full">
          <img
            src={selectedProduct.mainImage}
            alt=""
            className="w-full bg-zinc-200 h-[60vh] md:h-[80vh] rounded-lg object-contain object-center"
          />
        </div>

        <div className="prod-desc w-full md:w-[45%] h-full text-center md:text-left flex flex-col gap-4">
          <span className="font-poppins text-orange text-base">
            {selectedProduct.brand}
          </span>
          <p className="name font-poppins text-2xl md:text-4xl font-semibold text-black">
            {selectedProduct.name}
          </p>
          <p className="description text-lg md:text-xl text-dark_gray font-poppins">
            {selectedProduct.description}
          </p>
          <p className="price text-blue font-poppins font-semibold text-2xl md:text-3xl">
            PKR {selectedProduct.price}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
