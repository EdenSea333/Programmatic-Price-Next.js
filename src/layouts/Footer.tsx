"use client";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaMedium, FaTelegram } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer text-white">
      <nav className="flex justify-center f_logo">
        <Link href="/">
          <div className="flex place-items-center font-[700] text-[39px] gap-2 heading1">
            <Image
              src="/images/logo.png"
              alt="eth"
              width={50}
              height={50}
              className=""
            />
          </div>
        </Link>

      </nav>
      <div className="flex justify-center ">
        <p className="lg:text-[24px] font-[400] leading-[150%] syne">VegaFi Decentralized Exchange Protocol </p>
      </div>
      <div className="flex justify-center">
        <p className="lg:text-[24px] font-[400] leading-[150%] opacity-[0.5] syne">Docs</p>
      </div>
      <div className="flex justify-center ">
        <a href="https://twitter.com/VegaFiOfficial" className="f_social" >
          <FaTwitter size={30}/>
        </a>
        <a href="https://vegafi.medium.com" className="f_social">
          <FaMedium size={30} />
        </a>
        <a href="https://t.me/vegafiportal" className="f_social">
          <FaTelegram size={30} />
        </a>
      </div>
    </div>
  );
}
