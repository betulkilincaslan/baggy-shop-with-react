import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductBox from "components/product/ProductBox";

const NevArrival = () => {
  return (
    <section className="py-12 text-center max-w-xl lg:max-w-4xl xl:max-w-6xl container mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-8">Nev Arrival</h2>

      <Splide
        tag="section"
        options={{
          rewind: true,
          perPage: 4,
          gap: "1rem",
          breakpoints: {
            1024: {
              perPage: 3,
            },
            820: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          <ProductBox />
        </SplideSlide>
        <SplideSlide>
          <ProductBox />
        </SplideSlide>
        <SplideSlide>
          <ProductBox />
        </SplideSlide>
        <SplideSlide>
          <ProductBox />
        </SplideSlide>
        <SplideSlide>
          <ProductBox />
        </SplideSlide>
        <SplideSlide>
          <ProductBox />
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default NevArrival;
