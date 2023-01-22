import React from 'react';
import Hero from '../Home/Hero';
import Mail from '../Home/Mail';
import bgImg from '../../assets/hero/hero.png'
import ServicesCards from './ServicesCards';
const ServicePage = props => {
  return (
    <>
      <Hero 
        other={true}
        text="services"
        bgImg={bgImg}
      />
      <ServicesCards />
      <Mail />
    </>
  );
};

export default ServicePage;