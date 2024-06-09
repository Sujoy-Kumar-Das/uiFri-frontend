import { assets } from "@/assets";
import Image from "next/image";

export default async function FeatureSection() {
  const res = await fetch("http://localhost:5000/api/feature");
  const data = await res.json();
  console.log(data);
  return (
    <section className=" py-20 relative">
      <div className=" max-w-7xl w-full mx-auto relative flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
        <div className=" w-full md:w-1/2">
          <div className=" w-full md:w-[300px] absolute left-0 md:top-0 top-[20%] inset-0 -z-50">
            <Image src={assets.star} alt="star image" />
          </div>
          <div className=" w-full  h-full">
            <Image src={assets.circle} alt="circle image" />
          </div>
          <div className=" w-8/12 md:w-10/12  h-full absolute  top-[0] right-[20%] md:right-[12%] md:top-[18%] rotate-[14deg]">
            <Image src={assets.mobile1} alt="mobile image" />
          </div>
        </div>
        <div className=" w-full md:w-1/2">
          <h1 className=" text-2xl font-light text-[#FF6666]">FEATURES</h1>
          <h1 className=" text-4xl md:text-6xl font-extrabold my-3">
            Uifry Premium
          </h1>

          <div>
            {data?.data.map((item) => (
              <div key={item._id} className=" my-5">
                <div className=" flex items-center space-x-2 mt-2">
                  <Image
                    height={24}
                    width={24}
                    src={item.image}
                    alt={`${item.title} image`}
                  />
                  <h1 className=" text-lg font-bold">{item.title}</h1>
                </div>
                <p className=" font-light text-base text-[#7F7F7F] mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
