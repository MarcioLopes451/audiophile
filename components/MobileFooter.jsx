import React from 'react'
import Logo from '../assets/shared/desktop/logo.svg';
import Facebook from '../assets/shared/desktop/icon-facebook.svg';
import Instagram from '../assets/shared/desktop/icon-instagram.svg';
import Twitter from '../assets/shared/desktop/icon-twitter.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileFooter() {
  return (
    <div className='bg-black mt-20'>
        <div className='flex justify-center items-center flex-col gap-5'>
            <Image src={Logo} alt='logo' className='pt-10'/>
            <div className='flex justify-center items-center flex-col gap-5 mt-5 text-white font-semibold'>
                <Link href='/'>HOME</Link>
                <Link href='/'>HEADPHONES</Link>
                <Link href='/'>SPEAKERS</Link>
                <Link href='/'>EARPHONES</Link>
            </div>
            <div className='flex justify-center items-center flex-col gap-5 mt-5 text-white font-semibold'>
                <p className='text-white opacity-50 px-5 text-center font-normal'> 
                    Audiophile is an all in one stop to fulfill your audio needs. 
                    Were a small team of music lovers and sound specialists who are devoted to helping you get. 
                    the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
                <p className='text-white opacity-60 text-sm mt-3'>Copyright 2021. All Rights Reserved</p>
                <div className='flex justify-center items-center gap-5 my-6'>
                    <Image src={Facebook} alt='facebook'/>
                    <Image src={Twitter} alt='twitter'/>
                    <Image src={Instagram} alt='instagram'/>
                </div>
            </div>
        </div>
    </div>
  )
}
