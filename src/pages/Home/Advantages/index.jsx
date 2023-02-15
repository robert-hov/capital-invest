import React from "react";
import tsaghkadzor from "../../../assets/img/advantages/tsaghkadzor.png";
import "./style.scss";
import {withI18n} from 'react-i18next'

const Advantages = ({t}) => {
  return (
    <section className="advantages">
      <div className="page-container">
        <div className="advantages__container">
          <h2 className="advantages__title">
            <span>{t('advantage.title')}</span>
            <div />
          </h2>
          <div className="advantages__content">
            <ol className="advantages__text-container">
              <li className="advantages__text">{t('advantage.texts.text1')}</li>
              <li className="advantages__text">{t('advantage.texts.text2')}</li>
              <li className="advantages__text">{t('advantage.texts.text3')}</li>
            </ol>
            <div className="advantages__img">
              <div className="img-container">
                <img src={tsaghkadzor} alt="advantage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withI18n()(Advantages);
