import React, { useContext, useState, useEffect } from 'react';
import { dataContext } from '../ContextAPI'


export default function MobileMockup() {
  const [links, setLinks ] = useState([]);
  
  const { linkData } = useContext(dataContext);

  // const containsId = (array, id) => {
  //   return array.some(item => item.id == id )
  // }
  
  useEffect(() => {
    if (linkData[0] !== undefined && linkData[0].length !== 0  ) {
      setLinks(prevLinks => {
        
        let map = new Map(prevLinks.map(item => [item.id, item]));
        console.log(map)
        // Prepare the new item
        let newItem = { data: linkData, id: linkData[1] };

        if (map.has(newItem.id)) {
          // Update existing item's data array
          console.log(map.has(newItem.id))
          // prevLinks.push(newItem); 
          map.get(newItem.id).data = newItem.data;
        } else {
          console.log("new item added")
          prevLinks = [...prevLinks, { data: linkData, id: linkData[1] }];
          
        }

        // Return the updated array
        return prevLinks ;
      });

    }
  }, [linkData])
  
   
   links?.map((link, index) => {
    console.log(index)
      link.data.map((data) => {
        console.log(data)
      })
   })
  
    return (
      <div>
<div class="relative mx-auto border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
    <div class="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <div>
          {/* {
          links?.map((link, index) => (
            <h2>
              {link.data[index].value}
            </h2>
          )) 
          } */}
          </div>
    </div>
</div>
      
        
      </div>
    );
 
};