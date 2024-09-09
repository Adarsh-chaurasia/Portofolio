"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import imageAsset from '@/app/images/tcs.png'; 

const br = '<br>';

const content = [
    {
      title: "System Engineer : Tata Consultancy Services",
      description:
        `Implemented enhancements and updates to existing features, ensuring seamless integration and minimal disruption to
        end-users.
        
        
        Developed new features and functionalities within the Bancs application, adhering to industry standards and best
        practices. 

        Played a key role in the development and maintenance of the Bancs application including Document Management
Application, a comprehensive banking software solution.

Successfully Implemented REST Web services according to requirement and achieving a bug-free and reliable software
release.

        `,
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black">
        <Image
      src={imageAsset}
      width={500}
      height={500}
      alt="TCS"
      className="rounded-md shadow-xl shadow-gray-800 dark:shadow-gray-800 transition-all duration-300  "
    />
        </div>
      ),
    }]
function Experience() {
  return (
    <div className="px-4  m-4">
      
          <StickyScroll content={content} />
        </div>
  )
}

export default Experience