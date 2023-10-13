"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [headerToggle, setHeaderToggle] = useState(false);

  const isCurrentPage = (path: string) => {
    if (typeof window !== "undefined" && window.location.pathname === path) {
      return "hover:text-white opacity-100"; // Apply hover effect constantly
    }
    return "text-[#ACACAC] opacity-50"; // Default hover effect
  };
  return (
    <div className="navbar text-white relative">
      <nav className="flex p-2">
        <Link href="/">
          <div className="flex place-items-center font-[700] text-[39px] gap-2 heading1 lg:ml-[160px]">
            <Image
              src="/images/logo.png"
              alt="eth"
              width={50}
              height={50}
              className=""
            />
            VegaFi
          </div>
        </Link>
        <div className="flex space-x-4 place-items-center end-0 absolute mr-2 lg:mr-8 my-2">
          <p className="font-500 cursor-pointer text-[22px]">Docs</p>
          <button className="navbutton p-2 text-black font-[700] lg:text-[22px] lg:px-7">
            Buy Now
          </button>
        </div>
      </nav>
    </div>
  );
}
