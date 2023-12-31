"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Testimonials from "../../public/shared/mobile/image-best-gear.jpg";
import TabletTestimonials from "../../public/shared/tablet/image-best-gear.jpg";
import DesktopTestimonials from "../../public/shared/desktop/image-best-gear.jpg";
import { motion } from "framer-motion";

const slideIn2 = {
  hidden: {
    x: "-100px",
    opacity: 0,
  },
  visible: {
    x: "0vh",
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export default function Testimonial() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const breakPoint = 768;
  const med = 1024;
  const large = 1440;

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <motion.div
      variants={slideIn2}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      className="mt-10"
    >
      <div className="flex justify-center items-center flex-col gap-5 xl:flex-row-reverse">
        {width < breakPoint ? (
          <Image
            src={Testimonials}
            alt="testimonials"
            className="w-80 rounded-lg"
          />
        ) : width >= breakPoint && width < large ? (
          <Image
            src={TabletTestimonials}
            alt="testimonials"
            className="rounded-lg w-[690px]"
          />
        ) : (
          <Image
            src={DesktopTestimonials}
            alt="testimonials"
            className="rounded-lg"
          />
        )}
        <div className="mt-10 flex flex-col justify-center items-center text-center px-4 xl:w-[550px] xl:text-left">
          <p className="text-3xl tracking-wide font-semibold md:text-[48px] leading-[50px] xl:font-[40px]">
            BRINGING YOU THE
            <span className="text-caramel"> BEST</span> AUDIO GEAR
          </p>
          <p className="mt-6 opacity-60 md:px-[60px] xl:px-0">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
