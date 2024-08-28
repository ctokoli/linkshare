import React, { useContext, useState, useEffect } from 'react';
import { dataContext } from '../ContextAPI'
import DisplayLinks from './DisplayLinks';


export default function MobileMockup() {
  const [links, setLinks ] = useState([]);
  
  const { linkData } = useContext(dataContext);
  
  
  
  useEffect(() => {
    if (linkData.client[0] !== undefined && linkData.client[0].length !== 0  ) {
      setLinks(prevLinks => {
        // console.log(prevLinks)
          let map = new Map(prevLinks.map(item => {
            return [item.id, item]
          }));
       
        let newItem = { data: linkData.client[0], id: linkData.client[0][2]};
        map.set(newItem.id, newItem);
        return Array.from(map.values());
      });
    }
  }, [linkData])
  
console.log(linkData.client)
    return (
      <div>
<div className="relative mx-auto border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
    <div className="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <div className='mt-10 p-5'>
        {links[0]?.data[0].length == 0 ? (<div className='text-center text-gray-500 dark:text-gray-400'>No links added</div>) : 
        (
         links?.map((link) => (
                <DisplayLinks link={link.data[0].value}  key={link.id }/>
          )) 
          )}
        
        </div>
    </div>
</div>
      
        
      </div>
    );
 
};