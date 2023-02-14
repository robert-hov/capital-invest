import React from "react";
import Hero from "../Home/Hero";
import Mail from "../Home/Mail";
import bgImg from "../../assets/hero/contact.jpg";
import Smm from "../Layout/Footer/Smm";
import "./style.scss";

const ContactPage = (props) => {
  return (
    <>
      <Hero other={true} bgImg={bgImg} text="Contacts" />
      <div className="contacts">
        <div className="page-container">
          <div className="contact__container">
            <div className="contact__content">
              <div className="contact__cards">
                <div className="contact__card contact__card--address">
                  <h3 className="contact__card-title">
                    <span>adress</span>
                    <div />
                  </h3>
                  <p className="contact__card-text">
                    ra Nairi zaryan street 17/1
                  </p>
                  <p className="contact__card-text">+374 98 99 99 99</p>
                  <span className="contact__card-mail">inquiry@sprec.com</span>
                </div>
                <div className="contact__card contact__card--smm">
                  <h3 className="contact__card-title">
                    <span>Social media</span>
                    <div />
                  </h3>
                  <div className="contact__card-smm">
                    <Smm />
                  </div>
                </div>
              </div>
            </div>
            <div className="contact__map"></div>
          </div>
        </div>
      </div>
      <Mail />
    </>
  );
};

export default ContactPage;
