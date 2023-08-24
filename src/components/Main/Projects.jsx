import React from 'react';
import {AiFillProject} from "react-icons/ai";
import {RiProjectorFill} from "react-icons/ri";
import {SiCodeproject} from "react-icons/si";
import {TbPointFilled} from 'react-icons/tb';

import AOS from "aos";
import "aos/dist/aos.css";


const Project = ({projectName, icon, txt, technology, size, color, link}) => {

    const styling = {
        color: color
    }

    React.useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <a data-aos="zoom-in" href={link} target='_blank' className='w-full max-w-[30rem] md:min-w-[25rem] flex-1'>
    <div className='flex flex-col space-y-4 shadow-md p-4 px-8 rounded-md w-[100%] max-w-[30rem] border flex-1 border-transparent md:min-w-[25rem] cursor-pointer hover:border-blue-800 duration-500'>
        <div>
            <div className='flex space-x-1 items-center text-xl font-bold text-gray-600'>
                {icon}
                <h2>{projectName}</h2>
            </div>
            <p className='text-gray-500 text-[.9rem] flex items-center'><TbPointFilled style={styling} className='text-xl' />{txt}</p>
        </div>
        <div className='flex items-center justify-between text-[.8rem] text-gray-500'>
            <p>{technology}</p>
            <p>{size}</p>
        </div>
      
    </div>
    </a>
  )
}


const Projects = () => {
  return (
    <>
    <div id='projects' className='px-4 md:px-10 py-6 space-y-8'>
        <h1 data-aos="zoom-in" className='text-2xl md:text-5xl text-center md:text-start mb-4'><span className='border-b-4 text-gray-700 border-blue-800'>PROJECTS</span></h1>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap'>
            <Project 
            icon={<AiFillProject />}
            projectName="TERRAFORM-AWS-EKS"
            txt="Hundred Percent (100%) HCL"
            technology="Lincensed"
            size={"30664 KB"}
            color={"yellow"}
            link="https://github.com/Celestina-OG/Terraform-AWS-EKS"
            />

<Project 
            icon={<SiCodeproject />}
            projectName="GITHUB-ACTION-DEMO"
            txt="Workflows"
            technology="Licensed"
            size={"23564 KB"}
            color={"red"}
            link="https://github.com/Celestina-OG/GitHubActionDemo"
            />

<Project 
            icon={<RiProjectorFill />}
            projectName="AGILE FINAL PAGE"
            txt="Issue-Template"
            technology="Licensed"
            size={"1222 KB"}
            color={"green"}
            link="https://github.com/Celestina-OG/agile-final-project"
            />

<Project 
            icon={<SiCodeproject />}
            projectName="LAB-AGILE-PLANNING"
            txt="Issue-Template"
            technology="Licensed"
            size={"3002 KB"}
            color={"blue"}
            link="https://github.com/Celestina-OG/lab-agile-planning"
            />

{/* <Project 
            icon={<SiCodeproject />}
            projectName="LAB-AGILE-PLANNING"
            txt="Issue-Template"
            technology="Licensed"
            size={"3002 KB"}
            color={"blue"}
            link="https://github.com/Celestina-OG/lab-agile-planning"
            />

<Project 
            icon={<SiCodeproject />}
            projectName="LAB-AGILE-PLANNING"
            txt="Issue-Template"
            technology="Licensed"
            size={"3002 KB"}
            color={"blue"}
            link="https://github.com/Celestina-OG/lab-agile-planning"
            /> */}
            
        </div>
    </div>
    <div className='text-center'>
        <a data-aos="fade-right" href="https://github.com/Celestina-OG" target='_blank'>
    <button className='border-b-2 border-transparent hover:border-b-blue-800 hover:text-white duration-500 bg-blue-800 rounded-md hover:bg-blue-900 px-4 py-2 text-white'>
                    MORE PROJECTS
    </button>
    </a>
    </div>
    </>
  )
}

export default Projects;
