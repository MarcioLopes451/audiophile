'use client'
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/shared/desktop/logo.svg';
import Cart from '../../public/shared/desktop/icon-cart.svg';
import Mobile from '../../public/shared/tablet/icon-hamburger.svg';
import MobileNav from './MobileNav';
import Backdrop from '../backdrop/Backdrop';
import ShoppingCart from '../cart/ShoppingCart';
import { motion } from 'framer-motion';

const slideIn = {
  hidden: {
      y:'-100px',
      opacity: 0
  },
  visible:{
      y:'0vh',
      opacity:1,
      transition:{
          duration:0.5
      }
  }
}

export default function ProductNav() {
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);
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

  function handleClick() {
    setState(!state)
  }

  function handleClick1() {
    setState1(!state1)
  }

  function changeNavbar(){
    if(width < breakPoint){
      return (
        <motion.div 
        variants={slideIn}
        initial='hidden'
        animate='visible' className='w-full h-24 border-b border-white border-opacity-10 bg-black'>
        <div className='flex items-center pt-9 justify-evenly gap-10'>
          <Image src={Mobile} alt='mobile nav' onClick={handleClick}/>
          <Link href='/'>
          <Image src={Logo} alt='logo'/>
          </Link>
          <Image src={Cart} alt='cart' onClick={handleClick1}/>
        </div>
        {state && <MobileNav isOpen={state} onClose={handleClick}/>}
        {state && <Backdrop isOpen={state} onClose={handleClick}/>}
        {state1 && <ShoppingCart isOpen={state1} onClose={handleClick1}/>}
        {state1 && <Backdrop isOpen={state1} onClose={handleClick1}/>}
    </motion.div>
      )
    } else if(width >= breakPoint && width < large){
      return (
        <motion.div 
        variants={slideIn}
        initial='hidden'
        animate='visible' className='w-full h-24 border-b border-white border-opacity-10 bg-black'>
          <div className='flex justify-between items-center px-[39px] pt-9'>
            <div className='flex items-center gap-11'>
            <Image src={Mobile} alt='mobile nav' onClick={handleClick}/>
            <Link href='/'>
              <Image src={Logo} alt='logo'/>
            </Link>
            </div>
            <Image src={Cart} alt='cart' onClick={handleClick1}/>
          </div>
          {state && <MobileNav isOpen={state} onClose={handleClick}/>}
          {state && <Backdrop isOpen={state} onClose={handleClick}/>}
          {state1 && <ShoppingCart isOpen={state1} onClose={handleClick1}/>}
          {state1 && <Backdrop isOpen={state1} onClose={handleClick1}/>}
        </motion.div>
      )
    } else {
      return (
        <motion.div 
        variants={slideIn}
        initial='hidden'
        animate='visible' className='w-full h-24 bg-black border-b border-white border-opacity-10'>
          <div className='flex justify-between items-center px-[160px] pt-9'>
          <Link href='/'>
          <Image src={Logo} alt='logo'/>
          </Link>
          <div className='flex text-white gap-6 text-[13px] font-semibold -ml-20'>
            <Link href='/' className='hover:text-caramel duration-300'>
              HOME
            </Link>
            <Link href='/headphones' className='hover:text-caramel duration-300'>
              HEADPHONES
            </Link>
            <Link href='/speakers' className='hover:text-caramel duration-300'>
              SPEAKERS
            </Link>
            <Link href='/earphones' className='hover:text-caramel duration-300'>
              EARPHONES
            </Link>
          </div>
            <Image src={Cart} alt='cart' onClick={handleClick1}/>
          </div>
          {state1 && <ShoppingCart isOpen={state1} onClose={handleClick1}/>}
          {state1 && <Backdrop isOpen={state1} onClose={handleClick1}/>}
        </motion.div>

      )
    }
  }

  return (
   <div>
    {changeNavbar()}
   </div>
  )
}
