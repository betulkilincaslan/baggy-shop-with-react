import React from "react";

const ProductBox = () => {
  return (
    <div className="flex flex-col bg-gray-100 shadow-md overflow-hidden w-max">
      <div className="relative w-[260px] group">
        <img
          src="https://images.unsplash.com/photo-1587467512961-120760940315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt="Bag"
          className="w-full object-cover"
        />
        <div className="absolute bottom-0 bg-rose-200 w-full h-0 opacity-0 group-hover:h-full group-hover:opacity-10 duration-300"></div>
        <button className="absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 bg-rose-600 px-2 py-3 opacity-0 group-hover:opacity-100 duration-300 text-slate-50 text-sm font-semibold">
          Add to Cart
        </button>
      </div>
      <div className="flex flex-col items-start gap-2 px-2 py-4">
        <h3>Product Name</h3>
        <p>Price</p>
      </div>
    </div>
  );
};

export default ProductBox;
