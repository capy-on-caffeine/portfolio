import React from 'react'
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CapyIcon from '../images/capy.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-10 flex flex-row w-full h-16 bg-black items-center justify-center text-white font-jakarta-regular'>
        <div className='relative flex flex-1 justify-center items-center font-jakarta-semibold'>
            <img src={CapyIcon} className='relative inline-block w-8' />
            <span>capy-on-caffeine</span>
        </div>
        <div className='relative flex flex-row flex-1 justify-center items-center'>
            <Link to='#home' className="relative flex-1 items-center justify-center flex cursor-pointer">Home</Link>
            <Link to='#about' className="relative flex-1 items-center justify-center flex cursor-pointer">About</Link>
            <Link to='#projects' className="relative flex-1 items-center justify-center flex cursor-pointer">Projects</Link>
            <Link to='#tech' className="relative flex-1 items-center justify-center flex cursor-pointer">Tech</Link>
            <Link to='#contact' className="relative flex-1 items-center justify-center flex cursor-pointer">Contact</Link>
        </div>
        <div className='relative flex flex-row flex-1 justify-center items-center'>
            <a href='https://github.com/capy-on-caffeine' className="relative items-center justify-center flex mr-6 cursor-pointer"><GitHubIcon /></a>
            <a href='https://twitter.com/thisis_arnav' className="relative items-center justify-center flex mr-6 cursor-pointer"><XIcon /></a>
            <a href='https://www.linkedin.com/in/arnav-anand-923232270/' className="relative items-center justify-center flex cursor-pointer"><LinkedInIcon /></a>
        </div>
    </div>
  )
}

export default Navbar