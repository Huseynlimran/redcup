import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slide() {
  return (
    <>
      <Swiper
        pagination={true}
        loop={true}
        speed={500}
        setInitialSlide={0}
        spaceBetween={0}
        autoplay= {
             2000}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <video autoPlay loop playsInline muted className="video">
            <source src="img/video2.mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay loop playsInline muted className="video">
            <source src="img/video3.mp4" />
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
