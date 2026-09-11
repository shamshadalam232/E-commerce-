import React, { useState } from 'react'
import ProfileOneSide from '../components/ProfileOneSide'
import ProfileSecondSide from '../components/ProfileSecondSide'

export default function ProfilePage() {

  const [activeTab, setActiveTab] = useState("orders");


  return (
    <div className='flex p-5'>
        <div><ProfileOneSide activeTab={activeTab} setActiveTab={setActiveTab} /></div>
        <div><ProfileSecondSide activeTab={activeTab} /></div>
    </div>
  )
}
