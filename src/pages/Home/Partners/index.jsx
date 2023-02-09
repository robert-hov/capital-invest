import React from "react";
import "./style.scss";
import abb from "../../../assets/img/partners/abb.png";
import projectShin from "../../../assets/img/partners/projectShin.png";
import legal from "../../../assets/img/partners/legal.png";
import tsaghkadzorLogo from "../../../assets/img/partners/tsaghkadzorLogo.png";
import dilijanLogo from "../../../assets/img/partners/dilijanLogo.png";
import PartnersSwiper from "./PartnersSwiper";

const Partners = (props) => {
  const slides = [
    {
      img: abb,
      link: "/",
      alt: "abb logo",
    },
    {
      img: projectShin,
      link: "/",
      alt: "project shin logo",
    },
    {
      img: legal,
      link: "/",
      alt: "legal logo",
    },
    {
      img: tsaghkadzorLogo,
      link: "/",
      alt: "Tsaghkadzor Hills logo",
    },
    {
      img: dilijanLogo,
      link: "/",
      alt: "Dilijan Hills logo",
    },
  ];
  return (
    <section className="partners">
      <div className="page-container">
        <div className="partners__container">
          <h2 className="partners__title">
            <span>partners</span>
            <div />
          </h2>
          <PartnersSwiper content={slides} />
        </div>
      </div>
    </section>
  );
};

export default Partners;
