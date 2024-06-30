import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/data";

const ProductDetails = () => {
  const params = useParams();
  const selectedProduct = products[params.id - 1];

  return (
    <section className="w-full px-8 h-screen">
      <div className="container w-full mt-[150px] h-[80vh] flex justify-between items-center">
        <div className="image-col w-[49%] h-full">
          <img
            src={selectedProduct.mainImage}
            alt=""
            className="w-full bg-zinc-200 h-[80vh] rounded-lg object-contain object-center"
          />
        </div>

        <div className="prod-desc w-[45%] h-full text-center flex flex-col gap-2">
          <span className="font-poppins text-orange font-base">
            {selectedProduct.brand}
          </span>
          <p className="name font-poppins text-4xl font-semibold text-black">{selectedProduct.name}</p>
          <p className="name font-xl text-dark_gray font-poppins">
            {selectedProduct.description}
          </p>
          <p className="name text-blue font-poppins font-semibold text-3xl">
            PKR {selectedProduct.price}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
