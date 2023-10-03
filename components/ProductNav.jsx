'use client'
import React, {useState} from 'react'
import Image from 'next/image';
import Logo from '../public/shared/desktop/logo.svg';
import Cart from '../public/shared/desktop/icon-cart.svg';
import Mobile from '../public/shared/tablet/icon-hamburger.svg';
import MobileNav from './MobileNav';
import Backdrop from './Backdrop';
import ShoppingCart from './cart/ShoppingCart';

export default function ProductNav() {
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);

  function handleClick() {
    setState(!state)
  }
  function handleClick1() {
    setState1(!state1)
  }
  return (
    <div className='w-full h-24 border-b border-white border-opacity-10 bg-black'>
        <div className='flex items-center pt-9 justify-evenly gap-10'>
        <Image src={Mobile} alt='mobile nav' onClick={handleClick}/>
        <Image src={Logo} alt='logo'/>
        <Image src={Cart}alt='cart' onClick={handleClick1} />
        </div>
        {state && <MobileNav isOpen={state} onClose={handleClick}/>}
        {state && <Backdrop isOpen={state} onClose={handleClick}/>}
        {state1 && <ShoppingCart isOpen={state1} onClose={handleClick1}/>}
        {state1 && <Backdrop isOpen={state1} onClose={handleClick1}/>}
    </div>
  )
}
