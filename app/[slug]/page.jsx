'use client'
import React, {useContext} from 'react'
import { useParams } from 'next/navigation';
import Link from 'next/link';
import data from '../../data/data.json';
import ProductNav from '@/components/ProductNav';
import Testimonial from '@/components/Testimonials';
import Links from '@/components/Links'
import MobileFooter from '@/components/MobileFooter';
import { ShopContext } from '@/context/ShopContext';
import Image from 'next/image';

export default function ProductPage() {
    const {slug} = useParams();
    const productData = data.find(data => data.slug === slug);
    if (!productData) throw new Error(`404: product not found: ${slug}`)
    //const navigate = useNavigate();
    const {addToCart, cartItems,removeFromCart} = useContext(ShopContext);
    const quantity = cartItems[productData.id];
    const lines = productData.features.match(/[^\r\n]+/g)


  return (
    <>
        <ProductNav />
        <div className='mt-10'>
            <div className='flex justify-center items-center'>
            <Image src={productData.image.mobile} alt='data image' 
            width={350} 
            height={400}
            priority={true}
            className='rounded-lg w-auto h-auto'/>
            </div>

            <div className='mt-5 px-5'>
              <div className='flex flex-col'>
                <h1>{productData.new ? <p className="tracking-[0.8rem] text-caramel text-sm">NEW PRODUCT</p> : null}</h1>
                <h1 className='text-3xl font-semibold mt-6 uppercase'>{productData.name}</h1>
                <p className='mt-6 opacity-50 text-[15px] leading-7'>{productData.description}</p>
                <p className="mt-6 font-semibold text-lg tracking-widest">${productData.price.toLocaleString()}</p>
              </div>
            </div>

            <div className='mt-10 px-5'>
            {quantity === 0 ? 
            <button className=" bg-caramel w-48 h-12 tracking-widest text-white font-manrope text-sm hover:bg-tangerine transition ease-in-out"
            onClick={() => addToCart(productData.id)}
            >ADD TO CART</button>
            : <button className=" bg-anti-flash-white w-32 h-12 flex justify-around items-center">
            <button onClick={() => removeFromCart(productData.id)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => addToCart(productData.id)}>+</button>
          </button>}
            </div>
          </div>

          <div className='mt-10 px-5'>
            <div className='flex flex-col justify-center gap-6'>
              <div>
                <h2 className="text-3xl font-bold">FEATURES</h2>
                {lines.map((p, i) => (
                <p className="opacity-60 mt-8" key={i}>
                  {p}
                </p> ))}
                <div className='mt-20'>
          <h2 className="text-2xl font-bold">IN THE BOX</h2>
          <div className='flex flex-col gap-3 mt-5'>{productData.includes.map((data,id) => (
            <div key={id}>
              <li className="list-none flex gap-3">
                <span className="text-caramel">{data.quantity}x</span>
                <span className="opacity-60">{data.item}</span>
              </li>
            </div>
          ))}</div>
          </div>
              </div>
            </div>
          </div>

          <div className="mt-40">
          <div className="flex justify-center items-center flex-col gap-9">
            <Image src={productData.gallery.first.mobile}
            width={350} 
            height={400}
            priority={true}
            alt="" 
            className=" rounded-lg w-auto h-auto"
            />
            <Image src={productData.gallery.second.mobile}
            width={350} 
            height={400}
            priority={true} 
            alt="" 
            className=" rounded-lg w-auto h-auto"
            />
            <Image src={productData.gallery.third.mobile}
            width={350} 
            height={400}
            priority={true}
            alt="" 
            className=" rounded-lg w-auto h-auto"
            />
          </div>
          </div>

          <div className="mt-10">
          <h2 className="text-3xl font-bold text-center">YOU MAY ALSO LIKE</h2>
          <div className="flex justify-center items-center gap-9 mt-6 flex-col">
            {productData.others.map((data,id) => (
              <div key={id}>
                <div className="bg-anti-flash-white w-80 h-32">
                  <Image src={data.image.mobile} 
                  width={350} 
                  height={400}
                  priority={true}
                  alt="" 
                  className=" rounded-lg w-auto h-auto"/>
                </div>
                <div className="text-center">
                <h3 className="font-semibold text-2xl mt-9">{data.name}</h3>
                <Link href={`/${data.slug}`}>
                  <button className="mt-9 w-40 h-12 bg-caramel text-white text-sm hover:bg-tangerine transition ease-in-out">
                  SEE PRODUCT
                </button>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Links />
        <Testimonial />
        <MobileFooter />
    </>
  )
}
