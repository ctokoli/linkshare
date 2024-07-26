import React from 'react'
import MobileMockup from './MobileMockup'




export default function Mobile() {
  return (
    <div className=' bg-white w-[500px] rounded-lg'>
      <div className='text-center py-8'>
        <h5 className='text-xl font-bold'>Preview</h5>
      </div>
      <MobileMockup />
    </div>
  )
}

