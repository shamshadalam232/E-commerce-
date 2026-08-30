import { Handbag, Headset, Laptop, RockingChair, RotateCcw, TabletSmartphone, Truck, Volleyball, Watch } from 'lucide-react'
import React from 'react'

export default function ProductCard() {
  return (
    <>
    <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 p-5'>

  {/* Laptop */}
  <div className='group bg-amber-100 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-md'>
    <div className='bg-white rounded-full p-3 mb-2 transition duration-300 group-hover:scale-110'>
      <Laptop size={48} color="#361259" />
    </div>
    <p className='font-medium text-gray-700'>Laptops</p>
  </div>

  {/* Volleyball */}
  <div className='group bg-gray-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-md'>
    <div className='bg-white rounded-full p-3 mb-2 transition duration-300 group-hover:scale-110'>
      <Volleyball size={48} color="#361259" />
    </div>
    <p className='font-medium text-gray-700'>Volleyball</p>
  </div>

  {/* Watch */}
  <div className='group bg-sky-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-md'>
    <div className='bg-white rounded-full p-3 mb-2 transition duration-300 group-hover:scale-110'>
      <Watch size={48} color="#361259" />
    </div>
    <p className='font-medium text-gray-700'>Watch</p>
  </div>

  {/* Chairs */}
  <div className='group bg-purple-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-md'>
    <div className='bg-white rounded-full p-3 mb-2 transition duration-300 group-hover:scale-110'>
      <RockingChair size={48} color="#361259" />
    </div>
    <p className='font-medium text-gray-700'>Chairs</p>
  </div>

  {/* Handbag */}
  <div className='group bg-green-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-md'>
    <div className='bg-white rounded-full p-3 mb-2 transition duration-300 group-hover:scale-110'>
      <Handbag size={48} color="#361259" />
    </div>
    <p className='font-medium text-gray-700'>Handbag</p>
  </div>

  {/* Headphones */}
  <div className='group bg-orange-100 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-md'>
    <div className='bg-white rounded-full p-3 mb-2 transition duration-300 group-hover:scale-110'>
      <Headset size={48} color="#361259" />
    </div>
    <p className='font-medium text-gray-700'>Headphones</p>
  </div>

  {/* Mobiles */}
  <div className='group bg-gray-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-md'>
    <div className='bg-white rounded-full p-3 mb-2 transition duration-300 group-hover:scale-110'>
      <TabletSmartphone size={48} color="#361259" />
    </div>
    <p className='font-medium text-gray-700'>Mobiles</p>
  </div>

</div>

<div>
  <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 p-5'>
     
     <div className='group bg-sky-200 rounded-xl p-4 flex flex-row items-center gap-4 cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-md'>
    <div className='bg-white rounded-full p-3 mb-2 transition duration-300 group-hover:scale-110'>
      <Truck size={56} color="#361259" />
    </div>
    <p className='font-medium text-gray-700 text-4xl'>Free Shipping</p>
    
  </div>

  <div className='group bg-sky-200 rounded-xl p-4 flex flex-row items-center gap-4 cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-md'>
    <div className='bg-white rounded-full p-3 mb-2 transition duration-300 group-hover:scale-110'>
      <RotateCcw size={56} />
    </div>
    <p className='font-medium text-gray-700 text-4xl'>Easy Returns</p>
  </div>

  <div className='group bg-sky-200 rounded-xl p-4 flex flex-row items-center gap-4 cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-md'>
    <div className='bg-white rounded-full p-3 mb-2 transition duration-300 group-hover:scale-110'>
     <Headset size={56} />
    </div>
    <p className='font-medium text-gray-700 text-4xl'>24/7 Support</p>
  </div>


  </div>
</div>
</>
  )
}
