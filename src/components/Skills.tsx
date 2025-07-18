"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { AnimatedTooltip } from "./ui/animated-tooltip";



const skills = [
  {
        id: 1,
        name: "Java Core & Advanced / Multithreading / Java8 Streams / Collections / Lambda Expressions",
        designation: "JAVA",
        image:'https://i.pinimg.com/736x/e9/94/61/e99461fdd5b3db8bdb3081d8acf5e524.jpg',
      },

      {
        id: 2,
        name: "Spring Boot / Spring Security / JDBC / Hibernate / REST APIs / Maven",
        designation: "Backend Technologies",
        image:'https://www.contentside.com/wp-content/uploads/2015/01/spring-boot-logo.png',
      },
      {id: 3,
        name: "XML / JSON / Peer Code Reviews / Agile Scrum / SingleSignOn / JWT",
        designation: "Others",
        image:'https://t3.ftcdn.net/jpg/02/79/67/00/360_F_279670083_6Q2SmbCUEYU3ucziI2trGspNIApgzB2v.jpg',
      }
   ,
    {
      id: 4,
      name: "Javascript / JQuery / ReactJS",
      designation: "JS Frameworks & Libraries",
      image:'https://multishoring.com/wp-content/uploads/2024/04/JavaScript-Symbol.png',
    },
    {
      id: 5,
      name: "MySQL / MongoDB / PostgreSQL",
      designation: "Databases",
      image:'https://w7.pngwing.com/pngs/931/769/png-transparent-database-icon-database-free-blue-background-blue-angle-world.png',
    },
     {
        id: 6,
        name: "Kafka / Docker / Cloud / OOPS Concepts / Algorithms / Design Patterns / System Design",
        designation: "Tools and Technologies",
        image:'https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc=w240-h480-rw',
      },
    {
      id: 7,
      name: "HTML / CSS / Tailwind / Bootstrap",
      designation: "Web UI Technologies",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9fZzRj7BuQAtuf6RSuqIjWEaai2Vl7sFq2Y6tKq5hA&s',
    },
      {
        id: 8,
        name: "Git / GitHub",
        designation: "Version Control",
        image:'https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png',
      },

       {id: 9,
        name: "Shell Scripting",
        designation: "Bash",
        image:'https://w7.pngwing.com/pngs/48/567/png-transparent-bash-shell-script-command-line-interface-z-shell-shell-rectangle-logo-commandline-interface-thumbnail.png',
      },
       {
      id: 10,
      name: "Python",
      designation: "",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
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
        className="bg-gradient-to-br from-slate-200 to-slate-900 py-6 bg-clip-text text-center text-5xl  tracking-tight text-transparent md:text-7xl mb-8 font-bold"
      >
        Skills 
      </motion.h1>
      <div className="flex flex-row items-center justify-center w-full mt-8">
      <AnimatedTooltip items={skills} />
      </div>
    </LampContainer>
   
   
  )
}

export default Skills