import React from "react";
import Logo from "../../public/shared/desktop/logo.svg";
import Facebook from "../../public/shared/desktop/icon-facebook.svg";
import Instagram from "../../public/shared/desktop/icon-instagram.svg";
import Twitter from "../../public/shared/desktop/icon-twitter.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black mt-20">
      <div className="flex justify-center items-center flex-col gap-5 md:items-start md:px-[60px]">
        <div className="xl:flex xl:gap-[580px] xl:px-[100px] xl:pt-10">
          <Image src={Logo} alt="logo" className="pt-10 xl:pt-0" />
          <div className="flex justify-center items-center flex-col gap-5 mt-5 text-white font-semibold md:flex-row xl:mt-0">
            <Link href="/" className="hover:text-caramel duration-300">
              HOME
            </Link>
            <Link
              href="/headphones"
              className="hover:text-caramel duration-300"
            >
              HEADPHONES
            </Link>
            <Link href="/speakers" className="hover:text-caramel duration-300">
              SPEAKERS
            </Link>
            <Link href="/earphones" className="hover:text-caramel duration-300">
              EARPHONES
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-5 mt-5 text-white font-semibold md:items-start xl:px-[100px]">
          <p className="text-white opacity-50 px-5 text-center font-normal md:px-0 md:text-left xl:w-[540px]">
            Audiophile is an all in one stop to fulfill your audio needs. Were a
            small team of music lovers and sound specialists who are devoted to
            helping you get. the most out of personal audio. Come and visit our
            demo facility - we’re open 7 days a week.
          </p>
          <div className="md:flex items-center gap-[300px] xl:gap-[750px]">
            <p className="text-white opacity-60 text-sm mt-3">
              Copyright 2021. All Rights Reserved
            </p>
            <div className="flex justify-center items-center gap-5 my-6">
              <Image src={Facebook} alt="facebook" />
              <Image src={Twitter} alt="twitter" />
              <Image src={Instagram} alt="instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
