import React from 'react'

export default function ProfileInput() {
    const [formData, setFormData] = React.useState({
        firstname: '',
        lastname: '',
        bio: ''
    })

    const handleChange = (e) => {
       const {name, value} = e.target
         setFormData({
                ...formData,
                [name]: value
            })
    }
  return (
    <div className='text-left pr-5 mb-5'>
        <form>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                <input type="text" name='firstname'  id="firstname" onChange={handleChange} value={formData.firstname} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="firstname" required />
            </div> 
            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                <input type="text" id="lastname" name='lastname' onChange={handleChange} value={formData.lastname} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="lastname" required />
            </div> 
            <div className='mb-4'>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Your bio</label>
                <textarea id="message" onChange={handleChange} name='bio'  rows="4" value={formData.bio} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your bio here..." ></textarea>
            </div>
            
            <button type="submit" className="text-white bg-yellow-300 hover:bg-yellow-400 sm:w-auto px-5 py-2.5 text-center rounded-lg ">Submit</button>
        </form>
    </div>
  )
}