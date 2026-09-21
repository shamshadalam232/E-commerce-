import React, { useState } from 'react'
import { Heart, CreditCard, LogOut, LayoutDashboard, SquareChartGantt, Logs, Users, ListSortAscending, Star} from "lucide-react";


export default function AdminProfileOneSide({adminActiveTab, setAdminActiveTab}) {

  const [isOpen, setIsOpen] = useState(false)

  const OnClickHum = () => {
    setIsOpen(prev => !prev)
  }

  return (
   <div className=" w-full lg:w-64 border-r lg:border-r border-gray-200 pr-0 lg:pr-6">

       {/* MOBILE BUTTON */}

       
    <button onClick={OnClickHum}
    className='lg:hidden  w-full  flex items-center justify-between px-4 py-3 bg-blue-50 text-blue-600  rounded-lg font-semibold mb-3'
    >
      <span>Admin Menu</span>
      <span>{isOpen ? "X" : "☰"}</span>
    </button>

  <div className={`${isOpen ? "block"  : "hidden"} lg:block space-y-2`}>

    {/* My Orders */}
    <div onClick={() => {
       setAdminActiveTab("dashBoard")
      setIsOpen(false)}
    } className="flex items-center gap-3 px-4 py-3 rounded-lg
                    bg-blue-50 text-blue-600 font-semibold cursor-pointer">
      <LayoutDashboard size={20} />
      <span>Dashboard</span>
    </div>

    {/* Wishlist */}
    <div onClick={() => {setAdminActiveTab("createProduct")
     setIsOpen(false)}} className="flex items-center gap-3 px-4 py-3 rounded-lg
                    text-gray-600 font-medium
                    hover:bg-gray-100 hover:text-gray-900
                    cursor-pointer transition">
      <SquareChartGantt size={20} />
      <span>Products</span>
    </div>

    {/* Wishlist */}
    <div onClick={() => {setAdminActiveTab("createProduct")
      setIsOpen(false)}
    } className="flex items-center gap-3 px-4 py-3 rounded-lg
                    text-gray-600 font-medium
                    hover:bg-gray-100 hover:text-gray-900
                    cursor-pointer transition">
     <Logs size={20} />
      <span>Orders</span>
    </div>


    {/* Wishlist */}
    <div onClick={() => {setAdminActiveTab("createProduct")
      setIsOpen(false)}
    } className="flex items-center gap-3 px-4 py-3 rounded-lg
                    text-gray-600 font-medium
                    hover:bg-gray-100 hover:text-gray-900
                    cursor-pointer transition">
      <Users size={20} />
      <span>Users</span>
    </div>



    {/* Category */}
    <div onClick={() => {setAdminActiveTab("category")
      setIsOpen(false)}
    } className="w-full flex items-center gap-3 px-4 py-3 rounded-lg
                    text-gray-600 font-medium
                    hover:bg-gray-100 hover:text-gray-900
                    cursor-pointer transition">
      <ListSortAscending size={20} />
      <span>Categories</span>
    </div>



    {/* Wishlist */}
    <div onClick={() => {setAdminActiveTab("createProduct")
      setIsOpen(false)}
    } className="flex items-center gap-3 px-4 py-3 rounded-lg
                    text-gray-600 font-medium
                    hover:bg-gray-100 hover:text-gray-900
                    cursor-pointer transition">
      <Star size={20} />
      <span>Reviews</span>
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
