import { assets } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { menuItemsArray } from "../navbar/menuItemsArray";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto p-6">
      <div className=" flex flex-wrap justify-between">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full md:w-8/12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src={assets.logo} height={24} width={24} alt="logo" />
              <div className="flex items-center">
                <h1 className="font-bold text-2xl">uifry</h1>
                <p className="text-[10px] ml-1">TM</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <MdEmail className="text-[#FF6666] text-xl" />
              <p>Help@Frybix.Com</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCall className="text-[#FF6666] text-xl" />
              <p>+1 234 456 678 89</p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-light mb-4">Links</h1>
            {menuItemsArray.map((item) => (
              <Link
                href={item.link}
                className="text-base block mb-2"
                key={item.id}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <h1 className="text-2xl font-light mb-4">Legal</h1>
            <Link href="/" className="text-base block mb-2">
              Terms of use
            </Link>
            <Link href="/" className="text-base block mb-2">
              Privacy Policy
            </Link>
            <Link href="/" className="text-base block mb-2">
              Cookie Policy
            </Link>
          </div>
          <div>
            <h1 className="text-2xl font-light mb-4">Support</h1>
            <Link href="/" className="text-base block mb-2">
              Take Tour
            </Link>
            <Link href="/" className="text-base block mb-2">
              Live Chat
            </Link>
            <Link href="/" className="text-base block mb-2">
              Reviews
            </Link>
          </div>
        </div>
        <div className="w-full mt-6 md:mt-0  md:w-4/12">
          <h1 className="text-2xl font-light mb-4">Newsletter</h1>
          <Link href="/" className="text-base block mb-4">
            Stay Up To Date
          </Link>
          <div className="flex items-center">
            <input
              type="email"
              className="bg-gray-50 text-sm rounded-lg focus:border-[#FF6666] block w-full py-2 px-4 mr-2"
              placeholder="Your Email"
            />
            <button className="btn-primary px-6 py-2">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="h-[2px] my-5 w-full bg-gradient-to-r from-[rgba(128,128,128,0.05)] via-[rgba(128,128,128,1)] to-[rgba(128,128,128,0.05)]"></div>
      <p className=" text-base text-center">
        Copyright 2022 Uifry.Com All Rights Reserved
      </p>
    </footer>
  );
}
