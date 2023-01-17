import React, { useRef } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarrouselSlide } from "./CarrouselSlide";

import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";

import "swiper/css";
import "swiper/css/pagination";
import "./Carrousel.styles.scss";

type Props = { title: string };
export const Carrousel = ({ title }: Props) => {
  const slides: IProject[] = [...projects];
  const featuredSlides: IProject[] = slides.filter(slide => slide.incarrousel).slice(0, 5);
  const carrouselRef = useRef<HTMLDivElement>(null);

  const circleRef = useRef<HTMLDivElement>(null);

  document.addEventListener("mousemove", function handleMouseMove(e) {
    if (circleRef && circleRef.current) {
      const scrollLeft =
        window.pageXOffset !== undefined
          ? window.pageXOffset
          : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
      const scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      circleRef.current.style.left = e.pageX - scrollLeft + "px";
      circleRef.current.style.top = e.pageY - scrollTop + "px";
    }
  });

  return (
    <>
      <div ref={carrouselRef} className="carrouselTitle">
        <h3>{title}</h3>
      </div>

      <div id="carrousel" className="carrousel">
        <div className="pagination" />
        <div className="slides">
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
