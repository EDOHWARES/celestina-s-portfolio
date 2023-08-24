import React from 'react';
import {FaGithubSquare} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import {SiBloglovin} from "react-icons/si";
import profile from "/src/assets/profile.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

    React.useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <div data-aos="flip-right" className='md:px-10 px-4 py-6 mt-10 mb-10 flex flex-col md:space-x-4 md:flex-row items-start justify-between space-y-10 md:space-y-0 '>
      <div className='flex flex-col space-y-6'>
        <h1 className='text-3xl md:text-5xl text-gray-800'>
            Hi, I'm <span className='font-bold flex space-x-2 mt-2'><span className='border-b-4 border-blue-800'>CELESTINA</span><span>AMADI</span></span>
        </h1>
        <p className='text-gray-500 text-xl md:text-3xl'>
        Cloud/DevOps Engineer
        </p>
        <div className='flex space-x-4 text-[2rem] md:text-[3rem] mb-10'>
            <a href="https://www.linkedin.com/in/celestina-amadi" target='_blank' className='hover:scale-110'>
                <AiFillLinkedin className='fill-blue-800' />
            </a>
            <a href="https://github.com/Celestina-OG" target='_blank' className='hover:scale-110'>
                <FaGithubSquare />
            </a>
            <a href="https://celestina.hashnode.dev/" target='_blank' className='hover:scale-110'>
                <SiBloglovin className='text-green-500' />
            </a>
            <a href="mailto:Amadicelestina.ego@gmail.com" target='_blank' className='hover:scale-110'>
                <SiGmail className='text-red-500' />
            </a>
        </div>
        <button className='border-b-2 w-fit border-transparent hover:border-b-blue-800 font-bold animate-bounce hover:text-white duration-500 bg-gray-800 rounded-md hover:bg-blue-900 px-4 py-2 text-white'>
         <a href="https://drive.google.com/file/d/1HlkSOOvQhJhwtZICwoZ26OTqJsPQI4qg/view?usp=drivesdk" target='_blank'>MY RESUME</a>
        </button>
      </div>

      <div className='w-[100%] md:w-1/2 h-fit flex items-center justify-center cursor-pointer'>
        <img src={profile} alt="" className='rounded-full border-8 border-blue-800 w-[100%] hover:sepia max-w-[25rem] max-h-[25rem] duration-500' />
      </div>
    </div>
  )
}

export default Hero
