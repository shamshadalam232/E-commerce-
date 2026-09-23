import { Camera, MoveRight, Package2, ShoppingCart, Smartphone } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Iphone from '../assets/shabreen-removebg-preview.png'
import api from '../api/Axios'

export default function ProductFilter() {

  const [product, setProduct] = useState([])

  const fetchJob = async () => {
    const job = await api.get('/users/public/product')
    console.log(job.data.getProduct)
    setProduct(job.data.getProduct)
  }

  useEffect(() => {
    fetchJob()
  },[])

  return (
    <>
      <div className='flex justify-between items-center pl-5 pr-5'>
        <div>
          <h1 className='text-3xl font-bold'>Best Sellers</h1>
        </div>
        <div>
          <MoveRight size={44}/>
        </div>
      </div>




    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
     
    
       { product.map((product) => (
  <div key={product._id} className="w-full  rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">

   
     {/* Product Image */}
    <div className="relative bg-gray-50 md:p-4 sm:p-6 flex justify-center">

      {/* Discount Badge */}
      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
        14% OFF
      </span>

      {/* Wishlist */}
      <button className="absolute top-3 right-3 bg-white shadow-md rounded-full p-2 hover:scale-110 transition">
        ❤️
      </button>

      <img
        src={product?.images}
        alt="iPhone 14"
        className="w-24 sm:w-36 h-28 sm:h-40 md:h-52 object-contain hover:scale-105 transition duration-300"
      />
    </div>

    {/* Product Information */}
    <div className="p-2.5 md:p-4">

      {/* Name + Brand */}
      <h1 className="text-sm md:text-xl line-clamp-2 sm:text-xl font-bold text-gray-900">
        {product?.name}
      </h1>

      <p className="text-sm text-gray-500 mt-1 hidden md:block">
        Apple
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-500 text-sm">
          ⭐⭐⭐⭐
        </span>

        <span className="text-sm font-medium text-gray-600">
          4.0
        </span>

        <span className="text-xs text-gray-400">
          (120 Reviews)
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 mt-3">
        <h1 className="text-lg md:text-2xl sm:text-3xl font-bold text-gray-900">
          $599
        </h1>

        <h1 className="text-sm sm:text-base line-through text-gray-400">
          $699
        </h1>
      </div>

      {/* Savings */}
      <p className="hidden md:block text-xs text-green-600 font-semibold mt-1">
        Save $100
      </p>

      {/* Specifications */}
      <div className="mt-4 space-y-2">

        <div className="flex items-start gap-1.5 text-sm text-gray-600">
          <Package2
            size={16}
            color="#4339c6"
            strokeWidth={1.8}
          />
          <span>256GB Storage | 12GB RAM</span>
        </div>

        <div div className="flex items-start gap-1.5 text-sm text-gray-600">
          <Smartphone
            size={16}
            color="#4339c6"
            strokeWidth={1.8}
          />
          <span>6.2" AMOLED Display</span>
        </div>

        <div div className="flex items-start gap-1.5 text-sm text-gray-600">
          <Camera
            size={16}
            color="#4339c6"
            strokeWidth={1.8}
          />
          <span>50MP Triple Camera</span>
        </div>

      </div>

      {/* Stock */}
      <div className="flex items-center gap-2 mt-4">
        <span className="h-2.5 w-2.5 bg-green-500 rounded-full"></span>

        <span className="text-sm text-green-600 font-semibold">
          In Stock
        </span>
      </div>

      {/* Add To Cart */}
      <button
        className="mt-4 w-full flex items-center justify-center gap-2 
        border-2 border-blue-800 text-blue-800 
        rounded-xl py-2 md:py-2.5 font-semibold
        hover:bg-blue-800 hover:text-white
        active:scale-95 transition-all duration-200"
      >
        <ShoppingCart
          size={21}
          strokeWidth={1.8}
        />

        Add to Cart
      </button>
      {/* Buy Now */}
      <button
        className="mt-2 w-full bg-blue-800 text-white 
        rounded-xl py-2 md:py-2.5 font-semibold
        hover:bg-blue-900
        active:scale-95 transition-all duration-200"
      >
        Buy Now
      </button>
    </div>
   
  </div>
  )) }

</div>
    </>
  )
}
