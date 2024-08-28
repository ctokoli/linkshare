import React, { useContext } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { usePage } from '@inertiajs/react'
import { dataContext } from './ContextAPI';

export default function Index({links}) {

  const { setLinkData }  = useContext(dataContext)
  
  
//  if(linkData !== 0 ) {
//   setLinkData(prevData => ({
//     ...prevData, 
//     client: [...prevData.server, [linkData]], 
// }));
//  }
//  console.log(links)
  return ( 
    <div className='w-full bg-white p-2 rounded-lg min-w-[1250px] min-h-screen'>
      <Header />
      <Dashboard links={links} />
    </div>
   );
}
