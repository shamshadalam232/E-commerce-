
import React, { useState } from 'react'
import imagefirst from '../assets/1stImage.png'
import imagesecond from '../assets/image2.jpg'
import imagethird from '../assets/image3.jpg'
import { MoveRight } from 'lucide-react'

export default function HomeKa() {

  const image = [imagefirst, imagesecond, imagethird]

  const [current, setCurrent] = useState(0)

  return (
    <div className='bg-amber-100 m-3 relative flex items-center justify-between rounded-2xl h-100'>

      {/* Left Content */}
      <div className='ml-18'>
        <h1 className='text-blue-700 mb-3'>
          SUMMER SALE
        </h1>

        <h1 className='text-3xl font-bold mb-3'>
          Discover Best Products For You
        </h1>

        <h1 className='mb-3 text-gray-600'>
          Save more with exclusive deals on top quality products
        </h1>

        <div className='flex items-center bg-blue-500 p-2 pl-6 rounded-sm text-white w-40 gap-4'>
          <button className='text-white'>
            Shop Now
          </button>

          <MoveRight color="#ffffff" />
        </div>
      </div>


      {/* Image + Buttons */}
      <div className='relative w-100 h-full flex items-center mr-10'>

        <img
          src={image[current]}
          className='w-full h-80 object-cover rounded-2xl'
        />

        {/* Buttons */}
        <div className='absolute inset-0 flex items-center justify-between px-2'>

          <button
            className='bg-white/80 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow'
            onClick={() =>
              setCurrent((current - 1 + image.length) % image.length)
            }
          >
            &lt;
          </button>

          <button
            className='bg-white/80 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow'
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


