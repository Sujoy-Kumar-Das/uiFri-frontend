import { assets } from "@/assets";
import Image from "next/image";
import TestimonialSlider from "./TestimonialSlider";

export default async function TestimonialSection() {
  const res = await fetch("http://localhost:5000/api/testimonial", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <section className=" py-20">
      <div className=" max-w-7xl w-full mx-auto">
        <div className=" w-full md:w-5/12 mx-auto text-center">
          <h1 className=" text-2xl font-light text-[#FF6666]">TESTIMONIAL</h1>
          <h1 className=" text-4xl md:text-6xl font-extrabold my-3">
            What Our Users Say About Us?
          </h1>
        </div>

        <div className=" flex justify-between items-center md:flex-row flex-col">
          <div className=" w-full md:w-1/2">
            <div className=" h-full w-full">
              <Image src={assets.testimonial} alt=" testimonial image" />
            </div>
          </div>
          <div className=" w-full md:w-1/2">
            <TestimonialSlider data={data.data} />
          </div>
        </div>
      </div>
    </section>
  );
}
