import React from 'react'
import NameSection from '@/components/NameSection';
import SocialProfiles from '@/components/SocialProfiles';
import Education from '@/components/Education';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
function page() {
  return (
    <div>
      
      <NameSection/>
      <AboutMe/>
      <Experience />
      <Projects />
      <Education/>
      
      <SocialProfiles />
      <Skills />
      <Footer />




    </div>
  )
}

export default page