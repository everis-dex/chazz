import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarrouselSlide } from "./CarrouselSlide";

import projects from "../../../../../content/projects.json";
import { Project } from "../../../../../interfaces/interfaces";

// import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "./Carrousel.styles.scss";

export const Carrousel = () => {
  const slides: Project[] = [...projects];

  return (
    <>
      <div className="carouselTitle">
        <h3>Featured projects</h3>
      </div>

      <div className="carousel">
        <div className="pagination" />
        <div className="slides">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              el: ".pagination",
              clickable: true
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1
              },
              "@1.00": {
                slidesPerView: 2
              },
              "@1.50": {
                slidesPerView: 3
              }
            }}
          >
            {slides.map((slide: Project, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <CarrouselSlide {...slide} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};
