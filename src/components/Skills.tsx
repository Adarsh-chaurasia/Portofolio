"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { AnimatedTooltip } from "./ui/animated-tooltip";



const skills = [
    {
      id: 1,
      name: "Python",
      designation: "",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
    },
    {
      id: 2,
      name: "Javascript / JQuery / TypeScript",
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
      image:'https://global.discourse-cdn.com/auth0/original/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png',
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
        name: "Kafka / Docker / AWS / OOPS",
        designation: "IT Tools",
        image:'https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc=w240-h480-rw',
      },

      {
        id: 8,
        name: "JAVA",
        designation: "Java Core",
        image:'https://i.pinimg.com/736x/e9/94/61/e99461fdd5b3db8bdb3081d8acf5e524.jpg',
      }
      ,
      {
        id: 9,
        name: "SpringBoot",
        designation: "SpringBoot",
        image:'https://www.contentside.com/wp-content/uploads/2015/01/spring-boot-logo.png',
      }
  ];

function Skills() {
  return (

    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-200 to-slate-900 py-4 bg-clip-text text-center text-5xl  tracking-tight text-transparent md:text-7xl mb-4Y0 font-bold"
      >
        Skills 
      </motion.h1>
      <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={skills} />
      </div>
    </LampContainer>
   
   
  )
}

export default Skills