import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper";

export default function Carousal() {
  return (
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
      className="w-1/2 mb-10 sm:mb-20 p-2"
    >
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src="/cover/1.jpg"
          alt=""
          width={700}
          height={700}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src="/cover/2.jpg"
          alt=""
          width={700}
          height={700}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src="/cover/3.jpg"
          alt=""
          width={700}
          height={700}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src="/cover/4.jpg"
          alt=""
          width={700}
          height={700}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src="/cover/5.jpg"
          alt=""
          width={700}
          height={700}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src="/cover/6.jpg"
          alt=""
          width={700}
          height={700}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src="/cover/7.jpg"
          alt=""
          width={700}
          height={700}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src="/cover/8.jpg"
          alt=""
          width={700}
          height={700}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src="/cover/9.jpg"
          alt=""
          width={700}
          height={700}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src="/cover/10.jpg"
          alt=""
          width={700}
          height={700}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <Image
          src="/cover/11.jpg"
          alt=""
          width={700}
          height={700}
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
    </Swiper>
  );
}
