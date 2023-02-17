import React, { useState, useEffect, useRef } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarouselSlide } from "./CarouselSlide";

import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";

import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.styles.scss";

// const urlBase = window.origin + "/uploads/";
const urlBase = window.origin + "/uploads/animations/";
const sequence = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'];
const velocidad = 50;

type Props = { title: string };
export const Carousel = ({ title }: Props) => {
  const slides: IProject[] = [...projects];
  const featuredSlides: IProject[] = slides.filter(slide => slide.details.incarousel).slice(0, 5);

  const [cursorState, setCursorState] = useState<string>("");
  const [counter, setCounter] = useState(0);

  const animatedCursorRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    if (cursorState === "Enter") {
      for (let numero = 0; numero < sequence.length; numero++) {
        setTimeout(() => {
          setCounter(counter + 1);
        }, velocidad);
      }
      setTimeout(() => {
        setCursorState("Stay");
      }, sequence.length * velocidad);
    }

    if (cursorState === "Stay") {
      setCounter(sequence.length - 1);
    }

    if (cursorState === "Leave") {
      for (let numero = 0; numero < sequence.length; numero++) {
        setTimeout(() => {
          setCounter(counter - 1);
        }, velocidad);
      }
      setTimeout(() => {
        setCursorState("Out");
      }, sequence.length * velocidad);
    }

    if (cursorState === "Out") {
      setCounter(0);
    }

  }, [cursorState, setCursorState, counter, setCounter]);



  return (
    <>
      <div className="carouselTitle">
        <div style={{ position: "absolute" }} ref={animatedCursorRef}><img src={urlBase + "icon-drag_pointer-in-" + sequence[counter] + ".png"}></img></div>
        <h3>{counter}</h3>
        <h3>{title}</h3>
      </div>

      <div
        id="carousel"
        className="carousel"
        onMouseEnter={() => { setCounter(0); setCursorState("Enter") }}
        onMouseLeave={() => { setCounter(sequence.length); setCursorState("Leave") }}
      >
        <div className="pagination" />

        <div className="slides" style={{ cursor: 'url("https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"), auto' }}>
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
          </Swiper>
        </div>
      </div>
    </>
  );
};
