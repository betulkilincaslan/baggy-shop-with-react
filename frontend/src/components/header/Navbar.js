import React, { useState } from "react";
import { Link } from "react-router-dom";
import MiniCartDropdown from "components/cart/MiniCartDropdown";
import LoginRegisterDropdown from "components/product/LoginRegisterDropdown";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMiniCart, setOpenMiniCart] = useState(false);

  const openSidebarHandler = () => {
    setOpenSidebar(!openSidebar);
  };

  const openDropdownHandler = (e) => {
    e.preventDefault();
    if (window.innerWidth >= 768) {
      setOpenDropdown(!openDropdown);
    }
  };

  const openMiniCartHandler = (e) => {
    e.preventDefault();
    if (window.innerWidth >= 768) {
      setOpenMiniCart(!openMiniCart);
    }
  };

  const closeMenusHandler = () => {
    setOpenSidebar(false);
    setOpenDropdown(false);
    setOpenMiniCart(false);
  };

  return (
    <header className="w-full fixed top-0 inset-x-0 z-100 bg-gray-100 z-50">
      <nav className="h-12 flex items-center justify-between container mx-auto max-w-7xl px-4 md:px-10 md:h-16">
        <div>
          <Link to="/" onClick={closeMenusHandler} className="font-bold">
            Baggy Shop
          </Link>
        </div>
        <div id="nav-menu" className="md:ml-auto">
          <ul
            className={`fixed top-12 w-4/5 h-full p-8 bg-gray-100 transition-all duration-500 ${
              openSidebar ? "right-0" : "-right-full"
            } flex flex-col gap-8 md:static md:flex-row md:items-center md:bg-transparent md:py-0`}
          >
            <li className="">
              <Link
                to="/"
                className="font-semibold hover:text-gray-700"
                onClick={closeMenusHandler}
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                to="/products"
                className="font-semibold hover:text-gray-700"
                onClick={closeMenusHandler}
              >
                Shop
              </Link>
            </li>
            <li>
              <div className="relative flex items-center">
                <a
                  className="font-semibold"
                  href="/#"
                  onClick={(e) => {
                    openDropdownHandler(e);
                    setOpenMiniCart(false);
                  }}
                  type="button"
                  id="loginRegisterDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bx bx-user-circle text-2xl text-gray-800"></i>
                </a>
                <LoginRegisterDropdown
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                />
                <div className="flex items-center md:hidden">
                  <Link
                    to="/login"
                    onClick={closeMenusHandler}
                    className="px-2 font-semibold hover:text-gray-700"
                  >
                    Login
                  </Link>
                  <span>/</span>
                  <Link
                    to="/register"
                    onClick={closeMenusHandler}
                    className="px-2 font-semibold hover:text-gray-700"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex">
          <div className="relative">
            <a
              className="font-semibold"
              href="/#"
              onClick={(e) => {
                openMiniCartHandler(e);
                setOpenDropdown(false);
              }}
              type="button"
              id="miniCartDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="relative">
                <i className="bx bx-shopping-bag text-2xl mr-4 md:mr-0 cursor-pointer text-gray-800"></i>
                <span className="absolute text-gray-800  px-2 py-1 text-medium font-bold -top-5 md:-right-4 right-0">
                  1
                </span>
              </span>
            </a>
            <MiniCartDropdown
              openMiniCart={openMiniCart}
              closeMenusHandler={closeMenusHandler}
            />
          </div>
          <i
            className="bx bx-grid-alt text-2xl text-gray-800 cursor-pointer md:hidden"
            onClick={openSidebarHandler}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
