import React from 'react';

import {FaGit} from "react-icons/fa";

import {FaReact} from "react-icons/fa";


import {BiLogoAws} from "react-icons/bi";
import {FaJenkins} from "react-icons/fa";
import {SiTerraform} from "react-icons/si";
import {SiAnsible} from "react-icons/si";
import {DiNginx} from "react-icons/di";
import {SiGnubash} from 'react-icons/si';
import {FaDocker} from "react-icons/fa";
import {SiKubernetes} from 'react-icons/si';
import {SiGooglecloud} from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";



const Skill = (props) => {

    const styling = {
        color: props.color
    }

  return (
    <a href={props.link} target='_blank' className=''>
    <div className='flex shadow-md flex-col items-center hover:animate-pulse w-fit border border-transparent space-y-2 hover:border-blue-800 duration-500 cursor-pointer p-2'>
        <div style={styling} className={` text-5xl md:text-8xl`}>{props.icon}</div>
        <p className='text-[.7rem] text-gray-600'>{props.name}</p>
    </div>
    </a>
  )
}



const Skills = () => {

    React.useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <div id='skills' className='md:px-10 px-4 py-6 flex flex-col space-y-6 mb-10'>

        <h1 data-aos="zoom-in" className='text-2xl md:text-5xl text-center md:text-start mb-4'><span className='border-b-4 text-gray-700 border-blue-800'>SKILLS</span></h1>

<div data-aos="zoom-in" className='flex flex-wrap gap-8 text-center items-center justify-center'>
      <Skill 
      icon={<BiLogoAws />}
      color="orange"
      name="AWS"
      />

    <Skill 
      icon={<FaJenkins/>}
      color="#D33834"
      name="JENKINS"
      />

    <Skill 
      icon={<FaGit />}
      name="GIT"
      color="##323330"
      />

<Skill 
      icon={<SiTerraform />}
      name="TERRAFORM"
      color="purple"
      />

<Skill 
      icon={<SiAnsible />}
      name="ANSIBLE"
      color="black"
      />

<Skill 
      icon={<DiNginx />}
      name="NGINX"
      color="green"
      />

<Skill 
      icon={<FaReact />}
      name="REACTJS"
      color="#61DBFB"
      />

<Skill 
      icon={<SiGnubash />}
      name="BASH"
      color="#293137"
      />

<Skill 
      icon={<FaDocker />}
      name="DOCKER"
      color="#0db7ed"
      />

<Skill 
      icon={<SiKubernetes />}
      name="KUBERNETES"
      color="blue"
      />

<Skill 
      icon={<SiGooglecloud/>}
      name="GCP"
      color="red"
      />


    </div>

    </div>
    
  )
}

export default Skills
