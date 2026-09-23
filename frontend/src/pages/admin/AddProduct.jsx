import React, { useEffect, useState } from 'react'
import api from '../../api/Axios'
import toast from 'react-hot-toast'

export default function AddProduct() {

const [product, setProduct] = useState({
     name : "",
     description: "",
     price: "",
     discountPrice: "",
     images:null,
     category: "",
     brand: "",
     stock: "",
     rating: "",
     numReviews: "",
     features: "",
     isActive: false 
})

const [category, setCategory] = useState([])

const categoryData = async () => {
  const data = await api.get('/users/category')
  console.log(data.data.getCategory)
  setCategory(data.data.getCategory)
}

useEffect(() => {
  categoryData()
},[])

const handleOnChange = (e) => {

  if(e.target.type === "file"){

    setProduct({
      ...product,
      [e.target.name] : e.target.files[0]
    })

    return
  }

  if (e.target.type === "checkbox") {
    setProduct({
      ...product,
      [e.target.name]: e.target.checked
    })
    return
  }

    setProduct({
      ...product,
      [e.target.name]:  e.target.value
    })

  
    
}

console.log(product)

const handleOnSubmit = async (e) => {
   e.preventDefault()

   const formData = new FormData()

   formData.append("name", product.name)
   formData.append("description", product.description)
   formData.append("price", product.price)
   formData.append("discountPrice", product.discountPrice)
   formData.append("images", product.images)
   formData.append("category", product.category)
   formData.append("brand", product.brand)
   formData.append("stock", product.stock)
   formData.append("rating", product.rating)
   formData.append("numReviews", product.numReviews)

   const features = product.features
    .split(',')
    .map(feature => feature.trim())
    .filter(feature => feature !== '')
   
   formData.append("features", JSON.stringify(features))

   formData.append("isActive", product.isActive)
  

   const onsubmit = await api.post('/users/products',formData)
   toast.success('your product craeted successfully')
   setProduct({
    name : "",
     description: "",
     price: "",
     discountPrice: "",
     images:null,
     category: "",
     brand: "",
     stock: "",
     rating: "",
     numReviews: "",
     features: "",
     isActive: false 
   })
}


  return (
    
<div className="min-h-screen bg-gray-50 p-3 md:p-6">

  {/* Header */}
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-gray-800">
      Create Product
    </h1>
    <p className="text-gray-500 mt-1">
      Add a new product to your store
    </p>
  </div>

  <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 md:p-6 max-w-6xl  w-full">
   <form onSubmit={handleOnSubmit}>
    {/* Basic Information */}
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Basic Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
       
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name
          </label>
          <input
            value={product.name}
            onChange={handleOnChange}
            name='name'
            type="text"
            placeholder="Enter product name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Brand
          </label>
          <input
          value={product.brand}
          onChange={handleOnChange}
          name='brand'
            type="text"
            placeholder="Enter brand name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>

        <textarea
        value={product.description}
        onChange={handleOnChange}
        name='description'
          rows="5"
          placeholder="Enter product description"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400 resize-none"
        />
      </div>
    </div>


    {/* Pricing */}
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Pricing & Stock
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price
          </label>
          <input
          value={product.price}
          onChange={handleOnChange}
          name='price'
            type="number"
            placeholder="₹ 0"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Discount Price
          </label>
          <input
          value={product.discountPrice}
          onChange={handleOnChange}
          name='discountPrice'
            type="number"
            placeholder="₹ 0"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Stock
          </label>
          <input
          value={product.stock}
          onChange={handleOnChange}
          name='stock'
            type="number"
            placeholder="Enter stock quantity"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

      </div>
    </div>


    {/* Category & Image */}
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Category & Image
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>

         
            
            <select 
            name='category' value={product.category} onChange={handleOnChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="">Select Category</option>
             {category.map((category) => (
            
            <option key={category._id} value={category._id}>{category.name}</option>
             ))}
          </select>
         
        </div>

          

          

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Image
          </label>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-amber-400 cursor-pointer">
            <p className="text-gray-500">
              📷 Upload Product Image
            </p>
            <input onChange={handleOnChange} type='file' name='images'></input>
            <p className="text-xs text-gray-400 mt-1">
              PNG, JPG or WEBP
            </p>
          </div>
        </div>

      </div>
    </div>


    {/* Product Details */}
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Product Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rating
          </label>

          <select
          onChange={handleOnChange}
          value={product.rating}
          name='rating'
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="">Select Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Reviews
          </label>

          <input
          onChange={handleOnChange}
          value={product.numReviews}
          name='numReviews'
            type="number"
            placeholder="0"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

      </div>
    </div>


    {/* Features */}
    <div className="mb-8">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-800">
          Product Features
        </h2>

      </div>

      <div className="space-y-3">

        <div className="flex gap-3">
          <input
          value={product.features}
          onChange={handleOnChange}
          name='features'
            type="text"
            placeholder="Enter product feature"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          />

         
        </div>

      </div>
    </div>


    {/* Status */}
    <div className="mb-8">
      <label className="flex items-center gap-3 cursor-pointer">

        <input
        checked={product.isActive}
        onChange={handleOnChange}
        name='isActive'
          type="checkbox"
          className="w-5 h-5 accent-amber-500"
        />

        <span className="text-gray-700 font-medium">
          Product is Active
        </span>

      </label>
    </div>


    {/* Buttons */}
    <div className="flex justify-end gap-4 border-t border-gray-200 pt-6">

      <button
        type="button"
        className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="px-7 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold"
      >
        Create Product
      </button>
    
    </div>
    </form>
  </div>
 
</div>
  )
}
