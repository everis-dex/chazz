import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarrouselSlide } from "./CarrouselSlide";

import projects from "../../../../../content/projects.json";
import { IProject } from "../../../../../interfaces/cms";

import "swiper/css";
import "swiper/css/pagination";
import "./Carrousel.styles.scss";

type Props = { title: string };
export const Carrousel = ({ title }: Props) => {
  const slides: IProject[] = [...projects];

  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={carouselRef} className="carouselTitle">
        <h3>{title}</h3>
      </div>

      <div id="carousel" className="carousel">
        <div className="pagination" />
        <div className="slides">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={2.2}
            spaceBetween={18}
            navigation
            pagination={{
              el: ".pagination",
              clickable: true
            }}
            loop
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false
            // }}
            breakpoints={{
              768: { slidesPerView: 2.1 },
              //   1024: { slidesPerView: 3.1 },
              //   1440: { slidesPerView: 2.1 }
            }}
            initialSlide={0}
          // slidesOffsetBefore={offset}
          >
            {slides.map((slide: IProject, index: number) => {
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
