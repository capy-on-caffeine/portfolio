import React from 'react'
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CapyIcon from '/images/capy.png';
import Hyperlink from './utils/Hyperlink';
import SocialIcon from './utils/SocialIcon';

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-10 flex flex-row w-full h-16 bg-black items-center justify-center text-white font-jakarta-regular'>
        <div className='relative flex flex-1 justify-center items-center font-jakarta-semibold'>
            <img src={CapyIcon} className='relative inline-block w-8' />
            <span>capy-on-caffeine</span>
        </div>
        {/* <div className="lg:hidden">
          <span className="relative items-center justify-center flex mr-6 cursor-pointer hover:text-gray-300 transition-all hover:transition-all">
            <MenuIcon />
          </span>
        </div> */}
        <div className='hidden relative lg:flex flex-row flex-1 justify-center items-center'>
            <Hyperlink to={'home'}>Home</Hyperlink>
            <Hyperlink to={'about'}>About</Hyperlink>
            <Hyperlink to={'projects'}>Projects</Hyperlink>
            <Hyperlink to={'tech'}>Tech</Hyperlink>
            <Hyperlink to={'contact'}>Contact</Hyperlink>
        </div>
        <div className='relative flex flex-row flex-1 justify-center items-center'>
            <SocialIcon href={'https://github.com/capy-on-caffeine'}><GitHubIcon /></SocialIcon>
            <SocialIcon href={'https://twitter.com/thisis_arnav'}><XIcon /></SocialIcon>
            <SocialIcon href={'https://www.linkedin.com/in/arnav-anand-923232270/'}><LinkedInIcon /></SocialIcon>
        </div>
    </div>
  )
}

export default Navbar