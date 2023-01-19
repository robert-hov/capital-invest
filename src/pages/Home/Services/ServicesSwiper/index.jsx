import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "./style.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ServicesSwiper = ({ content }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView={4}
      spaceBetween={40}
      onSlideChange={() => console.log('slide change')}
      className="services__swiper"
    >
      {content.map((el, i) => {
        return (
          <SwiperSlide key={i} className="services__slide">
            <div className="services__slide-content">
              <div
                className={`services__slide-img services__slide-img--${el.icon}`}
              >
                <div className="img-container">
                  <svg className="icon">
                    <use xlinkHref={`#${el.icon}`} />
                  </svg>
                </div>
              </div>
              <span className="services__slide-text">{el.text}</span>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServicesSwiper;
