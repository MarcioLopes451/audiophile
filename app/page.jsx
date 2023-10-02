import MobileHero from '../assets/home/mobile/image-header.jpg'
import HeadphoneThumbnail from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakerThumbnail from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarphoneThumbnail from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import Arrow from '../assets/shared/desktop/icon-arrow-right.svg';
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const links = [
  {
    name: 'HEADPHONES',
    link:'',
    image:HeadphoneThumbnail
  },
  {
    name: 'SPEAKERS',
    link:'',
    image:SpeakerThumbnail
  },
  {
    name: 'EARPHONES',
    link:'',
    image:EarphoneThumbnail
  },
]

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='relative w-full'>
        <Image src={MobileHero} alt='mobile hero'/>
        <div className='absolute top-[13rem] left-2 text-center'>
        <h1 className='text-sm text-white opacity-50 tracking-[0.8rem] font-thin'>NEW PRODUCT</h1>
            <h1 className='mt-5 text-white text-4xl font-semibold tracking-widest'>XX99 MARK II HEADPHONES</h1>
            <p className='mt-5 text-white opacity-60 font-light px-5'>
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link href='/'>
            <button className='bg-caramel mt-7 w-40 h-12 text-white tracking-wide text-center hover:bg-tangerine transition ease-in-out'>
                SEE PRODUCT
            </button>
            </Link>
        </div>
     </div>
     <HomeOne />
    </main>
  )
}

function HomeOne(){
  return (
    <div className='mt-20'>
      <div className='flex justify-center items-center flex-col gap-20'>
      {links.map((data,key) => (
        <div key={key}>
            <div className='bg-seasalt w-80 h-48 rounded-lg text-center relative'>
              <Image src={data.image} className='w-40 h-40 absolute -top-16 left-20' alt=''/>
              <h4 className='pt-20 font-manrope font-medium text-lg tracking-wider'>{data.name}</h4>
              <Link href='/audiophile-react/headphones' 
              className='opacity-50 text-sm flex items-center justify-center gap-2 pt-4'>
                <p className='hover:text-caramel transition ease-in-out'>SHOP</p> 
                <Image src={Arrow} className='left-3' alt='' />
              </Link>
            </div>
          </div>
      ))}
    </div>
    </div>
  )
}
