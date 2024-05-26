"use client";

import React ,{FormEvent , useState} from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function Contact() {

  const [email , setEmail] = useState('');
  const [message , setMessage] = useState('');




  const handleSubmit = (event : FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log('Submitted:', { email, message });
    



  }
  return (
    
    
    
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    
    
    <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0"/>
    
    <div className="max-w-2xl mx-auto p-4 relative z-10">
      
      
      
      
      <h1 className="ext-lg md:text-7xl sm:text-4xl text-center font-sans font-bold mb-8 text-white">
        Contact Me
      </h1>
      

      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">

      If You Want to contact me then Please Reach out to me .
      </p>
      



      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input type="email"
        value={email} 
        
        placeholder = 'Your Email Address'
        onChange={(e) =>{setEmail(e.target.value)}} 
        required

            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"

        />

<textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>




      </form>
    </div>
   
  </div>
  )
}

export default Contact