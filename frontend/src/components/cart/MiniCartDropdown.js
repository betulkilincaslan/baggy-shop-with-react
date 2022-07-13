import React from "react";
import { Link } from "react-router-dom";
import MiniCartItem from "components/cart/MiniCartItem";

const MiniCartDropdown = ({ openMiniCart, closeMenusHandler }) => {
  return (
    <div
      className={`hidden min-w-max absolute top-8 -right-2 bg-white z-50 p-2 pb-4 shadow-lg ${
        openMiniCart ? "md:block" : "md:hidden"
      } max-h-[500px] overflow-auto min-w-[300px]`}
      aria-labelledby="dropdownLoginRegister"
    >
      <MiniCartItem />
      <MiniCartItem />
      <MiniCartItem />
      <div className="flex items-center justify-between p-2 mt-4">
        <span className="font-semibold">Total</span>
        <span className="font-semibold">$300</span>
      </div>
      <div className="p-2">
        <Link to="/cart">
          <button
            className="bg-gray-600 w-full py-1 text-gray-50 hover:bg-gray-500 transition-all duration-300"
            onClick={closeMenusHandler}
          >
            View Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MiniCartDropdown;
