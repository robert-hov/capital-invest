import React from "react";
import { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "./style.scss"

const Services = (props) => {
  return (
    <section className="services">
      <div className="page-container">
        <h2 className="services__title">
          <span>services</span>
          <div/>
        </h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={4}
          className="projects__swiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
