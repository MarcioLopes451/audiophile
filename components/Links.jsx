import HeadphoneThumbnail from '../public/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakerThumbnail from '../public/shared/desktop/image-category-thumbnail-speakers.png';
import EarphoneThumbnail from '../public/shared/desktop/image-category-thumbnail-earphones.png';
import Arrow from '../public/shared/desktop/icon-arrow-right.svg';
import Link from 'next/link';
import Image from 'next/image';

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

export default function HomeOne(){
    return (
      <div className='mt-20'>
        <div className='flex justify-center items-center flex-col gap-20 md:flex-row md:gap-2'>
        {links.map((data,key) => (
          <div key={key}>
              <div className='bg-seasalt w-80 h-48 rounded-lg text-center relative md:w-[223px] md:h-[165px]'>
                <Image src={data.image} className='w-40 h-40 absolute -top-16 left-20 md:left-8' alt=''/>
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
  