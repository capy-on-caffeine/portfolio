import React from 'react'

const About = () => {
  return (
    <div id='about' className='relative w-full h-screen bg-neutral-900 flex flex-col z-0 justify-center items-center'>
        <div className="relative flex flex-col justify-center items-center lg:w-6/12 lg:h-4/6 h-screen w-11/12 ">
            <div className="relative text-4xl text-white font-poppins-extrabold mb-3">
                About
                <span className='ml-2 text-transparent bg-clip-text bg-gradient-to-b from-darkblue to-lightblue'>Me</span>
            </div>
            <div className="relative font-poppins-regular text-base text-neutral-400 mb-6 text-justify">
                I'm a sophomore undergrad pursuing Bachelors in Information Technology from 
                Dr. B.R. Ambedkar National Institute of Technology, Jalandhar. I'm currently into deep learning and making steady 
                progress with backend development. I'm looking forward to explore opportunities where I can make meaningful 
                contributions to the tech industry.   
            </div>
        </div>
    </div>
  )
}

export default About