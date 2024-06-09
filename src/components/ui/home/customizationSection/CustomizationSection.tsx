import { assets } from "@/assets";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa6";

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
          <div className=" flex items-center space-x-2 mt-2">
            <p className=" text-xl bg-[#FF6666] p-3 rounded-full text-white">
              <FaStarOfLife />
            </p>
            <h1 className=" text-4xl font-bold">Fully Customizable</h1>
          </div>
          <p className=" font-light text-base text-[#7F7F7F] mt-5">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
            In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
            Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse
            Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
            Suspendisse Aliquam.
          </p>
        </div>
      </div>
    </section>
  );
}
