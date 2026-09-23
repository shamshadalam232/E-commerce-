import React, { useState } from 'react'
import api from '../../api/Axios'

export default function AddCategory() {

    const [category, setCategory] = useState({
        name:"",
        slug:"",
    })

    

    const onClick =async (e) => {
        e.preventDefault()
        const onSubmit =await api.post('/users/admin/category', category)
        setCategory({
            name:"",
            slug:"",
            images:null
        })
    }



    const onChange = (e) => {

        if(e.target.type == "file"){
            setCategory({
                ...category,
                [e.target.name]  : e.target.files[0]
            })

            return
        }


       setCategory({
        ...category,
        [e.target.name]: e.target.value
     })
    }
    

    console.log(category)


  return (
       <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
           {/* Modal */}
           <div className='bg-white w-full max-w-lg rounded-xl shadow-xl'>
            {/* Header */}
            <div className='flex items-center justify-between p-5 border-b'>
                <div>
                    <p className='text-xl font-bold'>Categories</p>
                    <p className='text-sm text-gray-500 mt- 1'>Create Your product categories</p>
                </div>
                <button>X</button>
            </div>

            {/* form */}

            <div  className='p-5'>
                <form onSubmit={onClick} className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium  text-gray-700'>Name</label>
                        <input  value={category.name} onChange={onChange} type='text' name='name' className='w-full border border-gray-300 rounded-lg  px-3  py-2 outline-none focus:ring-2 focus:ring-black'/>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label  className='text-sm font-medium  text-gray-700'>Slug</label>
                        <input value={category.slug} onChange={onChange} type='text' name='slug' className='w-full border border-gray-300 rounded-lg  px-3  py-2 outline-none focus:ring-2 focus:ring-black'/>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label  className='text-sm font-medium  text-gray-700'>Image</label>
                        <input onChange={onChange} type='file' name='image' className='w-full border border-gray-300 rounded-lg px-3 py-2'/>
                    </div>

                    <button type='submit' className='w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800  transition' >Create Category</button>
                </form>
            </div>
           </div>
       </div>
  )
}
