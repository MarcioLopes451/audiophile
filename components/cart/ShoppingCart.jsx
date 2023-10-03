'use client'
import{ useState, useContext } from 'react';
import { ShopContext } from '@/context/ShopContext';
import Link from 'next/link';
import CartItem from './CartItem';
import data from '@/data/data.json';

export default function ShoppingCart({onClose}) {
    const {cartItems,totalCart} = useContext(ShopContext);

    const [state, setState] = useState(false);

    const disabled = () => {
        if(cartItems[0]) {
            setState(!state)
        }
    }

    const tot = totalCart();

    return (
        <div className='flex justify-center items-center mt-14'>
            <div className='bg-white w-[327px] rounded-lg z-50'>
            <div className='flex items-center justify-between px-6 pt-6'>
                <h2 className='font-semibold tracking-widest'>CART</h2>
                <p onClick={() => removeFromCart} className='font-manrope underline opacity-50'>Remove All</p>
            </div>
            <div>
                {data.map((data) => {
                    if(cartItems[data.id] !== 0) {
                        return <CartItem data={data} key={data}/>
                    }
                })}
            </div>
            <div className='flex justify-between px-7 font-manrope mt-7'>
                <p className='opacity-50'>TOTAL</p>
                <p className='font-semibold'>${tot.toLocaleString()}</p>
            </div>
            <div className='flex justify-center my-7'>
            <Link href='/audiophile-react/complete' className='w-[271px] bg-caramel text-white text-center py-2 hover:bg-tangerine transition ease-in-out'
             onClick={onClose} >
                CONTINUE & PAY
            </Link>
            </div>
        </div>
    </div>
    )
}