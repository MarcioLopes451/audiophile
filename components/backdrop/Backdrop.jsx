import React from 'react';

export default function Backdrop({isOpen, onClose}) {
  return (
    <div onClick={onClose} className='fixed z-[80] top-20 left-0 w-full h-[3150px] bg-trans'></div>
  )
}