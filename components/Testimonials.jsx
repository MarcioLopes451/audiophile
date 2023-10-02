import React from 'react'
import Image from 'next/image'
import Testimonials from '../public/shared/mobile/image-best-gear.jpg';

export default function Testimonial() {
  return (
    <div className='mt-10'>
        <div className='flex justify-center items-center flex-col gap-5'>
          <Image src={Testimonials} alt='testimonials' className='w-80 rounded-lg'/>
          <div className='mt-10 flex flex-col justify-center items-center text-center px-4'>
            <p className='text-3xl tracking-wide font-semibold'>BRINGING YOU THE 
            <span className='text-caramel'> BEST</span> AUDIO GEAR
            </p>
            <p className='mt-6 opacity-60'>
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
