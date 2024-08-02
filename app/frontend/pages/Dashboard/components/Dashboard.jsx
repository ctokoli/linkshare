import React, { useState } from 'react'
import { dataContext } from '../ContextAPI'
import Profile from './Profile'
import Mobile from './Mobile'


export default function Dashboard() {
  const [linkData, setlinkData] = useState([]);
  
 
  
  return (
    <div className='px-14 py-4 bg-gray-100 flex justify-around '>
      <dataContext.Provider value={{linkData, setlinkData}}>
        <Profile />
        <Mobile />
      </dataContext.Provider>
    </div>
  )
}