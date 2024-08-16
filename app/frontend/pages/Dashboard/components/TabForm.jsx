import React, { useContext, useEffect, useState } from 'react'
import { router } from '@inertiajs/react'
import { dataContext } from '../ContextAPI';

function TabFormComaponent({linkForms}) {
  const [formValue, setFormValue] = useState([])
  const { linkData } = useContext(dataContext);

  useEffect(() => {
    if (linkData[0] !== undefined && linkData[0].length !== 0  ) {
      setFormValue(prevLinks => {
        let map = new Map(prevLinks.map(item => [item.id, item]));
        let newItem = { data: linkData, id: linkData[2] };
        map.set(newItem.id, newItem);
        return Array.from(map.values());
      });
    }
  }, [linkData])

  //console.log(formValue)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = []
    formValue?.forEach((value) => {
      console.log(value.data[0].value, value.data[1].link)
      if (value.data) {
        formData.push({
          value: value.data[0].value,
          link: value.data[1].link
      });
      }
      
    })
    console.log(formData)
    router.post('/links', formData)
  }
  
  return ( 
    <>
       <form onSubmit={handleSubmit}>
        {
          linkForms.map((_linkform, index) => (
            <div key={index} className="mb-4">
              {<_linkform index={index += 1 } />} 
            </div>
          ))
        }
        <button type="submit" className="py-2 px-4 bg-yellow-400 text-white rounded-lg">Save</button>
        </form>
    </>
   );
}

export default TabFormComaponent;