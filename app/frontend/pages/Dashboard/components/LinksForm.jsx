import React, { useState, useContext, useEffect } from 'react';
import { dataContext } from '../ContextAPI';
import { HiMiniLink } from "react-icons/hi2";
import Select from 'react-select'
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";


export default function LinksFrom() {
  const [selectedOption, setSelectedOption] = useState([]);
  const { setlinkData } = useContext(dataContext);

  useEffect(() => {
    setlinkData(selectedOption)
  }, [selectedOption]);
  
  const options = [
    {value:  'facebook', 'label': <> <div className='flex gap-2 items-center'> <FaFacebook /> Facebook </div></>},
    {value:  'tiktok', 'label': <> <div className='flex gap-2 items-center'> <FaTiktok /> Tiktok </div></>},
    {value:  'x', 'label': <> <div className='flex gap-2 items-center'> <RiTwitterXLine /> X </div></>},
    {value:  'linkedin', 'label': <> <div className='flex gap-2 items-center'> <FaLinkedin /> Linkedin </div></> },
    {value:  'github', 'label': <> <div className='flex gap-2 items-center'> <FaGithub /> Github </div></> }
]
  return (
      <div className=' bg-gray-50 border-2 rounded-lg p-4'> 
           <label className="block mb-2 text-sm font-medium text-gray-500 ">Select an option</label>
         <div className=''>
          <Select
          classNames={{
              control: (state) =>
                state.isFocused ? 'border-red-600' : 'border-grey-300',
            }}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          placeholder={"Choose a country"}
          autoFocus={false}
          />
         
         </div>
          <label className="block mb-2 text-sm font-medium text-gray-500 mt-4">Link</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiMiniLink />
            </div>
            <input type="text" id="input-group-1" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="https://www.google.com" />
          </div>
          <h3>{selectedOption !== null ? selectedOption.value : ""}</h3>
    </div>
    );
}

