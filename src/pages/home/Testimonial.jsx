import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import TestimonialData from "../../data/TestimonialData";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container testimonial-container">
        <h2>Testimonial</h2>
        <div className="testimonial-box">
          <Swiper
            modules={[Scrollbar, A11y, Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation={{
              clickable: true,
            }}
            style={{
              "--swiper-theme-color": "blue",
              "--swiper-pagination-bullet-inactive-opacity": "0.7",
              "--swiper-navigation-size": "25px",
            }}
            autoplay={{ delay: 5000 }}
          >
            {TestimonialData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-content">
                  <img src={item.imageUrl} alt={item.name} />
                  <p>{item.review}</p>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.profession}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
