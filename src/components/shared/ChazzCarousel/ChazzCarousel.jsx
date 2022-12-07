import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChazzSlide } from "./ChazzSlide";

// import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";

import "./carouselStyles.css";
import projects from "./../../../content/projects.json";

const slides = [
  {
    width: 503,
    height: 374,
    top: 0,
  },
  {
    width: 528,
    height: 545,
    top: 100,
  },
  {
    width: 305,
    height: 287,
    top: 20,
  },
];

const ChazzCarousel = () => {
  return (
    <>
      <div className="carouselTitle">
        <h3>Featured projects</h3>
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
            {projects.map((project, index) => {
              project.width = slides[index].width;
              project.height = slides[index].height;
              project.top = slides[index].top;
              console.log(project);
              return (
                <SwiperSlide key={index}>
                  <ChazzSlide slideSettings={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ChazzCarousel;
