import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import BannerData from "../../data/BannerData";

const Banner = () => {
  return (
    <section className="banner-section">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        style={{
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-theme-color": "blue",
          "--swiper-pagination-bullet-inactive-opacity": "0.7",
          "--swiper-navigation-size": "30px",
          "--swiper-navigation-background": "#000",
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={3000}
      >
        {BannerData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="banner">
              <img src={item.imageUrl} className="" alt="banner-image" />
              <div className="banner-overlay"></div>
            </div>
            <div className="container banner-container">
              <div className="banner-content">
                <h1>
                  <span>{item.slogan.split(" ").slice(0, 2).join(" ")}</span>
                  {item.slogan.split(" ").slice(2).join(" ")}
                </h1>
                <a href="#" className="button">
                  Click Here
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
