import React from 'react'
import Complete from '@/components/orderComplete/Complete';
import ProductNav from '@/components/navbar/ProductNav';
import Footer from '@/components/footer/Footer';

export default function Checkout() {
  return (
    <div>
        <ProductNav />
        <Complete />
        <Footer />
    </div>
  )
}
