import React from 'react'
import Avatar from '/images/avatar.png'
import PrimaryButton from './utils/PrimaryButton'
import SecondaryButton from './utils/SecondaryButton'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div id='home' className='relative w-full h-screen bg-neutral-900 flex flex-col z-0 justify-center items-center'>
        <div className="relative flex flex-col justify-center items-center lg:w-6/12 lg:h-4/6 w-9/12 h-screen ">
            <img src={Avatar} className='relative w-48 my-4' />
            <div className="relative text-3xl lg:text-4xl text-white font-poppins-extrabold mb-2">
                Hi 👋🏻 This is
                <span className='ml-2 text-transparent bg-clip-text bg-gradient-to-b from-darkblue to-lightblue'>Arnav</span>
            </div>
            <div className="relative font-poppins-regular text-base text-neutral-400 text-center mb-6">
                <span className='inline lg:inline-block'>I'm a passionate developer, specializing in front end web development.</span>
                <span className='inline lg:inline-block'>I create things for fun, and my works tend to be a tad-bit different from the rest</span>
            </div>
            <div className="relative flex md:flex-row flex-col justify-center items-center w-full">
                <Link to='#contact'><PrimaryButton>Let's talk</PrimaryButton></Link>
                <a href='https://drive.google.com/file/d/1yyvGnlttCLpgV9jdgRRURP7caJ6QonDK/view?usp=sharing' target='_blank'><SecondaryButton>Download CV</SecondaryButton></a>
            </div>
        </div>
    </div>
  )
}

export default Hero