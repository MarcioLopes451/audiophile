"use client";
import { useState, useEffect } from "react";
import MobileHero from "../public/home/mobile/image-header.jpg";
import TabletHero from "../public/home/tablet/image-header.jpg";
import Hero from "../public/home/desktop/image-hero.jpg";
import ImageSpeaker from "../public/home/desktop/image-speaker-zx9.png";
import Circles from "../public/home/desktop/pattern-circles.svg";
import ImageSpeaker2 from "../public/home/mobile/image-speaker-zx7.jpg";
import desktopImageSpeaker2 from "../public/home/desktop/image-speaker-zx7.jpg";
import TabletImageSpeaker2 from "../public/home/tablet/image-speaker-zx7.jpg";
import Earphones from "../public/home/mobile/image-earphones-yx1.jpg";
import desktopEarphones from "../public/home/desktop/image-earphones-yx1.jpg";
import TabletEarphones from "../public/home/tablet/image-earphones-yx1.jpg";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import Links from "@/components/links/Links";
import Footer from "@/components/footer/Footer";
import Testimonial from "@/components/testimonials/Testimonials";
import { motion } from "framer-motion";

const slideIn = {
  hidden: {
    y: "-50px",
    opacity: 0,
  },
  visible: {
    y: "0vh",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const slideIn1 = {
  hidden: {
    x: "100px",
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

export default function Home() {
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
    <main>
      <Navbar />
      <motion.div
        variants={slideIn}
        initial="hidden"
        animate="visible"
        className="relative w-full"
      >
        {width < breakPoint ? (
          <Image src={MobileHero} alt="mobile hero" />
        ) : width >= breakPoint && width < large ? (
          <Image src={TabletHero} alt="tablet hero" />
        ) : (
          <Image src={Hero} alt="hero" />
        )}
        <div className="absolute top-[13rem] left-2 text-center xl:left-40 xl:w-[398px] xl:text-left">
          <h1 className="text-sm text-white opacity-50 tracking-[0.8rem] font-thin">
            NEW PRODUCT
          </h1>
          <h1
            className="mt-5 text-white text-4xl font-semibold tracking-widest 
            md:text-[56px] md:leading-[60px] xl:text-[50px] xl:leading-[60px]"
          >
            XX99 MARK II HEADPHONES
          </h1>
          <p className="mt-5 text-white opacity-60 font-light px-5 md:px-[200px] xl:px-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="/xx99-mark-two-headphones">
            <button className="bg-caramel mt-7 w-40 h-12 text-white tracking-wide text-center hover:bg-tangerine transition ease-in-out">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </motion.div>

      <Links />

      <div className="mt-10">
        <motion.div
          variants={slideIn1}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          className="flex flex-col justify-center items-center gap-10"
        >
          <div
            className="bg-caramel w-80 flex justify-center items-center flex-col rounded-lg relative md:w-[689px] 
        xl:w-[1110px] xl:flex-row xl:gap-20"
          >
            <Image
              src={ImageSpeaker}
              alt="speakers"
              className="w-44 mt-14 xl:w-[500px] px-6"
            />
            {/*<Image src={Circles} alt='circles' className='absolute top-0'/>*/}
            <div className="text-center my-10 xl:text-left">
              <h1 className="text-white text-5xl tracking-wider font-semibold md:text-[56px] md:px-44 xl:px-0">
                ZX9 SPEAKER
              </h1>
              <p className="text-white opacity-70 mt-6 leading-6 md:px-40 xl:px-0">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link href="/zx9-speaker">
                <button className="w-40 h-12 mt-9 text-white text-sm font-manrope bg-night hover:bg-gray transition ease-in-out">
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>

          <motion.div
            variants={slideIn2}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            className="relative"
          >
            {width < breakPoint ? (
              <Image
                src={ImageSpeaker2}
                alt="speakers2"
                className="w-80 rounded-lg"
              />
            ) : width >= breakPoint && width < large ? (
              <Image
                src={TabletImageSpeaker2}
                alt="speakers"
                className="rounded-lg"
              />
            ) : (
              <Image
                src={desktopImageSpeaker2}
                alt="speakers"
                className="rounded-lg"
              />
            )}
            <div className="absolute text-black top-28 left-2 md:left-[62px]">
              <p className="text-3xl tracking-wider font-semibold">
                ZX7 SPEAKER
              </p>
              <Link href="/zx7-speaker">
                <button className="mt-9 w-40 h-10 text-black border-solid border-2 border-night hover:bg-night transition ease-in-out hover:text-white">
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={slideIn1}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            className="md:flex gap-3 items-center justify-center xl:gap-7"
          >
            {width < breakPoint ? (
              <Image
                src={Earphones}
                alt="earphones"
                className="w-80 rounded-lg"
              />
            ) : width >= breakPoint && width < large ? (
              <Image
                src={TabletEarphones}
                alt="earphones"
                className="rounded-lg w-[339px]"
              />
            ) : (
              <Image
                src={desktopEarphones}
                alt="earphones"
                className="rounded-lg"
              />
            )}
            <div className="mt-5 bg-anti-flash-white rounded-lg md:h-[320px] md:mt-0 md:w-[339px] xl:w-[540px]">
              <div className="py-10 px-4 md:pt-24 xl:px-28">
                <p className="font-manrope text-3xl tracking-wider">
                  YX1 EARPHONES
                </p>
                <Link href="/yx1-earphones">
                  <button className="mt-9 w-40 h-10 font-manrope text-black border-solid border-2 border-night hover:bg-night transition ease-in-out hover:text-white">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
          <Testimonial />
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
