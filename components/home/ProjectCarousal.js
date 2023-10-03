import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper";

export default function ProjectCarousal({imagePath}) {
  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation, Keyboard]}
      className="w-11/12 mb-10 sm:mb-20 p-2"
    >
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src={`/projects/${imagePath}/1.jpg`}
          alt=""
          width={500}
          height={500}
          className="rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src={`/projects/${imagePath}/2.jpg`}
          alt=""
          width={500}
          height={500}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src={`/projects/${imagePath}/3.jpg`}
          alt=""
          width={500}
          height={500}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src={`/projects/${imagePath}/4.jpg`}
          alt=""
          width={500}
          height={500}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
    </Swiper>
    </>
  );
}
