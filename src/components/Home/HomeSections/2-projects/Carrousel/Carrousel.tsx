import React, { useRef, useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarrouselSlide } from "./CarrouselSlide";

import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";

import "swiper/css";
import "swiper/css/pagination";
import "./Carrousel.styles.scss";

type Limits = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

type Props = { title: string };
export const Carrousel = ({ title }: Props) => {
  const slides: IProject[] = [...projects];
  const featuredSlides: IProject[] = slides.filter(slide => slide.incarrousel).slice(0, 5);
  const carrouselRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [limits, setLimits] = useState<Limits>();

  useEffect(() => {
    if (carrouselRef && carrouselRef.current) {
      var rect = carrouselRef.current.getBoundingClientRect();
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      let limits = {
        top: rect.top + scrollTop,
        bottom: rect.top + scrollTop + rect.height * 4,
        left: rect.left + scrollLeft,
        right: rect.left + scrollLeft + rect.width
    }
  }, [carrouselRef]);

  document.addEventListener("mousemove", function handleMouseMove(e) {
    if (limits && circleRef && circleRef.current) {
      circleRef.current.style.left = Math.max(Math.min(e.pageX, limits.right - 106), 53) + "px";
      circleRef.current.style.top = Math.max(Math.min(e.pageY, limits.bottom - 106), 53) + "px";
    }
  });

  return (
    <>
      <div className="carrouselTitle">
        <h3>{title}</h3>
      </div>

      <div id="carrousel" className="carrousel">
        <div className="pagination" />
        <div className="slides" ref={carrouselRef}>
          <div id="circle" ref={circleRef}>
            <span className="hover-text">Drag</span>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1.1}
            spaceBetween={18}
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
              1280: { slidesPerView: 2.1 },
              1920: { slidesPerView: 3.1 }
            }}
            initialSlide={0}
          >
            {featuredSlides.map((slide: IProject, index: number) => {
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
