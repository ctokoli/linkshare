import React, { useContext, useState, useEffect } from 'react';
import { dataContext } from '../ContextAPI'


export default function MobileMockup() {
  const [links, setLinks ] = useState([]);

  const { linkData } = useContext(dataContext);

  useEffect(() => {
    if (linkData.length !== 0 ) {
      setLinks(prevLinks => [...prevLinks, linkData]);
    }
  }, [linkData])
  
  console.log(links);
  
    return (
      <div>
<div class="relative mx-auto border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
    <div class="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <h1>{linkData != null ? linkData.label : ''}</h1>
    </div>
</div>
      
        
      </div>
    );
 
};