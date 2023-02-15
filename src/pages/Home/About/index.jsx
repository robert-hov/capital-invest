import React from "react";
import "./style.scss";
import {withI18n} from 'react-i18next'

const About = ({t}) => {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">
          <span>{t('about.title')}</span>
          <div />
        </h2>
        <span className="about__desc">
          {t('about.description')}
        </span>
      </div>
    </section>
  );
};

export default withI18n()(About);
