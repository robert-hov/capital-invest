import React from 'react';
import Hero from '../Home/Hero';
import Mail from '../Home/Mail';
import bgImg from '../../assets/hero/hero.png'

const CareerPage = props => {
  return (
    <>
      <Hero
        other={true}
        bgImg={bgImg}
        text="career"
      />
      <Mail />
    </>
  );
};

export default CareerPage;