import React, { useEffect, useState } from 'react'
import api from '../../api/Axios'
import toast from 'react-hot-toast'
import ProductPage from '../ProductPage'

export default function AddProduct() {

   const [isOpen , setIsOpen] = useState(false)

  

  return (

    <div className="min-h-screen bg-gray-50 p-3 md:p-6">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between pr-2">
        <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Create Product
        </h1>
        <p className="text-gray-500 mt-1">
          Add a new product to your store
        </p>
        </div>
        <div>
          <button className='bg-blue-600 text-white p-2 rounded-lg' onClick={() => setIsOpen(true)}>Add Product</button>
        </div>
      </div>


       {/* Add Product Wala code */}

         {isOpen && (<ProductPage setIsOpen={setIsOpen} isOpen={isOpen} />)} 

    </div>


  )
}
