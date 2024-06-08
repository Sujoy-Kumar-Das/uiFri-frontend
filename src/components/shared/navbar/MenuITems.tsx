import Link from "next/link";
import { menuItemsArray } from "./menuItemsArray";

export default function MenuITems() {
  return (
    <div className="flex md:flex-row flex-col  items-center  md:space-x-10 space-x-0">
      {menuItemsArray.map((item) => (
        <p
          key={item.id}
          className=" font-semibold transition-all duration-500 ease-in-out transform hover:text-[#FF6666] text-center"
        >
          <Link href={item.link}>{item.title}</Link>
        </p>
      ))}
    </div>
  );
}
