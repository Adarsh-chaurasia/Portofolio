"use client";


import React ,{ useState , useRef} from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
require('dotenv').config();
import emailjs from '@emailjs/browser';
import Link from "next/link";


function Contact() {
  const form = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const [show, setShow] = useState(false);



  const handleSubmit = async( e ) =>{
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    e.preventDefault();
    setStateMessage("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "b2d4fdb7-daf8-4fb1-9557-330690c9481d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStateMessage("Form Submitted Successfully");
      setShow(true);
      e.target.reset();
    } else {
      console.log("Error", data);
      setStateMessage(data.message);
    }


  }
  return (
    
    
    
    <div className="min-h-screen w-full rounded-md bg-neutral-950 fixed flex flex-col items-center justify-center antialiased">
    
    
    <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0"/>
    
    <div className="max-w-2xl mx-auto p-8 relative z-10">
      
      
      
      
      <h1 className="ext-lg md:text-7xl sm:text-4xl text-center font-sans font-bold mt-8 text-white sm:mt-16 ">
        Contact Me
      </h1>
      

      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-md text-center">

      Please Send Your Queries and Get Resume.
      </p>
      



      <form   onSubmit={handleSubmit} className="space-y-4 mt-2">

      <input type="text"
        name = "from_name"
        placeholder = 'Your Name'
        required

            className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 focus:text-white "

        />



        <input type="email"
        name="from_email"
        placeholder = 'Your Email Address'
        required

            className="rounded-lg border text-white text-neutral-100 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 focus:text-white"

        />

<textarea
            name = "message"
            placeholder="Your message"
            className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 focus:text-white"
            rows={5}
            required
          ></textarea>
          

            <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            disabled={isSubmitting} >
              Send Message
              
              </button>
             



              {stateMessage && <p className="text-white font-bold antialiased max-w-lg font-sans mx-auto text-lg text-center">{stateMessage}</p>}

      </form>





      { show && <Link href = {'https://drive.google.com/file/d/1YKL5XqMnf15kF37pmqG0AmzYeVZCPrge/view?usp=drive_link'}
              target="_blank"> 
              
              <button  className="px-8 py-2 mt-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"> Resume / CV </button>
              
              </Link>
              
              
              }
    </div>

    
    

   
    
  </div>
  )
}

export default Contact;
