import React from 'react';
import {CgMenuGridO} from "react-icons/cg";
import {TiCancelOutline} from "react-icons/ti";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {


    React.useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    const [showNav, setShowNav] = React.useState(false)

    const turnOnNav = () => {
        setShowNav(true)
    }

    const turnOffNav = () => {
        setShowNav(false)
    }

    // const turnOffNav = () => {
    //     setShowNav(false)
    // }



  return (
    <header className='flex justify-between items-center md:px-10 px-4 py-6 shadow-md relative'>

        <div className="logo">
            <a href="#" className='font-bold text-xl text-gray-600'>
                {"<CELESTINA />"}
            </a>
        </div>

        <nav className='text-gray-500'>
            <ul data-aos="zoom-in" className={`hidden md:flex flex-col z-50 items-center justify-between md:flex-row md:space-x-8 absolute md:static right-0 top-0 space-y-6 text-center md:space-y-0 shadow-md h-[50vh] mt-[5rem] md:mt-0 md:h-auto md:shadow-[0] p-8 md:p-0 bg-white border md:border-0`}>
                <li className='border-b-2 border-transparent hover:border-b-blue-800 hover:text-black duration-500'>
                    <a href="#skills">Skills</a>
                </li>
                <li className='border-b-2 border-transparent hover:border-b-blue-800 hover:text-black duration-500'>
                    <a href="#projects">Projects</a>
                </li>
                <li className='border-b-2 border-transparent hover:border-b-blue-800 hover:text-black duration-500'>
                    <a href="#certifications">Certifications</a>
                </li>
                <li className='border-b-2 border-transparent hover:border-b-blue-800 hover:text-white duration-500 bg-blue-800 rounded-md hover:bg-blue-900 px-4 py-2 text-white'>
                    <a href="#reachout">Contact Me</a>
                </li>
            </ul>
        </nav>

        <nav id='mobileNav' className={`text-gray-500 md:hidden ${showNav ? "block" : "hidden"}`}>
            <ul className={`flex flex-col z-50 items-center justify-between md:flex-row md:space-x-8 absolute md:static right-0 top-0 space-y-6 text-center md:space-y-0 shadow-md h-[50vh] mt-[5rem] md:mt-0 md:h-auto md:shadow-[0] p-8 md:p-0 bg-white border md:border-0`}>
                <li className='border-b-2 border-transparent hover:border-b-blue-800 hover:text-black duration-500'>
                    <a href="#skills">Skills</a>
                </li>
                <li className='border-b-2 border-transparent hover:border-b-blue-800 hover:text-black duration-500'>
                    <a href="#projects">Projects</a>
                </li>
                <li className='border-b-2 border-transparent hover:border-b-blue-800 hover:text-black duration-500'>
                    <a href="#certifications">Certifications</a>
                </li>
                <li className='border-b-2 border-transparent hover:border-b-blue-800 hover:text-white duration-500 bg-blue-800 rounded-md hover:bg-blue-900 px-4 py-2 text-white'>
                    <a href="#reachout">Contact Me</a>
                </li>
            </ul>
        </nav>

        <div className={`md:hidden text-2xl cursor-pointer ${showNav ? "hidden" : "block"}`} onClick={turnOnNav}>
            <CgMenuGridO />
        </div>
        <div className={`text-2xl md:hidden cursor-pointer ${showNav ? "block" : "hidden"}`} onClick={turnOffNav}>
            <TiCancelOutline />
        </div>
      
    </header>
  )
}

export default Header
