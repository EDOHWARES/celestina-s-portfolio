import React from 'react';
import {FaGithubSquare} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import {BiCurrentLocation} from "react-icons/bi";
import {SiBloglovin} from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";


const ReachOut = () => {

    React.useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <div data-aos="zoom-in" id='reachout' className='md:px-10 px-4 py-6'>
    <div className='flex flex-col space-y-4'>
      <h2 className='text-2xl font-bold text-gray-800'>Reach Out To Me!</h2>
      <p className='text-gray-500'>
        Discuss a Project or just want to say Hi?, My Inbox is open for all.
      </p>
      <p className='text-xs text-gray-600'>
        Problem solver - I'm focused on getting the work done through best practices while meeting up with deadlines and budgets. <br /> <br />
        Speedy Learner - Naturally have the ability to adapt to new technologies and tools in a very short while.
      </p>
      <a href="" className='flex items-center text-gray-700'>
        <BiCurrentLocation />
        127.0.0.1
      </a>
      <p className='text-gray-800'>Open for Opportunities: Yes</p>
    </div>
    <div className='flex space-x-4 text-[2rem] md:text-[3rem] mb-10 mt-5'>
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
    </div>
  )
}

export default ReachOut
