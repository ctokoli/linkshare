import React from 'react'
import { Link } from '@inertiajs/react'

export default function Header() {  
  return (
    <>
      <div className='flex justify-between min-w-[1250px]'>
       <div> <h3>Link Share</h3></div>
       <div className=''>
        <ul className='flex'>
          <li className='mr-4'><Link href='/'>My Profile</Link></li>
          <li className='mr-4'><Link href='/dashboard'>Preview</Link></li>
          <li className='mr-4'><Link href='/links'>Links</Link></li>
        </ul>
       </div>
       <div>
        <Link href='/logout'>Logout</Link>

       </div>
      </div>
    </>
  )
}