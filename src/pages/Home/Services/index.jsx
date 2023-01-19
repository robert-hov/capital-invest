import React from "react";
import { Navigation } from "swiper";
import ServicesSwiper from "./ServicesSwiper";
import "./style.scss";

const Services = (props) => {
  const slides = [
    {
      icon: "rocket",
      text: (
        <>
          Project
          <br /> Management
        </>
      ),
    },
    {
      icon: "law",
      text: <>Legal Services</>,
    },
    {
      icon: "mouthpiece",
      text: (
        <>
          Advertising
          <br /> Implementation
        </>
      ),
    },
    {
      icon: "buildings",
      text: "Creation, analysis and implementation of investment plans",
    },
    {
      icon: "analytics",
      text: (
        <>
          Financial
          <br /> Management
        </>
      ),
    },
    {
      icon: "paperWork",
      text: (
        <>
          Organizing and relying
          <br />
          on documentation
        </>
      ),
    },
    {
      icon: "percent",
      text: (
        <>
          Organization and <br />
          implementation of sales
        </>
      ),
    },
    {
      icon: "research",
      text: (
        <>
          Market research <br />
          and analysis
        </>
      ),
    },
  ];
  return (
    <section className="services">
      <div className="page-container">
        <h2 className="services__title">
          <span>services</span>
          <div />
        </h2>
        <ServicesSwiper content={slides} />
      </div>
    </section>
  );
};

export default Services;
