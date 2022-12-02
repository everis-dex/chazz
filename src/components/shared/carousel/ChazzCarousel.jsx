import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChazzSlide } from "./ChazzSlide";


// import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";

import "./carouselStyles.css";


const slides = [
  {
    title: "doco",
    description: "Maing mobility easier in any territory.",
    imageUrl:
      "https://web.extension.illinois.edu/treehouse/images/3306_1_large.jpg",
    width: 503,
    height: 374,
    top: 0,
  },
  {
    title: "Tuio",
    description: "Revamping a neobank for the new context.",
    imageUrl:
      "https://web.extension.illinois.edu/treehouse/images/3306_2_large.jpg",
    width: 528,
    height: 545,
    top: 100,
  },
  {
    title: "Hogami",
    description: "A home services platform.",
    imageUrl:
      "https://web.extension.illinois.edu/treehouse/images/3306_3_large.jpg",
    width: 305,
    height: 287,
    top: 20,
  },
];

export const Carousel = () => {
  return (
    <>
      <div className="carouselTitle">
        <h1>Featured projects</h1>
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
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
              },
              "@1.00": {
                slidesPerView: 2,
              },
              "@1.50": {
                slidesPerView: 3,
              },
            }}
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <ChazzSlide slideSettings={slide} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};
