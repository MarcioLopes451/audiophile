'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Testimonials from '../public/shared/mobile/image-best-gear.jpg';
import TabletTestimonials from '../public/shared/tablet/image-best-gear.jpg';

export default function Testimonial() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const breakPoint = 768;
    const med = 1024;
    const large = 1440

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className='mt-10'>
        <div className='flex justify-center items-center flex-col gap-5'>
          {width < breakPoint ? <Image src={Testimonials} alt='testimonials' className='w-80 rounded-lg'/> :
           width >= breakPoint && width < large ? <Image src={TabletTestimonials} alt='testimonials' className='rounded-lg w-[690px]'/> :
           null}
          <div className='mt-10 flex flex-col justify-center items-center text-center px-4'>
            <p className='text-3xl tracking-wide font-semibold md:text-[48px] leading-[50px]'>BRINGING YOU THE 
            <span className='text-caramel'> BEST</span> AUDIO GEAR
            </p>
            <p className='mt-6 opacity-60 md:px-[60px]'>
              Located at the heart of New York City, Audiophile is the premier store for high 
              end headphones, earphones, speakers, and audio accessories. We have a large showroom 
              and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
              Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
        </div>
      </div>
  )
}
