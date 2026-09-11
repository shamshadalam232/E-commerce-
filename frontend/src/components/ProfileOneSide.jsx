import React, { useState } from 'react'
import { ShoppingBag,Heart,MapPin, CreditCard, LogOut} from "lucide-react";

export default function ProfileOneSide({setActiveTab, activeTab}) {

 

  return (
   <div className="w-64 border-r border-gray-200 pr-6">

  <div className="space-y-2">

    {/* My Orders */}
    <div onClick={() => setActiveTab("orders")} className="flex items-center gap-3 px-4 py-3 rounded-lg
                    bg-blue-50 text-blue-600 font-semibold cursor-pointer">
      <ShoppingBag size={20} />
      <span>My Orders</span>
    </div>

    {/* Wishlist */}
    <div onClick={() => setActiveTab("wishlist")} className="flex items-center gap-3 px-4 py-3 rounded-lg
                    text-gray-600 font-medium
                    hover:bg-gray-100 hover:text-gray-900
                    cursor-pointer transition">
      <Heart size={20} />
      <span>Wishlist</span>
    </div>

    {/* Addresses */}
    <div onClick={() => setActiveTab("address")} className="flex items-center gap-3 px-4 py-3 rounded-lg
                    text-gray-600 font-medium
                    hover:bg-gray-100 hover:text-gray-900
                    cursor-pointer transition">
      <MapPin size={20} />
      <span>Addresses</span>
    </div>

    {/* Payment */}
    <div className="flex items-center gap-3 px-4 py-3 rounded-lg
                    text-gray-600 font-medium
                    hover:bg-gray-100 hover:text-gray-900
                    cursor-pointer transition">
      <CreditCard size={20} />
      <span>Payment</span>
    </div>

    {/* Logout */}
    <div className="flex items-center gap-3 px-4 py-3 rounded-lg
                    text-red-500 font-medium
                    hover:bg-red-50 hover:text-red-600
                    cursor-pointer transition">
      <LogOut size={20} />
      <span>Logout</span>
    </div>

  </div>

</div>
  )
}
