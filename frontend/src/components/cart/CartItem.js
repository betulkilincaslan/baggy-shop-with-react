import React from "react";

const CartItem = () => {
  return (
    <tr className="border-b">
      <td className="py-4">
        <img
          className="w-[100px] h-[80px]"
          src="https://images.unsplash.com/photo-1566150902887-9679ecc155ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Cart Item"
        />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        Product Name
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <i className="bx bx-minus cursor-pointer p-1"></i>
        <input
          className="mx-2 border text-center w-10 px-2 py-1"
          type="text"
          value="1"
        />
        <i className="bx bx-plus cursor-pointer p-1"></i>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        30$
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        60$
      </td>
      <td className="text-lg md:text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <i className="bx bx-trash-alt cursor-pointer"></i>
      </td>
    </tr>
  );
};

export default CartItem;
