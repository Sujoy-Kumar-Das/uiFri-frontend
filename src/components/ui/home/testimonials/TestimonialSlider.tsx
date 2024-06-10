"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ITestimonial {
  _id: string;
  image: string;
  title: string;
  feedback: string;
  name: string;
}

export default function TestimonialSlider({ data }: { data: ITestimonial[] }) {
  return (
    <Swiper
      autoplay={{ delay: 5000 }}
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {data.map(({ _id, image, title, feedback, name }: ITestimonial) => (
        <SwiperSlide key={_id}>
          <div className=" px-5 py-6 bg-gray-200 rounded-lg">
            <h1 className=" text-2xl md:text-3xl font-bold mb-5">{title}</h1>
            <p className=" text-lg md:text-xl font-light mb-5">{feedback}</p>
            <div className=" flex items-center space-x-2">
              <Image
                src={image}
                alt={`${name} image`}
                height={52}
                width={52}
                className=" rounded-full border-2 border-blue-600"
              />
              <p className=" text-xl font-light">{name}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
