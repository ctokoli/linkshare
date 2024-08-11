import React from "react";
import { Avatar, FileInput, Label } from "flowbite-react";
import { BiSolidUserCircle } from "react-icons/bi";

function AvatarComponent() {
  return (
    <div className="py-2">
      <div className="flex flex-col w-full items-center justify-center">
       <BiSolidUserCircle className="text-gray-500 text-9xl text-center" />
      </div>
      <div className="flex w-full items-center justify-center py-4">
        <Label
          htmlFor="dropzone-file"
          className="flex h-64 w-4/5 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload profile image</span> or drag and
              drop here
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <FileInput id="dropzone-file" className="hidden" />
        </Label>
      </div>
    </div>
  );
}

export default AvatarComponent;
