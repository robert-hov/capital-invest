import React from "react";
import { Parallax } from "react-parallax";
import Button from "../../components/Button";
import "./style.scss";
import img from '../../../assets/hero/hero.png'

const Hero = (props) => {
  const title = 'Representing the world’s finest real estate'.split('')
  return (
    <Parallax strength={300}>
      <div className="hero">
        <div className="hero__img">
          <img src={img} alt="capital invest" />
        </div>
        <div className="hero__content">
          <h1 className="hero__title">
            {title.map((el, i) => {
              return (
                <span>
                  {el}
                </span>
              )
            })}
          </h1>
          <Button text="our projects" link="/" />
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;
