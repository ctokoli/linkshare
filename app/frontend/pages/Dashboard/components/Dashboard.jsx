import React from 'react'
import Profile from './Profile'
import Mobile from './Mobile'

export default function Dashboard() {
  return (
    <div className='px-14 py-4 bg-gray-100 flex justify-around '>
     <Profile />
     <Mobile />
    </div>
  )
}