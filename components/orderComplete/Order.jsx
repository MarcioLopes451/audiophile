"use client";
import React, { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";
import Image from "next/image";

export default function Order(props) {
  const { cartItems } = useContext(ShopContext);
  return (
    <div>
      <div className=" bg-anti-flash-white mt-5 md:w-[350px]">
        <div className="flex items-center gap-7">
          <Image
            src={props.data.image.mobile}
            width={36}
            height={36}
            className="w-9 h-9"
            alt="order"
          />
          <p className="font-semibold">{props.data.shortName}</p>
          <p className="opacity-50 font-manrope">x{cartItems[props.data.id]}</p>
        </div>
      </div>
    </div>
  );
}
