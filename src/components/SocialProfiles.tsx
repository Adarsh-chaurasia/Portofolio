"use client";

import { HoverEffect } from "./ui/card-hover-effect";

import * as Logo from '/portfolio/src/app/images/Pic.png';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';



export const projects = [
    {
      title: "GitHub",
      description:
        "",
      link: "https://github.com/Adarsh-chaurasia",
      
    },
    {
      title: "LeetCode",
      description:
        "",
      link: "https://leetcode.com/u/adarshChaurasia/",
      
    },
    {
        title: "LinkedIn",
        description:
          "",
        link: "https://www.linkedin.com/in/adarshchaurasia5",
        
      }
      
      
     
]




function SocialProfiles() {


  const [imageUrl, setImageUrl] = useState('');



  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch('https://leetcard.jacoblin.cool/adarshChaurasia');
      const imageBlob = await res.blob();
      setImageUrl(URL.createObjectURL(imageBlob));
    };

    fetchImage();
  }, []);

  return (

    <div className='p-12 bg-gray-900 '>

    <div className="max-w-7xl mx-auto sm:px-2">

        <div className="text-center">
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Social Profiles</p>
        </div>
        
        <div className="mt-10 text-center">
          
            <HoverEffect items={projects}/>
        </div>


        <div className="flex flex-column justify-center items-center">

        {imageUrl ? <img src={imageUrl} 
            className="rounded-lg shadow-xl shadow-gray-800 sm:max-w-xs md:max-w-sm items-center"
     alt="Fetched Image" /> : <p>Loading...</p>}



        </div>
       


    </div>

</div>  
)
}

export default SocialProfiles