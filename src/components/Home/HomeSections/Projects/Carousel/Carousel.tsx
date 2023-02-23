import Lottie from "lottie-react";
import React, { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import dragCursor from "../../../../../assets/lottie-drag_cursor.json";
import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";
import { CarouselSlide } from "./CarouselSlide";

import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.styles.scss";

type Props = { title: string };

export const Carousel = ({ title }: Props) => {
  const featuredSlides: IProject[] = projects.filter(project => project.details.incarousel).slice(0, 5);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse movement events
  const handleMouseEnter = () => setIsMouseInside(true);
  const handleMouseLeave = () => setIsMouseInside(false);
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
      <div className="carouselTitle" data-aos="fade-up" data-aos-once="true">
        <h3>{title}</h3>
      </div>

      <div className="carousel">
        <div className="pagination" />
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
            loop
            pagination={{ el: ".pagination", clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              1200: { slidesPerView: 2.1 },
              1920: { slidesPerView: 3.1 }
            }}
            initialSlide={0}
          >
            {featuredSlides.map((slide: IProject, index: number) => (
              <SwiperSlide key={index}>
                <CarouselSlide {...slide} />
              </SwiperSlide>
            ))}
            {isMouseInside && (
              <Lottie
                animationData={dragCursor}
                loop={false}
                autoplay
                style={{
                  position: "fixed",
                  left: mousePosition.x - 35,
                  top: mousePosition.y - 18,
                  width: 106,
                  height: 106,
                  zIndex: 9999,
                  transition: "transform 0.1s ease-out",
                  pointerEvents: "none"
                }}
              />
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};
