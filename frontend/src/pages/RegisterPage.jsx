import React, { useState } from 'react'
import loginPage from '../assets/loginPage.png'
import { Handbag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import api from '../api/Axios'
import toast from 'react-hot-toast'

export default function RegisterPage() {

  const [registerData, setRegisterData] = useState({
     name:'',
     email:'',
     password:''
  })

  const navigation = useNavigate()

  const handleChange = (e) => {
   setRegisterData({
    ...registerData,
    [e.target.name]: e.target.value
   })
  }

  console.log(registerData)

  const handleSubmit = async (e) => {
    e.preventDefault()
     const res = await api.post('/users/register', registerData)
     setRegisterData(res.data)
     toast.success('Your account created successfully!');
     console.log(res.data)
     navigation('/')
  }

  return (
    
    <>
     <div className='flex flex-col md:flex-row w-full min-h-screen'>
      <div className='rounded-r-2xl w-full h-64 md:h-auto md:min-h-screen flex justify-center bg-linear-to-r from-gray-100 via-orange-300 to-gray-500'>
        <img className='object-cover p-3' src={loginPage} />
      </div>
      <div className="rounded-2xl w-full min-h-130 md:min-h-screen relative flex items-center justify-center py-10 md:py-0">

  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12">

    <div className="flex flex-col items-center">
      
      <Handbag
        size={60}
        color="#d82222"
        strokeWidth={2.25}
      />
      <h1 className='text-3xl font-bold'>Sign up</h1>
      <p className='text-xl mt-3 mb-3'>Create your account</p>
      
      <form onSubmit={handleSubmit}>

        <label className='font-bold'>Name</label>
      <input
      onChange={handleChange}
      name='name'
        type="text"
        placeholder="Enter your name..."
        className="border p-3 mt-2 w-full rounded-lg"
      />

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
        Create
      </button>
      </form>

      

    </div>

  </div>

</div>
     </div>
    </>
    
  )
}


// mobile par second div first div par laana hai 
