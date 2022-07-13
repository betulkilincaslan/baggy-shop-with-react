import React from "react";
import ProductDetailTabs from "components/product/ProductDetailTabs";
import Rating from "components/product/Rating";

export const ProductDetailScreen = () => {
  return (
    <section className="py-12 text-center w-full h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)] mt-12 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center px-4 px-md-0 mb-12">
        <div>
          <img
            className="w-[300px] md:w-[500px]"
            src="https://images.unsplash.com/photo-1566150902887-9679ecc155ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Product Detail"
          />
        </div>
        <div className="flex flex-col gap-8 items-center md:items-start">
          <div className="flex flex-col gap-4 text-center md:text-start">
            <h1 className="text-xl md:text-2xl font-semibold">Product Name</h1>
            <Rating />
            <div className="font-medium">Price</div>
            <hr />
            <p className="text-sm leading-6 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
          </div>
          <div>
            <input
              type="number"
              min="1"
              max="10"
              value="1"
              className="p-2 w-16 h-12 focus:outline-none border rounded-md mr-4 border-rose-300"
            ></input>
            <button className="p-2 bg-rose-300 text-white w-40 h-12 rounded-md hover:bg-rose-400 transition-all duration-300">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 p-2">
        <ProductDetailTabs color="rose" />
      </div>
    </section>
  );
};
