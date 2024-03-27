"use client";

import React, { useState, useRef } from "react";
import HeroSection from "./components/home/heroSection";
import Services from "./components/home/services";
import About from "./components/home/about";
import DrawerAppBar from "./components/header/header";
import Footer from "./components/footer/footer";
import TechnologyIndex from "./components/home/technologyIndex";
import EngagementPlan from "./components/home/engagementPlan";
import RequestQuote from "./components/home/requestQuotes";
import ScrollToTopButton from "./components/general/scrollToTopBtn";
import ProjectsIndex from "./components/home/projectsIndex";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const footerRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection("services");
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection("about");
  };

  const scrollToBottom = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection("footer");
  };

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection("home");
  };

  return (
    <>
      <DrawerAppBar
        scrollToServices={scrollToServices}
        scrollToAbout={scrollToAbout}
        scrollToBottom={scrollToBottom}
        scrollToHome={scrollToHome}
        activeSection={activeSection}
      />
      <ScrollToTopButton />
      <div ref={homeRef}>
        <HeroSection />
      </div>
      <TechnologyIndex />
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <EngagementPlan />
      <div ref={footerRef}>
        <RequestQuote />
      </div>
      <Footer />
    </>
  );
};

export default Home;
