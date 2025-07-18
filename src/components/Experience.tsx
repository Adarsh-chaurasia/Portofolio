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
        `Designed and developed RESTful APIs and microservices, achieving a 60% increase in system performance for
large-scale applications.
• Optimized SQL queries and implemented Caching strategies, resulting in 70% faster data access and reduced server
load.
• Launched a product to a live production environment, managing the release process to ensure seamless deployment
and end-user satisfaction.
• Worked Onsite with Burgan Bank for 6 Months in Kuwait, on TCS BaNCS core banking implementation and
support.
• Troubleshot and resolved critical production defects under tight SLAs, boosting system stability by over 70%
• Acted as the primary liaison between business stakeholders and offshore teams, improving issue resolution speed by 50%.
        `,
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black">
        <Image
      src={imageAsset}
      width={500}
      height={500}
      alt="TCS"
      className="rounded-md shadow-xl shadow-gray-800 dark:shadow-gray-800 duration-300  "
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