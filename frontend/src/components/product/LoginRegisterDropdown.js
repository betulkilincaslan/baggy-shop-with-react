import React from "react";
import { Link } from "react-router-dom";

const LoginRegisterDropdown = ({ openDropdown, setOpenDropdown }) => {
  return (
    <ul
      className={`hidden min-w-max absolute top-8 -left-8 bg-white z-50 py-2 shadow-lg ${
        openDropdown ? "md:block" : "md:hidden"
      }`}
      aria-labelledby="loginRegisterDropdown"
    >
      <li>
        <Link
          to="/login"
          onClick={() => {
            setOpenDropdown(false);
          }}
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          onClick={() => {
            setOpenDropdown(false);
          }}
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
        >
          Register
        </Link>
      </li>
    </ul>
  );
};

export default LoginRegisterDropdown;
