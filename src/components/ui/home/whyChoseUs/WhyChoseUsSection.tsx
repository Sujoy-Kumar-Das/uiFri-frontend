import { assets } from "@/assets";
import Image from "next/image";

export default function WhyChoseUsSection() {
  return (
    <section className=" py-20 relative overflow-hidden">
      <div className=" max-w-7xl w-full mx-auto relative flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
        <div className=" w-full md:w-1/2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ad et
          quam quidem laudantium nostrum tempora eum saepe, animi pariatur.
        </div>
        <div className=" w-full md:w-1/2 relative">
          <div className=" w-full h-full">
            <Image src={assets.circle} alt="circle image" />
          </div>
          <div className="  w-8/12 md:w-10/12  h-full absolute  top-[0] right-[20%] md:-right-[0%] md:top-[5%] rotate-[14deg]">
            <Image src={assets.mobile1} alt="mobile image" />
          </div>
          <div className=" w-[300px] absolute md:top-0 top-[5%] md:-right-[30%]  -right-[60%] -z-50">
            <Image src={assets.star} alt="star image" />
          </div>
        </div>
      </div>
    </section>
  );
}
