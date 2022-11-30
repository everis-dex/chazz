import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ChazzSlide } from "./ChazzSlide";

const slides = [
  {
    title: "doco",
    description: "Maing mobility easier in any territory.",
    imageUrl: "https://web.extension.illinois.edu/treehouse/images/3306_1_large.jpg",
    width: 503,
    height: 374,
    top:0
  },
  {
    title: "Tuio",
    description: "Revamping a neobank for the new context.",
    imageUrl: "https://web.extension.illinois.edu/treehouse/images/3306_2_large.jpg",
    width: 528,
    height: 545,
    top:100
  },
  {
    title: "Hogami",
    description: "A home services platform.",
    imageUrl: "https://web.extension.illinois.edu/treehouse/images/3306_3_large.jpg",
    width: 305,
    height: 287,
    top:20
  },
];

export const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={3}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >

      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} >
            <ChazzSlide slideSettings={slide} />
          </SwiperSlide>
        );
      })}

    </Swiper>
  );
};
