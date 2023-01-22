import React from "react";
import { Parallax } from "react-parallax";
import Button from "../../components/Button";
import "./style.scss";

const Hero = ({
  bgImg,
  other = false,
  inner = false,
  withButton = false,
  text,
  btnText,
  logo,
}) => {
  const title = text.split("");
  return (
    <Parallax strength={300}>
      <div
        className={`hero${other ? " hero--other" : ""}${
          inner ? " hero--inner" : ""
        }`}
      >
        <div className="hero__img">
          <img src={bgImg} alt="capital invest" />
        </div>
        <div className="hero__content">
          {logo ? (
            <div className="hero__logo">
              <div className="img-container">
                <img src={logo} alt="logo" />
              </div>
            </div>
          ) : (
            <>
              <h1 className="hero__title">
                {title.map((el, i) => {
                  return <span key={i}>{el}</span>;
                })}
              </h1>
              {withButton ? <Button text={btnText} link="/" /> : null}
            </>
          )}
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;
