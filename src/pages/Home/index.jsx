import React from "react";
import About from "./About";
import Advantages from "./Advantages";
import Hero from "./Hero";
import Mail from "./Mail";
import Partners from "./Partners";
import Projects from "./Projects";
import Services from "./Services";
import homeImg from "../../assets/hero/hero.png"

const Home = (props) => {
  return (
    <>
      <Hero 
        withIcon={true}
        withButton={true}
        btnText="our projects"
        text="Representing the world’s finest real estate"
        bgImg={homeImg}
      />
      <About />
      <Projects />
      <Services />
      <Advantages />
      <Partners />
      <Mail bgColor="var(--primary-fifth)"/>
    </>
  );
};

export default Home;
