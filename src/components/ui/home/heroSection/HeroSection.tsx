import { assets } from "@/assets";
import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className=" overflow-hidden">
      <div className=" max-w-7xl mx-auto w-full py-10 flex justify-between items-start flex-wrap">
        {/* segment 1 */}
        <div className=" w-full md:w-1/2">
          <div className=" w-[300px] absolute left-[2%] top-[12%] inset-0 -z-50">
            <Image src={assets.star} alt="star image" />
          </div>
          <h1 className=" text-6xl text font-bold">Make The Best</h1>
          <h1 className=" text-6xl text font-bold mt-3">Financial Decisions</h1>
          <p className=" my-5 text-lg">
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>

          <div className=" flex gap-5 items-center">
            <button className=" btn-primary px-5 py-3 flex justify-between items-center gap-3">
              <span>Get Started</span>
              <Image
                src={assets.arrow}
                height={10}
                width={40}
                alt="btn-arrow sing"
              />
            </button>
            <button className=" btn-outline px-5 py-3 flex justify-between items-center gap-3 border-transparent shadow-none ">
              <span>
                <FaRegCirclePlay />
              </span>
              <span>Watch Video</span>
            </button>
          </div>
          <div className=" w-[300px] absolute left-[5%] top-[70%] inset-0 -z-50">
            <Image src={assets.star} alt="star image" />
          </div>
          <div>
            <Image src={assets.about} alt="about" height={100} width={400} />
          </div>
        </div>

        {/* segment 2 */}
        <div className="relative">
          <div className=" w-[300px] absolute left-[80%] -top-[5%] inset-0 -z-50">
            <Image src={assets.star} alt="star image" />
          </div>
          <div className="w-10/12 md:w-[500px] inset-0 -z-50 mx-auto">
            <Image src={assets.circle} alt="circle image" />
          </div>
          <div className="h-full w-[200px] md:w-[300px] absolute top-0  right-[52%] md:right-[50%] z-20">
            <Image src={assets.mobile1} alt="circle image" />
          </div>
          <div className="h-full w-[200px]  md:w-[300px] absolute top-[20%] md:top-[10%] right-[35%] z-10">
            <Image src={assets.mobile2} alt="circle image" />
          </div>

          <div className=" w-[300px] absolute left-[0%] top-[90%] inset-0 -z-50 ">
            <Image src={assets.star} alt="star image" />
          </div>
          <div className="h-full w-[200px] md:w-[300px] absolute md:top-[20%] top-[30%] md:right-[15%] right-[20%] z-0">
            <Image src={assets.mobile3} alt="circle image" />
          </div>
        </div>
      </div>
    </section>
  );
}
