import React from "react";
import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";

const Home = (props) => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
    </>
  );
};

export default Home;
