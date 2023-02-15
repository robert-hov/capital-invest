import React from "react";
import "./style.scss";
import Hero from "../Home/Hero";
import Mail from "../Home/Mail";
import bgImg from "../../assets/hero/service.jpg";
import { serviceSlides } from "../../dev-data";
import {withI18n} from 'react-i18next';

const ServicePage = ({t}) => {
  return (
    <>
      <Hero other={true} text="hero.services" bgImg={bgImg} />
      <div className="service-page">
        <div className="page-container">
          <div className="service-page__container">
            <h2 className="service-page__title">
              Capital invest group offers you such services as
            </h2>
            <div className="service-card">
              <ul className="service-card__list">
                {serviceSlides.map((el, i) => {
                  return (
                    <li key={i} className="service-card__item">
                      <div className="service-card__item-container">
                        <div className="service-card__icon-container">
                          <div className="img-container">
                            <svg className="icon">
                              <use xlinkHref={`#${el.icon.hrefLink}`}></use>
                            </svg>
                          </div>
                        </div>
                        <h3 className="service-card__title">{t(el.content)}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Mail />
    </>
  );
};

export default withI18n()(ServicePage);
