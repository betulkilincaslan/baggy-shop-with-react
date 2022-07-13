import React from "react";

const MiniCartItem = () => {
  return (
    <div className="flex items-center justify-between shadow-sm mb-2">
      <div className="flex items-center gap-4 p-2 w-80">
        <div>
          <img
            src="https://images.unsplash.com/photo-1587467512961-120760940315?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=435&amp;q=80"
            alt="Bag"
            className="w-20 h-20 object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-700">
            Product Name
          </span>
          <span className="text-sm text-gray-700">Quantity: 2</span>
          <span className="text-sm font-semibold text-gray-700">$30</span>
        </div>
      </div>
      <i className="bx bx-x p-2 text-medium text-gray-700"></i>
    </div>
  );
};

export default MiniCartItem;
