import React from 'react'
import ProfileOneSide from '../components/ProfileOneSide'
import ProfileSecondSide from '../components/ProfileSecondSide'

export default function ProfilePage() {
  return (
    <div className='flex p-5'>
        <div><ProfileOneSide /></div>
        <div><ProfileSecondSide /></div>
    </div>
  )
}
