import { MoveRight } from 'lucide-react'
import React from 'react'

export default function DashBoard() {
  return (
    
<div className="min-h-screen bg-gray-50 p-3 md:p-6">

<div>
  <p className='text-2xl font-bold'>Dashboard</p>
  <p className='text-gray-400'>Welcome back, Admin 👋</p>
</div>


{/* orders card */}
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
<div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition'>
  <div className='flex items-center justify-between'>
    <div>
      <p className='text-gray-500 text-sm font-medium mr-4'>Total Orders</p>
      <p className='text-3xl font-bold text-gray-800 mt-2'>12</p>
    </div>
    <div className='bg-amber-100 text-amber-600 p-4 rounded-xl text-2xl'>🛒</div>
  </div>
  </div>


  <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition'>
  <div className='flex items-center justify-between'>
    <div>
      <p className='text-gray-500 text-sm font-medium mr-4'>Total Users</p>
      <p className='text-3xl font-bold text-gray-800 mt-2'>12</p>
    </div>
    <div className='bg-amber-100 text-amber-600 p-4 rounded-xl text-2xl'>👥</div>
  </div>
  </div>


  <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition'>
  <div className='flex items-center justify-between'>
    <div>
      <p className='text-gray-500 text-sm font-medium mr-4'>Pending Orders</p>
      <p className='text-3xl font-bold text-gray-800 mt-2'>12</p>
    </div>
    <div className='bg-amber-100 text-amber-600 p-4 rounded-xl text-2xl'>⏳</div>
  </div>
  </div>
</div>

<div className='bg-white shadow'>
  <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-3  border-b-2'>
    <div >
    <p className='font-bold'>Recent Orders</p>
    <p className='text-gray-500'>Latest customer orders</p>
    </div>
    <div className='flex gap-2 text-orange-500 items-center cursor-pointer'>
       <p>View All </p>
       <MoveRight />
    </div>
  </div>

  <div className='overflow-x-auto'>
  <table className="w-full shadow">
  <thead>
    <tr className="bg-gray-200 text-sm text-gray-700">
      <td className="p-3">Order ID</td>
      <td className="p-3">Customer</td>
      <td className="p-3">Amount</td>
      <td className="p-3">Status</td>
    </tr>
  </thead>

  <tbody>
    <tr className="bg-white border-b">
      <td className="p-3">0123</td>
      <td className="p-3">Rahul</td>
      <td className="p-3">₹2,499</td>
      <td className="p-3 text-blue-500">Delivered</td>
    </tr>
  </tbody>
</table>
</div>
</div>

</div>


  )
}
