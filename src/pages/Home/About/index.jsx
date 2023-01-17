import React from "react";
import './style.scss'

const About = (props) => {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">Capital invest group</h2>
        <div className="about__line"></div>
        <span className="about__desc">
          operates in the field of real estate and business management in 4
          regions of the Republic of Armenia Yerevan, Tavush, Ararat and Kotayk.
        </span>
      </div>
    </section>
  );
};

export default About;
