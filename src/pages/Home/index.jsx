import React from "react";
import About from "./About";
import Advantages from "./Advantages";
import Hero from "./Hero";
import Mail from "./Mail";
import Partners from "./Partners";
import Projects from "./Projects";
import Services from "./Services";

const Home = (props) => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Advantages />
      <Partners />
      <Mail />
    </>
  );
};

export default Home;
