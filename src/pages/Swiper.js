import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slide() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
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
