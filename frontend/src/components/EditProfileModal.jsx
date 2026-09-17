import React from 'react'

export default function EditProfileModal() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
<div className="bg-white w-full  max-w-md p-6 rounded-lg">


  <div className='flex justify-between items-center mb-5'>
    <div>
      <p  className='text-2xl font-bold'>Edit User</p>
      <p className='text-sm text-gray-500'>Update user information</p>
    </div>
    <div>
      <p>x</p>
    </div>
  </div>


    <div className="w-ful  mb-5">
      <p className='mb-2'>Phone No.</p>
      <input type="text" className="bg-gray-200 rounded p-2 w-full" placeholder='Enter Your phone number...'/>
    </div>
    <div className="w-full pb-5">
      <div className='mb-2'>
          <p>Role</p>
      </div>
      
       <div className='w-full'>
        <select className='w-full'>
          <option>Select Role</option>
        <option>USER</option>
        <option>ADMIN</option>
        </select>
       </div>

    </div>

    <div className='flex justify-end gap-3 hover:text-white'>
      
        <button  className=' px-5 py-2 border-2 border-gray-500 rounded-lg hover:bg-blue-500'>Cancel</button>
  
        <button className=' px-5 py-2 border-2 border-gray-500 rounded-lg hover:bg-blue-500'>Update</button>
    
    </div>
</div>
  
  </div>
  )
}
