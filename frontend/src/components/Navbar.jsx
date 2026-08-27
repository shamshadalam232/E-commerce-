import { Truck } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import api from '../api/Axios'
import { useParams } from 'react-router-dom';


export default function Navbar() {

  const [useData, setUserData] =useState(null)

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () =>{
    const data = await api.get('/users/your')
    setUserData(data.data)
    console.log(data.data)
  }

  
  return (
    <>
    <div>
    {useData ? (
        
      <nav className='flex h-15 shadow text-xl items-center justify-between font-bold'>
        <div className='p-4 flex items-center gap-1.5'>
          <Truck size={21} strokeWidth={1.75} className='mt-1'/>
          <h1 className='text-xl items-center'>Free delivery on order over $50</h1>
        </div>
        <div className='flex p-4 gap-7'>
          <h1>Help & Support</h1>
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
        </div>
        </nav>
      
    
    ) : (
       <div>h</div>
    )}
    </div>
    
    </>
  )
}         
