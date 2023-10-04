'use client'
import React, {useState, useEffect} from 'react'
import ProductNav from '@/components/ProductNav'
import MobileFooter from '@/components/MobileFooter'
import Testimonial from '@/components/Testimonials'
import Links from '@/components/Links'
import data from '../../data/data.json'
import Image from 'next/image'
import Link from 'next/link'

export default function Speakers() {
  return (
    <>
    <div className='bg-black'>
        <ProductNav />
        <p className="text-white text-2xl text-center py-10 font-semibold">SPEAKERS</p>
    </div>
    <Products />
    <Links />
    <Testimonial />
    <MobileFooter />
    </>
  )
}

function Products(){
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
        <div className="mt-16 mb-40">
        <div className="flex justify-center flex-col-reverse gap-[7rem] items-center">
            {data.filter(data => data.category === "speakers").map((data,index) => (
                <div key={index}>
                    <div className='flex justify-center items-center'>
                   { width < breakPoint ?
                    <Image src={data.image.mobile} 
                    alt='headphones' 
                    width={350} 
                    height={300}
                    priority={true}
                    className='rounded-lg w-auto h-auto'/> :
                    width >= breakPoint && width < large ? 
                    <Image src={data.categoryImage.tablet} 
                    alt='headphones'
                    width={650}
                    height={352}
                    priority={true}
                    className='rounded-lg w-auto h-auto'/> : null}
                    </div>
                 <div className="flex justify-center items-center flex-col mt-10">
                    <h1>{data.new ? <p className="tracking-[0.8rem] text-caramel text-sm">NEW PRODUCT</p> : null}</h1>
                    <h1 className="text-4xl tracking-wider mt-8 font-medium text-center
                    md:font-bold md:text-[40px] md:px-44 md:leading-[45px]">
                    {data.name}
                    </h1>
                   <p className="mt-8 opacity-60 text-center px-3 md:px-20">{data.description}</p>
                   <Link key={data.id} href={`/${data.slug}`}>
                    <button className='bg-caramel mt-6 w-44 h-14 text-white tracking-wide text-center hover:bg-tangerine transition ease-in-out'>
                SEE PRODUCT
            </button>
                    </Link>
                 </div>
                </div>
            ))}
        </div>
    </div>
    )
}
