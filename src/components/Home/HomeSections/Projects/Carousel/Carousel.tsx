import React, { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Lottie from "lottie-react";
import { CarouselSlide } from "./CarouselSlide";
import dragCursor from "../../../../../assets/1676471383.833592.json";
import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";

import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.styles.scss";

type Props = { title: string };
export const Carousel = ({ title }: Props) => {
  const slides: IProject[] = [...projects];
  const featuredSlides: IProject[] = slides.filter(slide => slide.incarousel).slice(0, 5);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
      <div className="carouselTitle">
        <h3>{title}</h3>
      </div>

      <div id="carousel" className="carousel">
        <div
          className="slides"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
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
                <SwiperSlide key={index}>
                  <CarouselSlide {...slide} />
                </SwiperSlide>
              );
            })}
            {isMouseInside ? (
              <Lottie
                animationData={dragCursor}
                loop={false}
                autoplay
                style={{
                  position: "fixed",
                  left: mousePosition.x + 1,
                  top: mousePosition.y,
                  width: 100,
                  height: 100,
                  zIndex: 10,
                  transition: "transform 0.01s ease-out"
                }}
              />
            ) : null}
          </Swiper>
        </div>
      </div>
    </>
  );
};
