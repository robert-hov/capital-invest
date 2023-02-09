import React from "react";
import Hero from "../Home/Hero";
import Mail from "../Home/Mail";
import bgImg from "../../assets/hero/hero.png";
import Button from "../components/Button";
import { useRef } from "react";
import "./style.scss";

const CareerPage = (props) => {
  const formRef = useRef();
  return (
    <>
      <Hero other={true} bgImg={bgImg} text="career" />
      <div className="career">
        <div className="page-container">
          <div className="career__container">
            <h2 className="career__title">
              <span>join to your dream team</span>
              <div />
            </h2>
            <form ref={formRef} className="career__form">
              <div className="career__input-container">
                <input
                  placeholder="Name Surname*"
                  type="text"
                  className="career__input"
                />
              </div>
              <div className="career__input-container">
                <input
                  placeholder="Jon position*"
                  type="text"
                  className="career__input"
                />
              </div>
              <div className="career__input-container">
                <input
                  placeholder="phone number*"
                  type="phone"
                  className="career__input"
                />
              </div>
              <div className="career__input-container">
                <input
                  placeholder="email*"
                  type="mail"
                  className="career__input"
                />
              </div>
              <div className="career__input-container">
                <input
                  placeholder="cV*"
                  type="file"
                  className="career__input"
                />
              </div>
              <Button color="black" text="send" click={() => console.log(formRef)} />
            </form>
          </div>
        </div>
      </div>
      <Mail />
    </>
  );
};

export default CareerPage;
