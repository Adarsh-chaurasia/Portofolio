"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const data = [
{
    quote: " Bachelor Of Technology in Computer Science",
  name: " Pranveer Singh Institute of Technology : College of Engineering - [Kanpur , Uttar Pradesh] : [2018 - 2022]",
  title: "Scored 83.2 % "


},
{
    quote: "Senior Secondary School",
    name: "Sant Atulanand Convent School - [Varanasi , Uttar Pradesh] : [2016 - 2018]",
    title: "Scored 83 % "
},
{
    quote: " Secondary School",
    name: "Sant Atulanand Convent School - [Varanasi , Uttar Pradesh] : [2014 - 2016]",
    title: "Scored 8.4 C.G.P.A. "

}

]
function Education() {
    return (
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.2] items-center justify-center relative overflow-hidden">
  
  <h2 className="text-6xl font-bold text-center mb-20 z-10"> Education</h2>
  <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
      <InfiniteMovingCards
          items={data}
          direction="left"
          speed="normal"
        />
      </div>
  </div>
  
  
          </div>
    )
  }
  
  export default Education;