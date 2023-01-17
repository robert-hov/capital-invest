import React from "react";
import { Parallax } from "react-parallax";
import Button from "../../components/Button";
import "./style.scss";
import background from '../../../assets/hero/hero.png'

const Hero = (props) => {
  return (
    <Parallax bgImage={background} strength={300}>
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Representing the world’s finest real estate
          </h1>
          <Button text="our projects" link="/" />
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;
