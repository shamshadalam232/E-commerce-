import React from 'react'

export default function AddProduct() {
  return (
    
<div className="min-h-screen bg-gray-50 p-6">

  {/* Header */}
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-gray-800">
      Create Product
    </h1>
    <p className="text-gray-500 mt-1">
      Add a new product to your store
    </p>
  </div>

  <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 max-w-6xl">

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
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option>Select Category</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Shoes</option>
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
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option>1 Star</option>
            <option>2 Stars</option>
            <option>3 Stars</option>
            <option>4 Stars</option>
            <option>5 Stars</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Reviews
          </label>

          <input
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

        <button
          type="button"
          className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          + Add Feature
        </button>
      </div>

      <div className="space-y-3">

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter product feature"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          />

          <button
            type="button"
            className="px-4 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
          >
            ✕
          </button>
        </div>

      </div>
    </div>


    {/* Status */}
    <div className="mb-8">
      <label className="flex items-center gap-3 cursor-pointer">

        <input
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
        type="button"
        className="px-7 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold"
      >
        Create Product
      </button>

    </div>

  </div>
</div>


  )
}
