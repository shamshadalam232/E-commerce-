import { Pencil, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import api from '../api/Axios'

export default function Category() {

  const [category, setCategory] = useState([])

  const data = async () => {
    const fetchCategory = await api.get('/users/category')
    console.log(fetchCategory.data.getCategory)
    setCategory(fetchCategory.data.getCategory)
  }

  useEffect(() => {
    data()
  }, [])

  return (
   
<div className="min-h-screen w-full min-w-0 bg-gray-50 p-6">

  {/* Header */}
  <div className="flex items-center justify-between mb-6">
    <div>
      <p className="text-2xl font-bold">Categories</p>
      <p className="text-gray-400">
        Manage your product categories
      </p>
    </div>

    <button className="bg-black text-white px-4 py-2 rounded-lg">
      Add Categories
    </button>
  </div>


  {/* Search + Filter */}
  <div className="flex items-center justify-between gap-10 mb-6">

    <div className="flex-1">
      <input
        placeholder="Search a category..."
        className="border-2 border-amber-300 p-3 rounded-lg w-full"
      />
    </div>

    <div>
      <select className="border-2 border-pink-300 p-3 rounded-lg">
        <option>All Category</option>
      </select>
    </div>

  </div>


  {/* Table */}
  <div className="w-full min-w-0 overflow-x-auto">

    <table className="w-full shadow bg-white">

      <thead>
        <tr className="bg-gray-200 text-sm text-gray-700">
          <th className="p-3 text-left">#</th>
          <th className="p-3 text-left">Images</th>
          <th className="p-3 text-left">Category Name</th>
          <th className="p-3 text-left">Description</th>
          <th className="p-3 text-left">Products</th>
          <th className="p-3 text-left">Action</th>
        </tr>
      </thead>

      <tbody>
         {category.map((cat) => {
          return <tr className="bg-white border-b">
          <td className="p-3">1</td>

          <td className="p-3">
            image
          </td>

          <td className="p-3">
            {cat.name}
          </td>

          <td className="p-3">
            Clothing and Accessories for men
          </td>

          <td className="p-3">
            125
          </td>

          <td className="p-3">
            <button className="mr-3">
              <Pencil size={18} />
            </button>

            <button className=''>
              <Trash size={18} color="#f00505" />
            </button>
          </td>
          </tr>
         })}
        
        

      </tbody>

    </table>

  </div>

</div>

  )
}
