import { assets } from "@/assets";
import Image from "next/image";
import { FaBell } from "react-icons/fa6";

export default function WhyChoseUsSection() {
  return (
    <section className=" py-20 relative overflow-hidden">
      <div className=" max-w-7xl w-full mx-auto relative flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
        <div className=" w-full md:w-1/2">
          <h1 className=" text-2xl font-light text-[#FF6666]">ADVANTAGES</h1>
          <h1 className=" text-4xl md:text-6xl font-extrabold my-3">
            Why Choose Uifry?
          </h1>
          <div className=" flex items-center space-x-2 my-4">
            <p className=" text-2xl font-bold text-[#FF6666]">
              <FaBell />
            </p>
            <h1 className=" text-2xl font-bold">Clever Notifications</h1>
          </div>
          <p className=" font-light text-base text-[#7F7F7F] mt-2">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
            In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
            Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse
            Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
            Suspendisse Aliquam.
          </p>
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
