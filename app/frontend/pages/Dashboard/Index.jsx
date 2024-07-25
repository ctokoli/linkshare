import React from 'react'
import Header from './components/Header';
import Dashboard from './components/Dashboard';

export default function Index() {
  return ( 
    <div className='w-full bg-white p-2 rounded-lg min-w-[1250px] min-h-screen'>
      <Header />
      <Dashboard />
      
    </div>
   );
}

