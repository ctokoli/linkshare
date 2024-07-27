import React from 'react';
import { HiMiniLink } from "react-icons/hi2";

export default function LinksFrom() {
  return (
      <div className=' bg-gray-50 border-2 rounded-lg p-4'>
           <label className="block mb-2 text-sm font-medium text-gray-500 ">Select an option</label>
         <div className=''>
          <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option defaultValue className='p-4'>Choose a country</option>
              <option value="US" className='p-4'>United States</option>
              <option value="CA" className='p-4'>Canada</option>
              <option value="FR" className='p-4'>France</option>
              <option value="DE" className='p-4'>Germany</option>
          </select>
         </div>
          <label className="block mb-2 text-sm font-medium text-gray-500 mt-4">Link</label>
          <div class="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiMiniLink />
            </div>
            <input type="text" id="input-group-1" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="https://www.google.com" />
          </div>
    </div>
    );
}

