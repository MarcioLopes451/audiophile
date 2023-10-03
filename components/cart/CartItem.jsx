'use client'
import React, {useContext}from 'react'
import { ShopContext } from '@/context/ShopContext';
import Image from 'next/image';


export default function CartItem(props) {
    const {addToCart, cartItems,removeFromCart} = useContext(ShopContext);
    

    return (
        <div>
            <div className='flex justify-between items-center mx-5 mt-5'>
            <div className='flex gap-5 items-center'>
            <Image src={props.data.image.desktop}
            width={64} 
            height={64}
            priority={true}
            className='rounded-lg' 
            alt='image'
            />
            <div>
            <h1 className='font-semibold'>{props.data.shortName}</h1>
            <p className='opacity-60'>${props.data.price.toLocaleString()}</p>
            </div>
            </div>
            <div>
            <button className="bg-anti-flash-white w-24 h-8 flex justify-around items-center">
            <button onClick={() => removeFromCart(props.data.id)}>-</button>
            <p>{cartItems[props.data.id]}</p>
            <button onClick={() => addToCart(props.data.id)}>+</button>
            </button>
            </div>
        </div>
        </div>

    )
}