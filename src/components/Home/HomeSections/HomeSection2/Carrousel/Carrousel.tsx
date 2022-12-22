import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarrouselSlide } from "./CarrouselSlide";

import projects from "../../../../../content/projects.json";
import { Project } from "../../../../../interfaces/interfaces";

import "swiper/css";
import "swiper/css/pagination";
import "./Carrousel.styles.scss";

export const Carrousel = () => {
  const slides: Project[] = [...projects];

  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const carouselWidth: number = carouselRef != null && carouselRef.current ? carouselRef.current.offsetWidth : 0;
    setCarouselWidth(carouselWidth);

    setOffset((windowWidth - carouselWidth) / 2 - 20);
  }, [carouselWidth, windowWidth]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    setOffset(windowWidth - carouselWidth - 20);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth, carouselWidth]);

  useEffect(() => {
    const carouselWidth: number = carouselRef != null && carouselRef.current ? carouselRef.current.offsetWidth : 0;
    setCarouselWidth(carouselWidth);

    setOffset((windowWidth - carouselWidth) / 2 - 14);
  }, [windowWidth]);

  return (
    <>
      <div ref={carouselRef} className="carouselTitle">
        <h3>Featured projects</h3>
      </div>

      <div id="carousel" className="carousel">
        <div className="pagination" />
        <div className="slides">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={2.1}
            spaceBetween={18}
            navigation
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
              768: { slidesPerView: 1.1 },
              1024: { slidesPerView: 3.1 },
              1440: { slidesPerView: 2.1 }
            }}
            initialSlide={0}
            slidesOffsetBefore={offset}
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
