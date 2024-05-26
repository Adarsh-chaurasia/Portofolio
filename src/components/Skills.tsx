"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import python from "@/app/images/python.jpg";
import next from "@/app/images/next.png";
import node from "@/app/images/nodejs.png";
import it from "@/app/images/it.png";
import db from "@/app/images/dbjpg.jpg";
import js from "@/app/images/js.png";
import tw from "@/app/images/tailwind.png";


const people = [
    {
      id: 1,
      name: "Python",
      designation: "",
      image:python,
    },
    {
      id: 2,
      name: "Javascript / JQuery",
      designation: "",
      image:js,
    },
    {
      id: 3,
      name: " SQL / MongoDB / PostgreSql",
      designation: "Databases",
      image:
        db,
    },
    {
      id: 4,
      name: "ReactJs / NextJS",
      designation: "Frontend Tools",
      image:
        next,
    },
    {
      id: 5,
      name: "NodeJS / ExpressJS",
      designation: "Backend Tools",
      image:node,
    },
    {
      id: 6,
      name: "Tailwind / Bootstrap",
      designation: "CSS",
      image:tw,
    },
   

      {
        id: 7,
        name: "OOPS / DBMS / DSA",
        designation: "IT Construct",
        image:it,
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