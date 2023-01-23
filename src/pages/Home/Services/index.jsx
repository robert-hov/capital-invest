import React from "react";
import ServicesSwiper from "./ServicesSwiper";
import "./style.scss";
import law from "../../../assets/img/swiper/law.svg";
import mouthpiece from "../../../assets/img/swiper/mouthpiece.svg";
import percent from "../../../assets/img/swiper/percent.svg";
import research from "../../../assets/img/swiper/research.svg";
import paperWork from "../../../assets/img/swiper/paperWork.svg";
import analytics from "../../../assets/img/swiper/analytics.svg";
import rocket from "../../../assets/img/swiper/rocket.svg";
import buildings from "../../../assets/img/swiper/buildings.svg";
import ButtonSecondary from "../../components/ButtonSecondary";

const Services = (props) => {
  const slides = [
    {
      icon: {
        img: rocket,
        text: "rocket",
      },
      text: (
        <>
          Project
          <br /> Management
        </>
      ),
    },
    {
      icon: {
        img: law,
        text: "law",
      },
      text: <>Legal Services</>,
    },
    {
      icon: {
        img: mouthpiece,
        text: "mouthpiece",
      },
      text: (
        <>
          Advertising
          <br /> Implementation
        </>
      ),
    },
    {
      icon: {
        img: buildings,
        text: "buildings",
      },
      text: "Creation, analysis and implementation of investment plans",
    },
    {
      icon: {
        img: analytics,
        text: "analytics",
      },
      text: (
        <>
          Financial
          <br /> Management
        </>
      ),
    },
    {
      icon: {
        img: paperWork,
        text: "paper work",
      },
      text: (
        <>
          Organizing and relying
          <br />
          on documentation
        </>
      ),
    },
    {
      icon: {
        img: percent,
        text: "percent",
      },
      text: (
        <>
          Organization and <br />
          implementation of sales
        </>
      ),
    },
    {
      icon: {
        img: research,
        text: "research",
      },
      text: (
        <>
          Market research <br />
          and analysis
        </>
      ),
    },
  ];
  return (
    <>
    <section className="services">
      <div className="page-container">
        <h2 className="services__title">
          <span>services</span>
          <div />
        </h2>
        <ServicesSwiper content={slides} />
      </div>
    </section>
        <ButtonSecondary text="See more" link="/services" />
        </>
  );
};

export default Services;
