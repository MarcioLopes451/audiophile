'use client'
import React, {useState} from 'react'
import Image from 'next/image';
import Logo from '../public/shared/desktop/logo.svg';
import Cart from '../public/shared/desktop/icon-cart.svg';
import Mobile from '../public/shared/tablet/icon-hamburger.svg';
import MobileNav from './MobileNav';
import Backdrop from './Backdrop';

export default function ProductNav() {
  const [state, setState] = useState(false);

  function handleClick() {
    setState(!state)
  }
  return (
    <div className='w-full h-24 border-b border-white border-opacity-10 bg-black'>
        <div className='flex items-center pt-9 justify-evenly gap-10'>
        <Image src={Mobile} alt='.' onClick={handleClick}/>
        <Image src={Logo} alt='.'/>
        <Image src={Cart} alt=';' />
        </div>
        {state && <MobileNav isOpen={state} onClose={handleClick}/>}
        {state && <Backdrop isOpen={state} onClose={handleClick}/>}
    </div>
  )
}
