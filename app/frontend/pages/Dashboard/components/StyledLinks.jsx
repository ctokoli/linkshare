import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

export const Facebook = ({social}) => {
  return (
    <div className='text-2l bg-sky-400 flex gap-2 items-center p-4 rounded-lg text-white'>
        <FaFacebook />
        {social}
    </div>
  )
}

export const Linkedin = ({social}) => {
  return (
    <div className='text-2l bg-sky-600 flex gap-2 items-center p-4 rounded-lg text-white'>
      <FaLinkedin />
     {social}
    </div>
  )
}

export const X = ({social}) => {
  return (
    <div className='text-2l bg-gray-950 flex gap-2 items-center p-4 rounded-lg text-white'>
      <RiTwitterXLine />
      {social}
    </div>
  )
}

export const Tiktok = ({social}) => {
  return (
    <div className='text-2l bg-rose-500 flex gap-2 items-center p-4 rounded-lg text-white'>
    <FaTiktok />
    {social}
    </div>
  )
}

export const Github = ({social}) => {
  return (
    <div className='text-2l bg-gray-900 flex gap-2 items-center p-4 rounded-lg text-white'>
    <FaGithub />
    {social}
    </div>
  )
}

export const NoContent = () => {
  return (
        <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
        </div>
  )
}