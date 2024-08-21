import React, { useState, useContext, useEffect } from 'react';
import { dataContext } from '../ContextAPI';
import { HiMiniLink } from "react-icons/hi2";
import Select from 'react-select'
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";


export default function LinksFrom({ index, links }) {
  const [selectedOption, setSelectedOption] = useState([]);
  const { setlinkData } = useContext(dataContext);

  const [formData, setFormData] = useState({
    link: ''
  })
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  useEffect(() => {
    setlinkData([selectedOption, formData, index ]);
  }, [selectedOption, formData]);
  
  const options = [
    {value:  'facebook', 'label': <> <div className='flex gap-2 items-center'> <FaFacebook /> Facebook </div></>},
    {value:  'tiktok', 'label': <> <div className='flex gap-2 items-center'> <FaTiktok /> Tiktok </div></>},
    {value:  'x', 'label': <> <div className='flex gap-2 items-center'> <RiTwitterXLine /> X </div></>},
    {value:  'linkedin', 'label': <> <div className='flex gap-2 items-center'> <FaLinkedin /> Linkedin </div></> },
    {value:  'github', 'label': <> <div className='flex gap-2 items-center'> <FaGithub /> Github </div></> }
]
  
  // console.log(links)
  return (
      <div className=' bg-gray-50 border-2 rounded-lg p-4'> 
           <label className="block mb-2 text-sm font-medium text-gray-500 ">Choose a link</label>
         <div className=''>
          <Select
          id={index}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          placeholder={"Choose a Link"}
          />
         
         </div>
          <label className="block mb-2 text-sm font-medium text-gray-500 mt-4">Link</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiMiniLink />
            </div>
            <input type="text" id="link" name='link' value={formData.link} onChange={handleChange}  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="https://www.google.com"  required/>
          </div>
    </div>
    );
}

