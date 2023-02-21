import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarouselSlide } from "./CarouselSlide";

import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";

import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.styles.scss";

type Props = { title: string };
export const Carousel = ({ title }: Props) => {
  const slides: IProject[] = [...projects];
  const featuredSlides: IProject[] = slides.filter(slide => slide.details.incarousel).slice(0, 5);

  return (
    <>
      <div className="carouselTitle" data-aos="fade-up" data-aos-once="true">
        <h3>{title}</h3>
      </div>

      <div id="carousel" className="carousel">
        <div className="pagination" data-aos="fade-up" data-aos-once="true" />
        <div className="slides">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1.1}
            spaceBetween={14}
            navigation
            pagination={{
              el: ".pagination",
              clickable: true
            }}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            breakpoints={{
              1200: { slidesPerView: 2.1 },
              1920: { slidesPerView: 3.1 }
            }}
            initialSlide={0}
          >
            {featuredSlides.map((slide: IProject, index: number) => {
              return (
                <SwiperSlide key={index} data-aos="fade-up" data-aos-once="true">
                  <CarouselSlide {...slide} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};
