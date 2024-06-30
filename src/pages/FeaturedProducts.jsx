import React from "react";
import Product from "../components/Product";
import { products } from "../utils/data";

const FeaturedProducts = () => {
  return (
    <section className="w-full px-8">
      <div className="text-container text-center flex flex-col items-center">
        <span className="heading-span mb-4">Selected Products</span>
        <h2 className="heading">Featured Products</h2>
      </div>

      <div className="my-10 products-row w-full flex justify-between items-center flex-wrap">
        {products && products.length > 0
          ? products
              .filter((f) => f.isFeatured == true)
              .map((p, index) => (
                <Product
                  title={p.name}
                  price={p.price}
                  id={index + 1}
                  image={p.mainImage}
                />
              ))
          : ""}
      </div>
    </section>
  );
};

export default FeaturedProducts;
