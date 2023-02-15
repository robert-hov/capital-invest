import React, { useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "./style.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper";
import {withI18n} from 'react-i18next'

const ServicesSwiper = ({ content, t }) => {
  const swiperRef = useRef();
  const [disabled, setDisabled] = useState({ isBeggining: true, isEnd: false });

  return (
    <>
      <div className="services__swiper-container">
        <button
          className={`services__swiper-button services__swiper-button-prev${
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
          slidesPerView={3}
          spaceBetween={40}
          pagination={true}
          modules={[Pagination]}
          onSlideChange={(swiper) => {
            setDisabled({
              isEnd: swiper.isEnd,
              isBeggining: swiper.isBeginning,
            });
          }}
          className="services__swiper"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            512: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {content.map((el, i) => {
            return (
              <SwiperSlide key={i} className="services__slide">
                <div className="services__slide-content">
                  <div className={`services__slide-img`}>
                    <div className="img-container">
                      <svg className="icon">
                        <use xlinkHref={`#${el.icon?.hrefLink}`}></use>
                      </svg>
                    </div>
                  </div>
                  <div className="services__slide-text-contianer">
                    <span className="services__slide-text">{t(el.content)}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className={`services__swiper-button services__swiper-button-next${
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
    </>
  );
};

export default withI18n()(ServicesSwiper);
