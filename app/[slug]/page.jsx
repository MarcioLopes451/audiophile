'use client'
import React, {useContext, useState, useEffect} from 'react';
import { useParams,useRouter } from 'next/navigation';
import Link from 'next/link';
import data from '../../data/data.json';
import ProductNav from '@/components/navbar/ProductNav';
import Testimonial from '@/components/testimonials/Testimonials';
import Links from '@/components/links/Links'
import Footer from '@/components/footer/Footer';
import { ShopContext } from '@/context/ShopContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

const slideRight = {
  hidden: {
      x:'-100px',
      opacity: 0
  },
  visible:{
      x:'0vh',
      opacity:1,
      transition:{
          duration:0.5
      }
  }
}

const slideRight1 = {
  hidden: {
      x:'-100px',
      opacity: 0
  },
  visible:{
      x:'0vh',
      opacity:1,
      transition:{
          duration:2
      }
  }
}

const slideIn = {
  hidden: {
      y:'-50px',
      opacity: 0
  },
  visible:{
      y:'0vh',
      opacity:1,
      transition:{
          duration:3
      }
  }
}

const slideIn1 = {
  hidden: {
      opacity: 0
  },
  visible:{
      opacity:1,
      transition:{
          duration:3
      }
  }
}

const slideIn2 = {
  hidden: {
    x:'100px',
      opacity: 0
  },
  visible:{
    x:'0vh',
      opacity:1,
      transition:{
          duration:3
      }
  }
}

export default function ProductPage() {
    const {slug} = useParams();
    const productData = data.find(data => data.slug === slug);
    if (!productData) throw new Error(`404: product not found: ${slug}`)
    const navigate = useRouter();
    const {addToCart, cartItems,removeFromCart} = useContext(ShopContext);
    const quantity = cartItems[productData.id];
    const lines = productData.features.match(/[^\r\n]+/g);
    
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
    <>
        <ProductNav />
        <motion.div 
        variants={slideRight}
        initial='hidden'
        animate='visible' 
        className='mt-10'>
        <button onClick={() => navigate.back()} className="my-10 px-[25px] opacity-60 xl:px-[150px] hover:text-caramel duration-200">Go Back</button>
            <div className='flex justify-center items-center flex-col md:flex-row md:px-[20px] md:gap-[69px] xl:px-0'>
            { width < breakPoint ? 
            <Image src={productData.image.mobile} alt='data image' 
            width={350} 
            height={400}
            priority={true}
            className='rounded-lg w-auto h-auto'/> : 
            width >= breakPoint && width < large ? 
            <Image src={productData.image.tablet} alt='data image' 
            width={350} 
            height={400}
            priority={true}
            className='rounded-lg w-auto h-auto'/> : 
            <Image src={productData.image.desktop} alt='data image' 
            width={540} 
            height={560}
            priority={true}
            className='rounded-lg w-auto h-auto'/>}
            <div className='mt-5 px-5'>
              <div className='flex flex-col xl:w-[500px]'>
                <h1>{productData.new ? <p className="tracking-[0.8rem] text-caramel text-sm">NEW PRODUCT</p> : null}</h1>
                <h1 className='text-3xl font-semibold mt-6 uppercase'>{productData.name}</h1>
                <p className='mt-6 opacity-50 text-[15px] leading-7'>{productData.description}</p>
                <p className="mt-6 font-semibold text-lg tracking-widest">${productData.price.toLocaleString()}</p>
                <div className='mt-10'>
                  {quantity === 0 ? 
                  <button className=" bg-caramel w-48 h-12 tracking-widest text-white font-manrope text-sm hover:bg-tangerine transition ease-in-out"
                  onClick={() => addToCart(productData.id)}>
                    ADD TO CART
                  </button> : 
                  <div className="bg-anti-flash-white w-32 h-12 flex justify-around items-center">
                    <button onClick={() => removeFromCart(productData.id)}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => addToCart(productData.id)}>+</button>
                  </div>}
                </div>
              </div>
            </div>
            </div>
            </motion.div>

          <motion.div 
          variants={slideIn1}
          initial='hidden'
          whileInView='visible'
          exit='hidden'
          className='mt-10 px-5'>
            <div className='flex flex-col justify-center gap-6 xl:flex-row xl:gap-[350px]'>
              <div>
              <h2 className="text-3xl font-bold">FEATURES</h2>
                {lines.map((p, i) => (
                <p className="opacity-60 mt-8 xl:w-[600px]" key={i}>
                  {p}
                </p> ))}
              </div>
                <div className='mt-20 flex items-start flex-col md:flex-row md:justify-between xl:flex-col xl:mt-0 xl:justify-normal'>
          <h2 className="text-2xl font-bold">IN THE BOX</h2>
          <div className='flex flex-col gap-3 mt-5 md:mt-0 xl:mt-10'>{productData.includes.map((data,id) => (
            <div key={id}>
              <li className="list-none flex gap-3">
                <span className="text-caramel">{data.quantity}x</span>
                <span className="opacity-60">{data.item}</span>
              </li>
            </div>
          ))}</div>
          </div>
            </div>
          </motion.div>

          <div className="mt-40">
          <motion.div 
          variants={slideIn2}
            initial='hidden'
            whileInView='visible'
            exit='hidden' 
            className="flex justify-center items-center flex-col gap-9 md:flex-row">
            <motion.div 
            variants={slideRight1}
            initial='hidden'
            whileInView='visible'
            exit='hidden'
            className='flex flex-col gap-9'>
            <Image src={productData.gallery.first.mobile}
            width={350} 
            height={400}
            priority={true}
            alt="" 
            className="rounded-lg w-auto h-auto md:w-[277px] md:h-[174px] xl:w-[592px] xl:h-[300px]"
            /> 
            <Image src={productData.gallery.second.mobile}
            width={350} 
            height={400}
            priority={true} 
            alt="" 
            className="rounded-lg w-auto h-auto md:w-[277px] md:h-[174px] xl:w-[592px] xl:h-[300px]"
            />
            </motion.div>
            {width < breakPoint ? 
            <Image src={productData.gallery.third.mobile}
            width={350} 
            height={400}
            priority={true}
            alt="" 
            className=" rounded-lg w-auto h-auto"
            /> : width >= breakPoint && width < large ? 
            <Image src={productData.gallery.third.tablet}
            width={500} 
            height={400}
            priority={true}
            alt="" 
            className=" rounded-lg w-[410px] h-auto" /> :
             <Image src={productData.gallery.third.desktop}
            width={635} 
            height={600}
            priority={true}
            alt="" 
            className=" rounded-lg h-[640px]" />}
          </motion.div>
          </div>

          <motion.div
          variants={slideIn}
          initial='hidden'
          whileInView='visible'
          className="mt-10">
          <h2 className="text-3xl font-bold text-center">YOU MAY ALSO LIKE</h2>
          <div className="flex justify-center items-center gap-9 mt-6 flex-col md:flex-row md:gap-3">
            {productData.others.map((data,id) => (
              <div key={id}>
                <div>
                  {width < breakPoint ? 
                  <Image src={data.image.mobile} 
                  width={350} 
                  height={400}
                  priority={true}
                  alt="" 
                  className=" rounded-lg w-auto h-auto"/> 
                  : width >= breakPoint && width < large ? 
                  <Image src={data.image.tablet} 
                  width={350} 
                  height={400}
                  priority={true}
                  alt="" 
                  className=" rounded-lg w-auto h-auto"/> : 
                  <Image src={data.image.desktop} 
                  width={350} 
                  height={318}
                  priority={true}
                  alt="" 
                  className=" rounded-lg w-auto h-auto"/>}
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
        </motion.div>
        <Links />
        <Testimonial />
        <Footer />
    </>
  )
}
