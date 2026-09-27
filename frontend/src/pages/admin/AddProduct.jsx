import React, { useEffect, useState } from 'react'
import api from '../../api/Axios'
import toast from 'react-hot-toast'
import ProductPage from '../ProductPage'
import { Pencil, Trash } from 'lucide-react'

export default function AddProduct() {

   const [isOpen , setIsOpen] = useState(false)

   const [product, setProduct] = useState([])

   const productCall = async () => {
     const res = await api.get("/users/public/product")
     console.log(res.data.getProduct)
     setProduct(res.data.getProduct)
   }

   useEffect(() => {
    productCall()
   },[])


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

         <div className="w-full min-w-0 overflow-x-auto">

          <table>

        <thead>
        <tr className="bg-gray-200 text-sm text-gray-700"> 
          <th className="p-2 md:p-3 text-left">#</th>
          <th className="p-2 md:p-3 text-left">Images</th>
          <th className="p-2 md:p-3 text-left">Product Name</th>
          <th className="p-2 md:p-3 text-left">Products Price</th>
           <th className="p-2 md:p-3 text-left">Action</th>
        </tr>
      </thead>

      <tbody>
        {product.map((pro) => {
          return (

             <tr className="bg-white border-b" key={pro._id}>
          <td className="p-2 md:p-3">1</td>

          <td className="p-2 md:p-3">
            image
          </td>

          <td className="p-2 md:p-3">
            {pro.name}
          </td>

          <td className="p-2 md:p-3">
            125
          </td>

          <td className="p-2 md:p-3">
            <button className="mr-3">
              <Pencil size={18} />
            </button>

            <button className='' >
              <Trash size={18} color="#f00505" />
            </button>
          </td>
          </tr>


          )
        })}
         
      </tbody>

      </table>


         </div>

    </div>


  )
}
