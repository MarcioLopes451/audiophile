import React from 'react'
import Image from 'next/image';
import Logo from '../assets/shared/desktop/logo.svg';
import Cart from '../assets/shared/desktop/icon-cart.svg';
import Mobile from '../assets/shared/tablet/icon-hamburger.svg';

export default function Navbar() {
  return (
    <div className='w-full h-24 absolute top-0 left-0 z-10 border-b border-white border-opacity-10'>
        <div className='flex items-center pt-9 justify-evenly gap-10'>
        <Image src={Mobile} alt='.'/>
        <Image src={Logo} alt='.'/>
        <Image src={Cart} alt=';' />
        </div>
    </div>
  )
}
