import React, { useState, StrictMode, useEffect  } from 'react'
import { dataContext } from '../ContextAPI'
import Profile from './Profile'
import Mobile from './Mobile'


export default function Dashboard({links}) {
  const [linkData, setLinkData] = useState({
    server: [],
    client: [],
});
  
  
useEffect(() => {
  if (links.length > 0) {
    let dataValues = links.map(link => [
      [{ value: link.value }],
      { link: link.link },
      link.id,
    ]);

    setLinkData(prevData => ({
      ...prevData,
      client: [ ...dataValues],
    }));
  }
}, [links]);
  
// useEffect(() => {
//   console.log('Updated linkData:', linkData);
// }, [linkData]);
  // console.log(linkData)
  
  return (
    <StrictMode>
      <div className='px-14 py-4 bg-gray-100 flex justify-around '>
        <dataContext.Provider value={{linkData, setLinkData}}>
          <Profile />
          <Mobile />
        </dataContext.Provider>
      </div>
    </StrictMode>
  )
}