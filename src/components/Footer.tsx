import Link from 'next/link'
import React from 'react';
function Footer() {
  return (
    <footer className='bg-black text-gray-400'>
        <div className='max-w-6xl mx-auto flex flex-row
        justify-center align-items-center
         ' >
       
       
        
      
        <div>

            <Link href={'/contact'}
            className='hover:text-white cursor-pointer px-4 text-lg bold'>
            Contact Me
            </Link>



        </div>


        </div>
        <p className='text-center text-lg p-2 m-2 bg-gradient-to-r  md:text-md  from-red-200 via-green-200 to-indigo-400 text-transparent bg-clip-text'>Made by Adarsh Chaurasia &copy; 2024</p>
        </footer>
  )
}

export default Footer