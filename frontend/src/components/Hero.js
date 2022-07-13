import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Hero = () => {
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1575671153502-a417e2ddd259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      alt: "Bag 1",
    },
    {
      src: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80",
      alt: "Bag 2",
    },
    {
      src: "https://images.unsplash.com/photo-1615206928955-ce0ffbb7ca5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      alt: "Bag 3",
    },
  ];
  return (
    <Splide
      tag="section"
      options={{
        rewind: true,
        gap: "1rem",
      }}
    >
      {heroImages.map((item) => (
        <SplideSlide key={item.alt}>
          <img
            className="w-full h-[100%] lg:h-[calc(100vh-4rem)]"
            src={item.src}
            alt={item.alt}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Hero;
