import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <section className="py-12 w-full min-h-max">
      <div className="w-full max-w-sm m-auto bg-gray-100 rounded px-6 py-10">
        <h1 className="text-center font-semibold mb-3 tracking-wide">
          Register
        </h1>
        <form>
          <div>
            <label className="block mb-2 text-gray-600 text-sm" for="username">
              Username
            </label>
            <input
              className="w-full p-2 mb-6 text-gray-700 border-b-2 border-gray-500 outline-none focus:bg-gray-300"
              type="text"
              name="username"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600 text-sm" for="email">
              Email
            </label>
            <input
              className="w-full p-2 mb-6 text-gray-700 border-b-2 border-gray-500 outline-none focus:bg-gray-300"
              type="email"
              name="email"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600 text-sm" for="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-gray-700 border-b-2 border-gray-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
            />
          </div>
          <div>
            <input
              className="w-full bg-gray-600 hover:bg-rose-400 text-white font-bold py-2 px-4 mb-6 rounded tracking-wide transition-all duration-300"
              type="submit"
            />
          </div>
        </form>
        <footer>
          <a
            className="text-gray-700 hover:text-rose-400 text-sm float-left"
            href="/#"
          >
            Forgot Password?
          </a>
          <Link
            className="text-gray-700 hover:text-rose-400 text-sm float-right"
            to="/login"
          >
            Login
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default RegisterScreen;
