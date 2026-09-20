import React, { useEffect, useState } from 'react'
import ProfileOneSide from '../components/ProfileOneSide'
import ProfileSecondSide from '../components/ProfileSecondSide'
import api from '../api/Axios';
import AdminProfileOneSide from '../components/AdminProfileOneSide';
import AdminSecondSide from '../components/AdminSecondSide';

export default function ProfilePage() {

  const [activeTab, setActiveTab] = useState("orders");

  const [adminActiveTab, setAdminActiveTab] = useState('dashBoard')

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
    {user?.role === "user" ? (

      <div className='flex flex-col lg:flex-row p-3 md:p-5 gap-4'>
        <div><ProfileOneSide activeTab={activeTab} setActiveTab={setActiveTab} /></div>
        <div><ProfileSecondSide activeTab={activeTab} user={user}  setUser={setUser}/></div>
     </div>

    ) : (

      <div className='flex flex-col lg:flex-row p-3 md:p-5 gap-4'>
        <div><AdminProfileOneSide adminActiveTab={adminActiveTab} setAdminActiveTab={setAdminActiveTab} /></div>
        <div><AdminSecondSide adminActiveTab={adminActiveTab} /></div>
      </div>
    )}
   </div>
  )
}
