import MobileHero from '../public/home/mobile/image-header.jpg'
import ImageSpeaker from '../public/home/desktop/image-speaker-zx9.png';
import Circles from '../public/home/desktop/pattern-circles.svg';
import ImageSpeaker2 from '../public/home/mobile/image-speaker-zx7.jpg';
import Earphones from '../public/home/mobile/image-earphones-yx1.jpg';
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Link from 'next/link';
import Links from '@/components/Links'
import MobileFooter from '@/components/MobileFooter';
import Testimonial from '@/components/Testimonials';


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

     <Links />

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
      <Testimonial />
      </div>
     </div>
     <MobileFooter />
    </main>
  )
}

