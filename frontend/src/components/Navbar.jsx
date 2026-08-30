import { Search, Truck } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import api from '../api/Axios'
import LOGO from '../assets/logo3.png'
import { useNavigate} from 'react-router-dom';


export default function Navbar() {

  const [useData, setUserData] =useState(null)

  const navigation = useNavigate()


  const fetchData = async () =>{
    const data = await api.get('/users/your')
    setUserData(data.data.findUser)
    console.log(data.data.findUser)
  }

  const handleLogout = async () => {
     const logout = api.post('/users/logout')
     setUserData(null)
     navigation('/')
  }

  useEffect(() => {
    fetchData() 
     window.addEventListener('authChange', fetchData)

  return () => {
    window.removeEventListener('authChange', fetchData)
  }
  }, [])

  
  return (
    <>
    <div>
    {!useData ? (
         <div>
        <nav className='flex h-15 shadow text-xl items-center justify-between font-bold bg-amber-200'>
        <div className='p-4 flex items-center gap-1.5'>
          
          <div className='text-xl items-center h-20 w-35'>
            <img src={LOGO} />
          </div>
        </div>
        <div className='flex p-4 gap-7 '>
          <h1>Help & Support</h1>
          <h1 onClick={() => {
            navigation('/login')
          }} className='cursor-pointer'>Login</h1>
          <h1 onClick={() => {
            navigation('/register')
          }} className='cursor-pointer' >Register</h1>
        </div>
        </nav>
      
       </div>
      
    
    ) : (
      <nav className='flex h-15 shadow text-xl items-center justify-between font-bold bg-yellow-200'>
        <div className='p-4 flex items-center gap-1.5'>
          
          <div className='text-xl items-center h-20 w-35'>
            <img src={LOGO} />
          </div>
        </div>
        <div className='flex p-4 gap-7 items-center'>
          <div className="relative">
  <input
    type="text"
    className="w-80 bg-white p-2 pr-10"
    placeholder="Search your product..."
  />

  <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#f5f5f5] p-2 rounded-lg">
    <Search size={18} />
  </button>
</div>
          <h1 onClick={() => {
            navigation('/')
          }}>Home</h1>
          <h1>Track Order</h1>
          <select>
            <option>English</option>
            <option>Hindi</option>
            <option>Maithli</option>
          </select>
          <select>
            <option>USD</option>
            <option>RUPEE</option>
            <option>TAKA</option>
          </select>
          
          
             <button className='bg-blue-800 text-white rounded-2xl p-1 pl-3 pr-3 active:scale-95 transition-transform' onClick={handleLogout}>LOGOUT</button>
             <button className='bg-blue-800 text-white rounded-2xl p-1 pl-3 pr-3 active:scale-95 transition-transform'>My Profile</button>
          
          
        </div>
        </nav>
      
    )}
    </div>
    
    </>
  )
}         

