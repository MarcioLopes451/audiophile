import MobileHero from '../assets/home/mobile/image-header.jpg'
import Image from 'next/image'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Image src={MobileHero} alt='mobile hero'/>
     </div>
    </main>
  )
}
