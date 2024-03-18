import React from "react";
import HeroSection from "./components/home/heroSection";
import Services from "./components/home/services";
import About from "./components/home/about";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <About />
    </>
  );
};

export default Home;
