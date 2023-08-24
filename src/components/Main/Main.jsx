import React from 'react'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import ReachOut from './ReachOut'
import profile from "/src/assets/profile.jpeg";
// import Form from './Form'
import Certification from './Certification'

const Main = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Certification />
      <div className='flex md:px-10 px-4 py-6 items-center flex-col md:flex-row'>
        <ReachOut />
        <div className='w-[100%] hidden md:block md:w-1/2 h-fit items-center justify-center cursor-pointer'>
          <img src={profile} alt="" className='rounded-full border-8 border-blue-800 w-[100%] hover:sepia max-w-[25rem] max-h-[25rem] duration-500' />
        </div>
      </div>
      
      {/* <Form /> */}
    </main>
  )
}

export default Main
