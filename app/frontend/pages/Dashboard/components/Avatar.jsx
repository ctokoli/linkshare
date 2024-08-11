import React, { useState } from "react";

const Avatar = () => {
  const [image, setImage] = useState("/path/to/your/default/avatar/image.jpg");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="relative w-24 h-24">
      <img
        src={image}
        alt="Avatar"
        className="w-full h-full rounded-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <label
          htmlFor="avatarInput"
          className="cursor-pointer text-white"
        >
          
        </label>
        <input
          type="file"
          id="avatarInput"
          className="hidden"
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default Avatar;