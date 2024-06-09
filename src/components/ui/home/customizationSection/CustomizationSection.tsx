import { assets } from "@/assets";
import Image from "next/image";

export default function CustomizationSection() {
  return (
    <section className=" py-20 relative">
      <div className=" max-w-7xl w-full mx-auto relative flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
        <div className=" w-full md:w-1/2">
          <div className=" w-full md:w-[300px] absolute left-0 md:top-0 top-[20%] inset-0 -z-50">
            <Image src={assets.star} alt="star image" />
          </div>
          <div className=" w-full md:w-[500px] h-full justify-center">
            <Image src={assets.circle} alt="circle image" />
          </div>
          <div className=" w-7/12  md:w-[300px] h-full absolute top-[20%] md:top-[10%] right-[30%] md:right-[70%] rotate-[14deg]">
            <Image src={assets.mobile1} alt="mobile image" />
          </div>
        </div>
        <div className=" w-full md:w-1/2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ad et
          quam quidem laudantium nostrum tempora eum saepe, animi pariatur.
        </div>
      </div>
    </section>
  );
}
