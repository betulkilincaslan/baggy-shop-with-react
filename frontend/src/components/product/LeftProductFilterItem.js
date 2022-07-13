import React, { useState } from "react";

const LeftProductFilterItem = () => {
  const [openCollapse, setOpenCollapse] = useState(false);
  const openCollapseHandler = () => {
    setOpenCollapse(!openCollapse);
  };
  return (
    <div className="bg-white border border-gray-200">
      <h2 className="mb-0" id="headingOne">
        <button
          onClick={openCollapseHandler}
          className="relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Category
        </button>
      </h2>
      <div
        id="collapseOne"
        className={`${openCollapse ? "block" : "hidden"} `}
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body py-4 px-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </div>
      </div>
    </div>
  );
};

export default LeftProductFilterItem;
