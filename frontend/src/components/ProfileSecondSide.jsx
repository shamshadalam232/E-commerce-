import React from 'react'
import WishListPage from '../pages/WishListPage'
import OrdersPage from '../pages/OrdersPage'
import AddressPage from '../pages/AddressPage'

export default function ProfileSecondSide({activeTab}) {
  return (
   <div>

   {activeTab === "orders" && <OrdersPage />}

   {activeTab === "wishlist" && <WishListPage />}

   {activeTab === "address" && <AddressPage />}

</div>
  )
}
