"use client";

import { HoverEffect } from "./ui/card-hover-effect";

import * as Logo from '/portfolio/src/app/images/Pic.png';

import Link from "next/link"
export const projects = [
    {
      title: "GitHub",
      description:
        "",
      link: "https://github.com/Adarsh-chaurasia",
      
    },
    {
        title: "LinkedIn",
        description:
          "",
        link: "https://www.linkedin.com/in/adarshchaurasia5",
        
      },
      {
        title: "LeetCode",
        description:
          "",
        link: "https://leetcode.com/u/adarshChaurasia/",
        
      }
      
     
]
function SocialProfiles() {
  return (

    <div className='p-12 bg-gray-900 '>

    <div className="max-w-7xl mx-auto sm:px-2">

        <div className="text-center">
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Social Profiles</p>
        </div>
        <div className="mt-10 text-center">
          
            <HoverEffect items={projects}/>




        </div>
       


    </div>

</div>  
)
}

export default SocialProfiles