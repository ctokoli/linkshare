import React from 'react'
import { Linkedin, Facebook, Tiktok, Github, X, NoContent } from './StyledLinks';

function DisplayLinks({link, key, id}) {
  const renderLink = (link) => {
      switch(link){
        case 'facebook':
          return <Facebook social={link} id={id} />;
        case 'linkedin':
          return <Linkedin social={link} />;
        case 'tiktok':
          return <Tiktok social={link} />;
        case 'github':
          return <Github social={link} />;
        case 'x':
          return <X social={link} />;
        default:
          return 
      }
  }
  return ( 
     <div className='pb-2' key={key}>
        {renderLink (link)}
     </div>
   );
}

export default DisplayLinks;