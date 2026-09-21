import React from 'react'
import AddProduct from '../pages/admin/AddProduct'
import DashBoard from '../pages/admin/DashBoard'
import EditProduct from '../pages/admin/EditProduct'
import Category from './Category'
import AddCategory from './AddCategory'

export default function AdminSecondSide({adminActiveTab}) {
  return (
    <div  className='w-full lg:flex-1 min-w-0'>
        {adminActiveTab === "dashBoard" && <DashBoard /> }

        {adminActiveTab === "createProduct" && <AddProduct />}

        {adminActiveTab === "editProduct" && <EditProduct/> }

        {adminActiveTab === "category" && <Category/> }
    </div>
  )
}
