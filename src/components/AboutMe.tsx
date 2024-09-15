"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from "next/image";

import imageAsset from '@/app/images/Pic.jpg'; 
function AboutMe() {
  return (
    <div className="relative h-[60rem] overflow-hidden flex items-center justify-center bg-black">
<WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full"> 

<h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold inter-var text-center mb-44 ">
       About Me
      </h1>
    
      <div className="flex flex-row items-center justify-center w-full mb-40 ">
      <Image
      src={imageAsset}
      width={250}
      height={250}
      alt="Adarsh Chaurasia"
      className="rounded-lg shadow-xl shadow-gray-800 dark:shadow-gray-800 transition-all duration-300  filter grayscale hover:grayscale-0  sm:max-w-xs md:max-w-sm"
    />
      <p className='mt-0 font-sans text-base md:text-lg text-neutral-300 max-w-lg mx-auto px-12 hover:text-white'>
      My name is Adarsh Chaurasia. I graduated in 2022 from PSIT College of Engineering in Kanpur with a degree in Computer Engineering. For the past two years, I have been working at Tata Consultancy Services as a System Engineer. My primary focus is on full stack projects. I am passionate about coding and building web applications, and my goal is to further this passion within the field of software engineering. In my free time, I enjoy working on full stack projects.I am proficient in multiple tech stacks, including MERN and Java.

      </p>

</div>
</WavyBackground>


  </div>
  )
}

export default AboutMe;