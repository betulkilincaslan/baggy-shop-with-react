import React from "react";
import LeftProductFilter from "components/product/LeftProductFilter";
import ProductBox from "components/product/ProductBox";

const ProductListScreen = () => {
  return (
    <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 md:max-w-4xl xl:max-w-6xl xl:grid-cols-4 container mx-auto">
      <div className="hidden md:block">
        <LeftProductFilter />
      </div>
      <div className="md:col-span-2 xl:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </div>
      </div>
    </div>
  );
};

export default ProductListScreen;
