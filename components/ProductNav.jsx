import React from 'react'
import Image from 'next/image';
import Logo from '../public/shared/desktop/logo.svg';
import Cart from '../public/shared/desktop/icon-cart.svg';
import Mobile from '../public/shared/tablet/icon-hamburger.svg';

export default function ProductNav() {
  return (
    <div className='w-full h-24 border-b border-white border-opacity-10 bg-black'>
        <div className='flex items-center pt-9 justify-evenly gap-10'>
        <Image src={Mobile} alt='.'/>
        <Image src={Logo} alt='.'/>
        <Image src={Cart} alt=';' />
        </div>
    </div>
  )
}
