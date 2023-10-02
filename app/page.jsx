import MobileHero from '../assets/home/mobile/image-header.jpg'
import HeadphoneThumbnail from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakerThumbnail from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarphoneThumbnail from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import Arrow from '../assets/shared/desktop/icon-arrow-right.svg';
import ImageSpeaker from '../assets/home/desktop/image-speaker-zx9.png';
import Circles from '../assets/home/desktop/pattern-circles.svg';
import ImageSpeaker2 from '../assets/home/mobile/image-speaker-zx7.jpg';
import Earphones from '../assets/home/mobile/image-earphones-yx1.jpg';
import Testimonials from '../assets/shared/mobile/image-best-gear.jpg';
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import MobileFooter from '@/components/MobileFooter';

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

     <div className='mt-10'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <div className='bg-caramel w-80 flex justify-center items-center flex-col rounded-lg relative'>
          <Image src={ImageSpeaker} alt='speakers' className='w-44 mt-14'/>
          <Image src={Circles} alt='circles' className='absolute top-0'/>
          <div className='text-center my-10'>
            <h1 className='text-white text-5xl tracking-wider font-semibold'>ZX9 SPEAKER</h1>
            <p className='text-white opacity-70 mt-6 leading-6'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Link href='/zx9-speaker'>
              <button className='w-40 h-12 mt-9 text-white text-sm font-manrope bg-night hover:bg-gray transition ease-in-out'>
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>

        <div className='relative'>
        <Image src={ImageSpeaker2} alt='speakers2' className='w-80 rounded-lg'/>
        <div className='absolute text-black top-28 left-2'>
          <p className='text-3xl tracking-wider font-semibold'>ZX7 SPEAKER</p>
          <Link href='/zx7-speaker'>
            <button className='mt-9 w-40 h-10 text-black border-solid border-2 border-night hover:bg-night transition ease-in-out hover:text-white'>
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      <div>
        <Image src={Earphones} alt='earphones' className='w-80 rounded-lg'/>
        <div className='mt-5 bg-anti-flash-white rounded-lg'>
          <div className='py-10 px-4'>
            <p className='font-manrope text-3xl tracking-wider'>YX1 EARPHONES</p>
            <Link href='/yx1-earphones'>
              <button className='mt-9 w-40 h-10 font-manrope text-black border-solid border-2 border-night hover:bg-night transition ease-in-out hover:text-white'>
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <div className='flex justify-center items-center flex-col gap-5'>
          <Image src={Testimonials} alt='testimonials' className='w-80 rounded-lg'/>
          <div className='mt-10 flex flex-col justify-center items-center text-center px-4'>
            <p className='text-3xl tracking-wide font-semibold'>BRINGING YOU THE 
            <span className='text-caramel'> BEST</span> AUDIO GEAR
            </p>
            <p className='mt-6 opacity-60'>
              Located at the heart of New York City, Audiophile is the premier store for high 
              end headphones, earphones, speakers, and audio accessories. We have a large showroom 
              and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
              Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
        </div>
      </div>
      </div>
     </div>
     <MobileFooter />
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
