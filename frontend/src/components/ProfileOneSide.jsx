import React from 'react'

export default function ProfileOneSide() {
  return (
    <div className='border-r-2 pr-10 cursor-pointer'>
        <div className='bg-amber-100 text-3xl p-4 m-3 rounded text-center'>My Orders</div>
        <div className='bg-amber-100 text-3xl p-4 m-3 rounded text-center'>Wishlist</div>
        <div className='bg-amber-100 text-3xl p-4 m-3 rounded text-center'>Addresses</div>
        <div className='bg-amber-100 text-3xl p-4 m-3 rounded text-center'>Payment</div>
        <div className='bg-amber-100 text-3xl p-4 m-3 rounded text-center'>Settings</div>
        <div className='bg-amber-100 text-3xl p-4 m-3 rounded text-center'>Logout</div>
    </div>
  )
}
