import React, { useState } from 'react'
import loginPage from '../assets/loginPage.png'
import { Handbag } from 'lucide-react'
import api from '../api/Axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function LOginPage() {

  const[loginData, setLoginData] = useState({
    email:'',
    password:''
  })

  const navigation = useNavigate()

  const handleChange = (e) => {
   setLoginData({
    ...loginData,
    [e.target.name]:e.target.value
   })
  }

  console.log(loginData)

  const handleSubmit = async (e) => {
   e.preventDefault()
   const res = await api.post('/users/login', loginData)
   setLoginData(res.data)
   window.dispatchEvent(new Event('authChange'))
   toast.success('Welcome back!');
   navigation('/')
   console.log(res)
  }

  
  return (
    <>
     <div className='flex w-full min-h-screen'>
      <div className='rounded-r-2xl w-full min-h-screen flex justify-center bg-linear-to-r from-gray-100 via-orange-300 to-gray-500'>
        <img className='object-cover p-3' src={loginPage} />
      </div>
      <div className="rounded-2xl w-full min-h-screen relative">

  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2">

    <div className="flex flex-col items-center">
      
      <Handbag
        size={60}
        color="#d82222"
        strokeWidth={2.25}
      />
      <h1 className='text-3xl font-bold'>Login</h1>
      <p className='text-xl mt-3 mb-3'>Login to continue to your account</p>
      
      <form onSubmit={handleSubmit}>
        <label className='font-bold'>Email</label>
      <input
      onChange={handleChange}
        name='email'
        type="text"
        placeholder="Enter your email..."
        className="border p-3 mt-2 w-full rounded-lg"
      />

      <label className='font-bold'>Password</label>
      <input
      onChange={handleChange}
      name='password'
        type="password"
        placeholder="Enter your password..."
        className="border p-3 mt-1 w-full rounded-lg"
      />

      <button className="bg-red-600 text-white px-8 py-3 mt-4 rounded-lg">
        Login
      </button>
      </form>

    </div>

  </div>

</div>
     </div>
    </>
    
  )
}
