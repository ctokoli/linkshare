import React from 'react'
import { Linkedin, Facebook, Tiktok, Github, X, NoContent } from './StyledLinks';

function DisplayLinks({link, linkWithIcon}) {
  const renderLink = (link, linkWithIcon) => {
      switch(link){
        case 'facebook':
          return <Facebook social={linkWithIcon} />;
        case 'linkedin':
          return <Linkedin social={linkWithIcon} />;
        case 'tiktok':
          return <Tiktok social={linkWithIcon} />;
        case 'github':
          return <Github social={linkWithIcon} />;
        case 'x':
          return <X social={linkWithIcon} />;
        default:
          return 
      }
  }
  return ( 
     <div>
        {renderLink (link, linkWithIcon)}
     </div>
   );
}

export default DisplayLinks;