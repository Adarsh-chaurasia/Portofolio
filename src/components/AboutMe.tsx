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

<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold font-sans text-center mb-20 tracking-tight">
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
     

      <p className="mt-4 font-sans text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 max-w-3xl mx-auto px-6 sm:px-8 md:px-12 leading-relaxed hover:text-white transition-colors duration-300 leading-relaxed text-justify">
  Hi, I'm Adarsh — a passionate software developer with 3 years of hands-on experience building robust backend systems using Java. I earned my B.Tech in Computer Science and Engineering in 2022, and since then, I've been immersed in solving real-world problems through clean, efficient code. I’m constantly learning, experimenting, and pushing the boundaries of what I can build.
  Let’s connect and create something impactful together.
</p>


</div>
</WavyBackground>


  </div>
  )
}

export default AboutMe;