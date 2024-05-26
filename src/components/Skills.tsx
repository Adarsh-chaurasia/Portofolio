"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { AnimatedTooltip } from "./ui/animated-tooltip";



const people = [
    {
      id: 1,
      name: "Python",
      designation: "",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
    },
    {
      id: 2,
      name: "Javascript / JQuery",
      designation: "",
      image:'https://multishoring.com/wp-content/uploads/2024/04/JavaScript-Symbol.png',
    },
    {
      id: 3,
      name: " SQL / MongoDB / PostgreSql",
      designation: "Databases",
      image:'https://e7.pngegg.com/pngimages/346/129/png-clipart-database-database-icons-angle-table-thumbnail.png',
    },
    {
      id: 4,
      name: "ReactJs / NextJS",
      designation: "Frontend Tools",
      image:'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png',
    },
    {
      id: 5,
      name: "NodeJS / ExpressJS",
      designation: "Backend Tools",
      image:'https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png',
    },
    {
      id: 6,
      name: "Tailwind / Bootstrap",
      designation: "CSS",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9fZzRj7BuQAtuf6RSuqIjWEaai2Vl7sFq2Y6tKq5hA&s',
    },
   

      {
        id: 7,
        name: "OOPS / DBMS / DSA",
        designation: "IT Construct",
        image:'https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc=w240-h480-rw',
      },
  ];

function Skills() {
  return (

    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-200 to-slate-900 py-4 bg-clip-text text-center text-5xl  tracking-tight text-transparent md:text-7xl mb-40 font-bold"
      >
        Skills 
      </motion.h1>
      <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={people} />
      </div>
    </LampContainer>
   
   
  )
}

export default Skills