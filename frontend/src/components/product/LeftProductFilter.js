import React from "react";
import LeftProductFilterItem from "./LeftProductFilterItem";

const LeftProductFilter = () => {
  return (
    <div className="accordion" id="leftProductFilter">
      <LeftProductFilterItem />
      <LeftProductFilterItem />
      <LeftProductFilterItem />
    </div>
  );
};

export default LeftProductFilter;
