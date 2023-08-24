import React from 'react';
import cert1 from "/src/assets/Application Development using Microservice and Serverless-1.png";
import cert2 from "/src/assets/AWS Certified Cloud Practitioner certificate-1.png";
import cert3 from "/src/assets/AWS Certified Solutions Architect - Associate certificate-1.png";
import cert4 from "/src/assets/NITDADevOpsAssociate_Badge20230731-33-fskha4-1.png"

const Certificate = (props) => {
  return (
    <a href={props.link} target='_blank' className='w-full md:max-w-[25rem] md:w-fit mx-auto' >
    <div id='cert' className='flex shadow-md flex-col items-center pb-6 flex-1 rounded-md hover:animate-pulse w-full border border-transparent space-y-2 hover:border-blue-800 duration-500 cursor-pointer p-2'>
      <div>
        <img className='w-full' src={props.img} alt="" />
      </div>

      <div className='hover:bg-blue-800 hover:text-white duration-500 w-full'>
        <h2 className='text-center text-xl hover:text-white duration-500 text-gray-800'>{props.h2}</h2>
        <h3 className='text-gray-500 text-center'>-{props.h3}</h3>
      </div>

    </div>
    </a>
  )
}



const Certification = () => {
  return (
    <div id='certifications' className='px-4 md:px-10 py-6 flex flex-col space-y-8 mt-10 md:mt-0'>
        <h1 data-aos="zoom-in" className='text-2xl md:text-5xl text-center md:text-start mb-4'><span className='border-b-4 text-gray-700 border-blue-800'>CERTIFICATION</span></h1>
        <div data-aos="zoom-in" className='flex flex-col md:flex-row items-center space-y-4 flex-1 justify-between flex-wrap '>
          <Certificate 
          img={cert2}
          h2="AWS CERTIFIED CLOUD PRACTITIONER"
          h3="aws certified"
          link="https://www.credly.com/badges/a2adf143-5e51-4582-9ae3-484ba4e43a63/linked_in_profile"
          />

<Certificate 
          img={cert1}
          h2="APPLICATION DEVELOPER"
          h3="Cousera IBM"
          link="https://www.coursera.org/account/accomplishments/certificate/3WM293JSS324"
          />

<Certificate 
          img={cert3}
          h2="AWS CERTIFIED SOLUTIONS ARCHITECT"
          h3="aws certified"
          link="https://www.credly.com/badges/d4d50734-ca03-4058-950c-6c30e5874b20/public_url"
          />

<Certificate 
          img={cert4}
          h2="DEVOPS ASSOCIATE"
          h3="Cousera NITDA"
          link="https://www.credly.com/badges/f7547da1-295b-4f7e-be33-ed0873a0682f/public_url"
          />

        </div>
      
    </div>
  )
}

export default Certification
