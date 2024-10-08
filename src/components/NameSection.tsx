import React from 'react'
import Link from 'next/link'
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from './ui/moving-border';
import { FlipWords } from "./ui/flip-words";
 

const words : any = ["Python", "JavaScript", "ReactJs", "NodeJs", "NextJs","MongoDB","PostgreSQL","SpringBoot" ,"TypeScript" ];
function NameSection() {

  
  return (
    <div className='h-auto bg-black md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-20 md:py-0 '>

<Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        
        <div className='p-4 relative z-10 w-full text-center '>

<h1 className='mt-24 md:mt-20 text-4xl md:text-7xl font-bold bg-clip-text
text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
    Hi , I&apos;m Adarsh Chaurasia
</h1>

<p className='mt-8 font-normal text-4xl md:text-4xl text-neutral-300 max-w-lg mx-auto'>
   Software Engineer
   
</p>




<div className=" mx-auto font-sans text-neutral-600 dark:text-neutral-400 text-4xl md:text-6xl m-10 px-4 text-pretty ">
        
        
        <FlipWords words={words} />
         <br />
       
      </div>


<div className='mt-16'>
    <Link href = {"/contact"} >
<Button borderRadius="1.75rem"
        className="bg-white cursor-pointer dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:text-lg hover:font-serif">Contact Me</Button>
    </Link>
</div>


        </div>
        
        
        
        
        <div>

        <p className='mt-4 font-normal text-2xl  text-neutral-300  mx-auto relative w-[max-content] font-mono text-2xl before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white'>

Passionate about changing the world with technology.

</p>
        </div>
        
        
        
        
        
        
        
        
        
        </div>
  )
}

export default NameSection