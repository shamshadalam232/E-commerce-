import React from 'react'

export default function OrdersPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
    
      {/* Welcome */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, Shamshad! 👋
        </h1>
        <p className="text-gray-500 mt-1">
          Here's a quick overview of your account.
        </p>
      </div>
    
    
      {/* Stats Cards */}
      <div className="flex gap-5 mb-8">
    
        <div className="bg-white w-44 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <p className="text-gray-500 text-sm font-medium">Orders</p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">12</h1>
        </div>
    
        <div className="bg-white w-44 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <p className="text-gray-500 text-sm font-medium">Pending</p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">2</h1>
        </div>
    
        <div className="bg-white w-44 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <p className="text-gray-500 text-sm font-medium">Wishlist</p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">5</h1>
        </div>
    
      </div>
    
    
      {/* Personal Information */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 max-w-2xl">
    
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold text-gray-800">
            Personal Information
          </h2>
    
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Edit
          </button>
        </div>
    
    
        {/* Name */}
        <div className="flex py-3 border-b border-gray-100">
          <p className="w-24 text-gray-500 font-medium">Name</p>
          <p className="text-gray-800">Shamshad Alam</p>
        </div>
    
    
        {/* Email */}
        <div className="flex py-3 border-b border-gray-100">
          <p className="w-24 text-gray-500 font-medium">Email</p>
          <p className="text-gray-800">
            shamshadalam10313@gmail.com
          </p>
        </div>
    
    
        {/* Phone */}
        <div className="flex py-3">
          <p className="w-24 text-gray-500 font-medium">Phone</p>
          <p className="text-gray-800">
            9142225735
          </p>
        </div>
    
    
        {/* Button */}
        <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition">
          Edit Profile
        </button>
    
      </div>
    </div>
  )
}
