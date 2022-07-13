import React from "react";
import Featured from "components/Featured";
import Hero from "components/Hero";
import NevArrival from "components/NevArrival";

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto max-w-7xl">
        <NevArrival />
        <Featured />
      </div>
    </>
  );
};

export default HomeScreen;
