import React from 'react'
import Complete from '@/components/orderComplete/Complete';
import ProductNav from '@/components/ProductNav';
import MobileFooter from '@/components/MobileFooter';

export default function Checkout() {
  return (
    <div>
        <ProductNav />
        <Complete />
        <MobileFooter />
    </div>
  )
}
