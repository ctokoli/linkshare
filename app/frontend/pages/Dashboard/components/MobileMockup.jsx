import React, { useContext, useState, useEffect } from 'react';
import { dataContext } from '../ContextAPI'
import DisplayLinks from './DisplayLinks';


export default function MobileMockup() {
  const [links, setLinks ] = useState([]);
  
  const { linkData } = useContext(dataContext);
  
  
  
  useEffect(() => {
    if (linkData[0] !== undefined && linkData[0].length !== 0  ) {
      setLinks(prevLinks => {
        let map = new Map(prevLinks.map(item => [item.id, item]));
        let newItem = { data: linkData, id: linkData[2] };
        map.set(newItem.id, newItem);
        return Array.from(map.values());
      });
    }
  }, [linkData])
  
  // console.log(links)
    return (
      <div>
<div className="relative mx-auto border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
    <div className="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <div className='mt-10 p-5'>
          {
          links?.map((link, index) => (
            <div key={link?.id || index } className=' pb-2'>
              {link?.data.map((data) => (
                <DisplayLinks link={data.value} linkWithIcon={data.label} />
              ))}
            </div>
          )) 
          }
          </div>
    </div>
</div>
      
        
      </div>
    );
 
};