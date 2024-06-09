import { assets } from "@/assets";
import Image from "next/image";
import { GiPolarStar } from "react-icons/gi";

export default function DownloadAppSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full flex justify-between items-center flex-col md:flex-row py-10 bg-[#000000] rounded-md overflow-hidden">
        <div className="w-full md:w-1/2 ps-5 relative">
          <h1 className="text-2xl md:text-5xl font-bold text-white">
            Ready To Get Started?
          </h1>
          <p className="mt-3 text-white font-light text-lg">
            Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.
          </p>
          <button className="z-50 btn-primary px-5 py-3 bg-white text-black mt-5">
            Download
          </button>
          <div className=" absolute -bottom-[40%] left-[40%] ">
            <p className=" text-white font-extralight text-3xl">
              <GiPolarStar />
            </p>
          </div>
          <div className="size-96 border rounded-full border-blue-700 absolute right-[450px] -bottom-[400px] z-10"></div>
          <div className="size-96 border rounded-full border-blue-700 absolute right-[500px] -bottom-[450px] z-20"></div>
          <div className="size-96 border rounded-full border-blue-700 absolute right-[550px] -bottom-[500px] z-30"></div>
        </div>
        <div className="text-white w-full md:w-1/2 relative z-40">
          <div className=" absolute top-[0%] right-[40%] ">
            <p className=" text-white font-extralight text-3xl">
              <GiPolarStar />
            </p>
          </div>
          <div className="size-96 border rounded-full border-blue-700 absolute -right-[150px] bottom-[200px] z-10"></div>
          <div className="size-96 border rounded-full border-blue-700 absolute -right-[200px] bottom-[200px] z-20"></div>
          <div className="size-96 border rounded-full border-blue-700 absolute -right-[250px] bottom-[200px] z-30"></div>
          <div className="h-full w-full flex justify-end">
            <Image src={assets.mobile4} alt="mobile image" className="z-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
