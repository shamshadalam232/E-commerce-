import React, { useState } from 'react'
import api from '../api/Axios'

export default function EditProfileModal({setOpen, open}) {

  const [updateProfile, setUpdateProfile] = useState({})

  const onChangeFunction = (e) => {
    setUpdateProfile({
      ...updateProfile,
      [e.target.name ] : e.target.value
    })
  }

  const onSubmitFunction = async() => {
     const updatedata = await api.patch('/users/profile', updateProfile)
  }


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
<div className="bg-white w-full  max-w-md p-6 rounded-lg">


  <div className='flex justify-between items-center mb-5'>
    <div>
      <p  className='text-2xl font-bold'>Edit User</p>
      <p className='text-sm text-gray-500'>Update user information</p>
    </div>
    <div>
      <p onClick={() => setOpen(false)}>x</p>
    </div>
  </div>

     <form onSubmit={onSubmitFunction}>
    <div className="w-ful  mb-5">
      <p className='mb-2'>Phone No.</p>
      <input name='phone' onChange={onChangeFunction} value={updateProfile.phone} type="text" className="bg-gray-200 rounded p-2 w-full border-2 border-gray-400" placeholder='Enter Your phone number...'/>
    </div>
    <div className="w-full pb-5">
      <div className='mb-2'>
          <p>Role</p>
      </div>
      
       <div className='w-full'>
        <select onChange={onChangeFunction} name='role' className='w-full border-2 border-gray-400 p-2'>
          <option>Select Role</option>
        <option value='user' >USER</option>
        <option value='admin'>ADMIN</option>
        </select>
       </div>

    </div>

    <div className='flex justify-end gap-3 '>
      
        <button  className=' px-5 py-2 border-2 border-gray-500 rounded-lg hover:bg-blue-500 hover:text-white'>Cancel</button>
  
        <button type='submit' className=' px-5 py-2 border-2 border-gray-500 rounded-lg hover:bg-blue-500 hover:text-white'>Update</button>
    
    </div>
    </form>
</div>
  
  </div>
  )
}
