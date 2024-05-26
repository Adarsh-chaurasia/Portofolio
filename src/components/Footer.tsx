import Link from 'next/link'
import React from 'react';
function Footer() {
  return (
    <footer className='bg-black text-gray-400'>
        <div className='max-w-6xl mx-auto grid grid-cols-2
        gap-8 px-4 ' >
       
       
        
        <div>
            <h2>Address : </h2>
            <p>Varanasi India</p>
            <p>chaurasiadarsh11@gmail.com</p>
            <p>adarsh.chaurasia.2810@gmail.com</p>
            <p>7318567891</p>
        </div>

        <div>

            <Link href={'/contact'}
            className='hover:text-white cursor-pointer'>
            Contact Me
            </Link>



        </div>


        </div>
        <p className='text-center text-gray-400 text-sm'>Made by Adarsh Chaurasia &copy; 2024</p>
        </footer>
  )
}

export default Footer