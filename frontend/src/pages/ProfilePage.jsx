import React, { useEffect, useState } from 'react'
import ProfileOneSide from '../components/ProfileOneSide'
import ProfileSecondSide from '../components/ProfileSecondSide'
import api from '../api/Axios';
import AdminProfileOneSide from '../components/AdminProfileOneSide';
import AdminSecondSide from '../components/AdminSecondSide';

export default function ProfilePage() {

  const [activeTab, setActiveTab] = useState("orders");

  const [adminActiveTab, setAdminActiveTab] = useState('productCreate')

  const [user, setUser] = useState(null)

  useEffect (() => {
      userData()
  },[])

  const userData = async () => {
    const user = await api.get('/users/me')
    console.log(user.data.findUser)
    setUser(user.data.findUser)
  }


  return (
    <div>
    {userData.role === 'user' ? (

      <div className='flex p-5'>
        <div><ProfileOneSide activeTab={activeTab} setActiveTab={setActiveTab} /></div>
        <div><ProfileSecondSide activeTab={activeTab} /></div>
     </div>

    ) : (

      <div className='flex p-5'>
        <div><AdminProfileOneSide adminActiveTab={adminActiveTab} setAdminActiveTab={setAdminActiveTab} /></div>
        <div><AdminSecondSide adminActiveTab={adminActiveTab} /></div>
      </div>
    )}
   </div>
  )
}
