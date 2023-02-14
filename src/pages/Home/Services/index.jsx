import React from "react";
import ServicesSwiper from "./ServicesSwiper";
import "./style.scss";
import ButtonSecondary from "../../components/ButtonSecondary";
import { serviceSlides } from "../../../dev-data";

const Services = (props) => {
 
  return (
    <>
      <section className="services">
        <div className="page-container">
          <h2 className="services__title">
            <span>services</span>
            <div />
          </h2>
          <ServicesSwiper content={serviceSlides} />
        </div>
      </section>
      {/*  TODO: Button- e mobile i jamanak darna spitak*/}
      <ButtonSecondary text="See more" link="/services" />
    </>
  );
};

export default Services;
