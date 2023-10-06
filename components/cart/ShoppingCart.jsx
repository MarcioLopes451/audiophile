"use client";
import { useState, useContext } from "react";
import { ShopContext } from "@/context/ShopContext";
import Link from "next/link";
import CartItem from "./CartItem";
import data from "@/data/data.json";

export default function ShoppingCart({ onClose }) {
  const { cartItems, totalCart, clearCart, cartQty } = useContext(ShopContext);
  const tot = totalCart();

  return (
    <div className="flex justify-center items-center mt-14 md:justify-end md:px-6">
      <div className="bg-white w-[327px] rounded-lg z-[100] md:w-[377px]">
        <div className="flex items-center justify-between px-6 pt-6">
          <h2 className="font-semibold tracking-widest">CART</h2>
          <button onClick={clearCart} className="underline opacity-50">
            Remove All
          </button>
        </div>
        <div>
          {data.map((data, index) => {
            if (cartItems[data.id] !== 0) {
              return <CartItem data={data} key={index} />;
            }
          })}
        </div>
        <div className="flex justify-between px-7 font-manrope mt-7">
          <p className="opacity-50">TOTAL</p>
          <p className="font-semibold">${tot.toLocaleString()}</p>
        </div>
        <div className="flex justify-center my-7">
          {Object.values(cartItems).reduce((a, b) => a + b) > 0 ? (
            <Link href="/checkout" onClick={onClose}>
              <button className="w-[271px] bg-caramel text-white text-center py-2 hover:bg-tangerine transition ease-in-out">
                CONTINUE & PAY
              </button>
            </Link>
          ) : (
            <button className="w-[271px] bg-caramel text-white text-center py-2 hover:bg-tangerine transition ease-in-out">
              CONTINUE & PAY
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
