import React from "react";
import ServicesSwiper from "./ServicesSwiper";
import "./style.scss";
import ButtonSecondary from "../../components/ButtonSecondary";
import { serviceSlides } from "../../../dev-data";
import {withI18n} from 'react-i18next';

const Services = ({t}) => {
 
  return (
    <>
      <section className="services">
        <div className="page-container">
          <h2 className="services__title">
            <span>{t('services.title')}</span>
            <div />
          </h2>
          <ServicesSwiper content={serviceSlides} />
        </div>
      </section>
      {/*  TODO: Button- e mobile i jamanak darna spitak*/}
      <ButtonSecondary text={t('buttons.secondary')} link="/services" />
    </>
  );
};

export default withI18n()(Services);
