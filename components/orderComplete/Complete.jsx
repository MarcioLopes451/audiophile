'use client'
import React,{useContext}from 'react'
import data from '@/data/data.json';
import { ShopContext } from '@/context/ShopContext';
import Link from 'next/link';
import Image from 'next/image';
import Order from './Order';
import Finished from '@/public/checkout/icon-order-confirmation.svg';

export default function Complete() {
    const {cartItems,totalCart} = useContext(ShopContext);
    const tot = totalCart()
    const shipping = 50
    const vat = tot / 5;
    const grandTotal = tot + shipping + vat;
  
  return (
    <div className='mt-5 px-6'>
        <div>
        <Image src={Finished} className='mt-11' alt='finished'/>
            <h1 className='font-semibold mt-8 text-3xl'>THANK YOU FOR YOUR ORDER</h1>
            <p className='opacity-50 mt-3'>You will receive an email confirmation shortly.</p>
            <div>
            {data.map((data) => {
                    if(cartItems[data.id] !== 0) {
                        return <Order data={data} key={data}/>
                    }
                })}
            </div>
            <div className='bg-night md:w-[350px]'>
                <p className='text-white opacity-50 text-lg'>GRAND TOTAL</p>
                <div>
                <p className='mt-2 text-white'>${grandTotal.toLocaleString()}</p>
                </div>
            </div>
            <div className='text-center my-7 md:text-left'>
                <Link href='/'>
                    <button className='bg-caramel text-white text-center py-2 w-80 h-10'>
                        BACK TO HOME
                    </button>
                   
                </Link>
            </div>
        </div>
    </div>
  )
}
