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



  const handleSubmit = (e ) =>{
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);


    emailjs.sendForm(
      'service_d2xejkh',
      'template_davfi56',
      form.current,
      '7HG1TpTl54YB6tetD')
      .then(
        (result) => {
          setStateMessage('Thank You!');
          setShow(true);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 10000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setShow(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();


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
      



      <form   onSubmit={handleSubmit} className="space-y-4 mt-2"
      ref = {form}>

      <input type="text"
        name = "from_name"
        placeholder = 'Your Name'
        required

            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"

        />



        <input type="email"
        name="from_email"
        placeholder = 'Your Email Address'
        required

            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"

        />

<textarea
            name = "message"
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          

            <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            disabled={isSubmitting} >
              Send Message
              
              </button>
             



              {stateMessage && <p className="text-white font-bold antialiased max-w-lg font-sans mx-auto my-2 text-lg text-center">{stateMessage}</p>}

      </form>





      { show && <Link href = {'https://drive.google.com/file/d/17_SG2htqIxtmGT_qJSBG0AGqzQujSfXV/view?usp=drive_link'}
              target="_blank"> 
              
              <button  className="px-8 py-2 mt-12 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"> Resume / CV </button>
              
              </Link>
              
              
              }
    </div>

    
    

   
    
  </div>
  )
}

export default Contact;