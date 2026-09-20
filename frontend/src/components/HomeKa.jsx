
import React, { useState } from 'react'
import imagefirst from '../assets/1stImage.png'
import imagesecond from '../assets/image2.jpg'
import imagethird from '../assets/image3.jpg'
import { MoveRight } from 'lucide-react'

export default function HomeKa() {

  const image = [imagefirst, imagesecond, imagethird]

  const [current, setCurrent] = useState(0)

  return (
    <div className='bg-amber-100 m-3 relative flex flex-col md:flex-row items-center justify-between rounded-2xl min-h-[500px]  md:h-[400px] py-8  md:py-0'>

      {/* Left Content */}
      <div className='w-full md:w-1/2 px-6 md:pl-12 lg:pl-18 text-center md:text-left flex flex-col items-center  md:items-start'>
        <h1 className='text-blue-700 mb-3 text-sm md:text-base font-semibold tracking-wide'>
          SUMMER SALE
        </h1>

        <h1 className='text-3xl leading-tight font-bold mb-3'>
          Discover Best Products For You
        </h1>

        <h1 className='mb-5 text-sm md:text-base leading-relaxed max-w-md text-gray-600'>
          Save more with exclusive deals on top quality products
        </h1>

        <div className='flex items-center justify-center hover:bg-blue-700 bg-blue-500 p-2.5 pl-6 rounded-lg text-white w-40 gap-4 transition active:scale-95 cursor-pointer'>
          <button className='text-white'>
            Shop Now
          </button>

          <MoveRight color="#ffffff" />
        </div>
      </div>


      {/* Image + Buttons */}
      <div className='relative w-full md:w-1/2 h-64 md:h-full flex items-center justify-center mt-16 md:mt-0 md:mr-10 px-6 md:px-0'>

        <img
          src={image[current]}
          className='w-full h-56 sm:h-64 md:h-80 object-cover rounded-2xl'
        />

        {/* Buttons */}
        <div className='absolute inset-0 flex items-center justify-between px-2'>

          <button
            className='bg-white/90 rounded-full w-9 h-9 md:w-10 md:h-10  flex items-center justify-center text-2xl font-bold shadow hover:bg-white transition'
            onClick={() =>
              setCurrent((current - 1 + image.length) % image.length)
            }
          >
            &lt;
          </button>

          <button
            className='bg-white/80 rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-2xl font-bold shadow hover:bg-white  transition '
            onClick={() =>
              setCurrent((current + 1) % image.length)
            }
          >
            &gt;
          </button>

        </div>

      </div>

    </div>
  )
}


