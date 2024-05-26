"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from "next/image";

import imageAsset from '@/app/images/Pic.png'; 
function AboutMe() {
  return (
    <div className="relative h-[60rem] overflow-hidden flex items-center justify-center">
<WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full"> 

<h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold inter-var text-center mb-44 ">
       About Me
      </h1>
    
      <div className="flex flex-row items-center justify-center w-full mb-40 ">
      <Image
      src={imageAsset}
      width={500}
      height={500}
      alt="Adarsh Chaurasia"
      className="rounded-full shadow-xl dark:shadow-gray-800 transition-all duration-300  filter grayscale hover:grayscale-0  sm:max-w-xs md:max-w-sm"
    />
      <p className='mt-0 font-sans text-base md:text-lg text-neutral-300 max-w-lg mx-auto px-12'>
      My name is Adarsh Chaurasia. I&apos;m a graduate of 2022 from PSIT College of Engineering at Kanpur with a degree in Computer Engineering. I&apos;m working in Tata Consultancy Services as a System Engineeer from past 2 Years. I&apos;m usually working on full stack project based on JAVA.  I&apos;m most passionate about coding , Building WebApps , and my goal is to pursue this passion within the field of software engineering. In my free time I like working on Full Stack Projects.

      </p>

</div>
</WavyBackground>


  </div>
  )
}

export default AboutMe;