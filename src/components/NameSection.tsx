import React from 'react'
import Link from 'next/link'
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from './ui/moving-border';
import { FlipWords } from "./ui/flip-words";
 

const words : any = ["Python", "JavaScript", "ReactJs", "NodeJs", "NextJs","MongoDB","PostgreSQL","TypeScript" ,"Tailwind" ];
function NameSection() {

 
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-20 md:py-0 '>

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




<div className=" mx-auto font-sans text-neutral-600 dark:text-neutral-400 text-4xl md:text-6xl m-10 px-4 text-pretty">
        
        
        <FlipWords words={words} />
         <br />
       
      </div>


<div className='mt-16'>
    <Link href = {"/"}>
<Button borderRadius="1.75rem"
        className="bg-white cursor-pointer dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">Resume / CV</Button>
    </Link>
</div>


        </div>
        
        
        
        
        <div>

        <p className='mt-2 font-normal text-xl  text-neutral-300  mx-auto'>
Passionate about changing the world with technology.

</p>
        </div>
        
        
        
        
        
        
        
        
        
        </div>
  )
}

export default NameSection