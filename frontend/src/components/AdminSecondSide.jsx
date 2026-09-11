import React from 'react'
import AddProduct from '../pages/admin/AddProduct'
import DashBoard from '../pages/admin/DashBoard'
import EditProduct from '../pages/admin/EditProduct'

export default function AdminSecondSide({adminActiveTab}) {
  return (
    <div>
        {adminActiveTab === "dashBoard" && <DashBoard /> }

        {adminActiveTab === "createProduct" && <AddProduct />}

        {adminActiveTab === "editProduct" && <EditProduct/> }
    </div>
  )
}
