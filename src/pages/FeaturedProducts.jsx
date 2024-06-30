import React from "react";
import Product from "../components/Product";
import { products } from "../utils/data";

const FeaturedProducts = () => {
  return (
    <section className="w-full px-8">
      <div className="text-container text-center flex flex-col items-center">
        <span className="heading-span mb-4 text-xl font-medium text-blue-500">
          Selected Products
        </span>
        <h2 className="heading text-3xl font-bold text-gray-800">
          Featured Products
        </h2>
      </div>

      <div className="my-10 products-row w-full flex flex-wrap justify-center md:justify-between items-center gap-8">
        {products && products.length > 0
          ? products
              .filter((f) => f.isFeatured === true)
              .map((p, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]"
                >
                  <Product
                    title={p.name}
                    price={p.price}
                    id={index + 1}
                    image={p.mainImage}
                  />
                </div>
              ))
          : ""}
      </div>
    </section>
  );
};

export default FeaturedProducts;
