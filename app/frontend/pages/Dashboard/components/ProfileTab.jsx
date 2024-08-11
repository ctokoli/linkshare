import React from 'react'
import AvatarComponent from './AvatarComponent';
import { Avatar } from 'flowbite-react';
import ProfileInput from './ProfileInput';

function ProfileTab() {
  return ( 
    <div className=''>
      <h3 className='text-gray-500 pt-2'>Add your details to create a personal touch to your profile.</h3>
      <div>
        <AvatarComponent />
        <ProfileInput />
      </div>
    </div>
  );  
}

export default ProfileTab;