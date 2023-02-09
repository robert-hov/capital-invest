import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "./style.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper";
import { useState, useRef } from "react";

const PartnersSwiper = ({content}) => {
  const swiperRef = useRef();
  const [disabled, setDisabled] = useState({ isBeggining: true, isEnd: false });

  return (
    <div className="partners__swiper-container">
      <button
        className={`partners__swiper-button partners__swiper-button-prev${
          disabled.isBeggining ? " disabled" : ""
        }`}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <span className="img-container">
          <svg className="icon">
            <use xlinkHref="#arrowLeft"></use>
          </svg>
        </span>
      </button>
      <Swiper
        loop={true}
        onSlideChange={(swiper) => {
          setDisabled({
            isEnd: swiper.isEnd,
            isBeggining: swiper.isBeginning,
          });
        }}
        className="partners__swiper"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={true}
        modules={[Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 4.2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1150: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {content.map((el, i) => {
          return (
            <SwiperSlide key={i} className="partners__slide">
              <a href={el.link} className="partners__slide-img">
                <span className="img-container">
                  <img src={el.img} alt={el.alt} />
                </span>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        className={`partners__swiper-button partners__swiper-button-next${
          disabled.isEnd ? " disabled" : ""
        }`}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <span className="img-container">
          <svg className="icon">
            <use xlinkHref="#arrowRight"></use>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default PartnersSwiper;
