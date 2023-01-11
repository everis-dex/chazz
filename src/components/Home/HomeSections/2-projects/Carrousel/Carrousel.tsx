import React, { useRef } from "react";
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
  const featuredSlides: IProject[] = slides.filter(slide => slide.incarrousel).slice(0, 5);
  console.log(slides);
  console.log(featuredSlides);

  const carrouselRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={carrouselRef} className="carrouselTitle">
        <h3>{title}</h3>
      </div>

      <div id="carrousel" className="carrousel">
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
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            breakpoints={{
              768: { slidesPerView: 2.1 }
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
