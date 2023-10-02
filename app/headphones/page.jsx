'use client'
import React from 'react'
import ProductNav from '@/components/ProductNav'
import MobileFooter from '@/components/MobileFooter'
import Testimonial from '@/components/Testimonials'
import Links from '@/components/Links'
import data from '../../data/data.json'
import Image from 'next/image'
import Link from 'next/link'

export default function Headphones() {
  return (
    <>
    <div className='bg-black'>
        <ProductNav />
        <p className="text-white text-2xl text-center py-10 font-semibold">HEADPHONES</p>
    </div>
    <Products />
    <Links />
    <Testimonial />
    <MobileFooter />
    </>
  )
}

function Products(){
    return (
        <div className="mt-16 mb-40">
        <div className="flex justify-center flex-col-reverse gap-[7rem] items-center">
            {data.filter(data => data.category === "headphones").map((data,index) => (
                <div key={index}>
                    <div className='flex justify-center items-center'>
                    <Image src={data.image.mobile} alt='headphones' width={350} height={400} className='rounded-lg'/>
                    </div>
                 <div className="flex justify-center items-center flex-col mt-10">
                    <h1>{data.new ? <p className="tracking-[0.8rem] text-caramel text-sm">NEW PRODUCT</p> : null}</h1>
                   <h1 className="text-4xl tracking-wider mt-8 font-medium text-center">{data.name}</h1>
                   <p className="mt-8 opacity-60 text-center px-3">{data.description}</p>
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
