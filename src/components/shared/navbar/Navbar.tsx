"use client";
import { assets } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import MenuITems from "./MenuITems";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-5 relative">
      <nav>
        <div className=" max-w-7xl mx-auto flex justify-between items-center w-full">
          <div className=" flex items-center space-x-1">
            <Image src={assets.logo} alt="logo" height={40} width={40} />
            <div className=" flex justify-start">
              <Link
                href={"/"}
                className=" text-2xl lg:text-3xl font-bold transition-all duration-300 ease-in-out transform hover:text-[#FF5E08]"
              >
                uifry
              </Link>
              <p className=" text-[10px]">TM</p>
            </div>
          </div>

          {/* for pc and tablet */}
          <div className=" md:block hidden">
            <MenuITems />
          </div>
          <div className=" md:block hidden">
            <button className="btn-primary px-8 py-2">Download</button>
          </div>

          {/* for mobile */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="btn-primary p-3 md:hidden block"
          >
            <IoMdMenu />
          </button>
        </div>
        <div
          className={`bg-blue-700 h-screen w-full absolute top-0 -translate-y-[1000px] transition-transform duration-700 ${
            open && "translate-y-0"
          }`}
        >
          <div className=" flex justify-end mt-5 me-5">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className=" btn-circle w-12 h-12"
            >
              X
            </button>
          </div>
          <div className={`md:hidden flex justify-center items-center h-full `}>
            <MenuITems />
          </div>
        </div>
      </nav>
    </header>
  );
}
