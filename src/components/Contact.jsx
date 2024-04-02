import React from 'react'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SocialIcon from './utils/SocialIcon';

const Contact = () => {
  return (
    <div id='contact' className='relative w-full h-3/5 bg-zinc-800 flex flex-col z-0 justify-center items-center text-white'>
      <div className="relative flex flex-col justify-center items-center w-3/4 h-4/6 ">
          <div className="relative text-3xl font-poppins-semibold mt-12 mb-6">
              Contact
          </div>
          <div className="relative flex flex-col md:flex-row justify-center items-center w-full font-poppins-light">
              <div className="relative flex-1 text-center mb-2 lg:mb-0">
                <MailOutlinedIcon />
                <a href='mailto:arnav.anand2004@gmail.com' className='pl-2 hover:text-lightblue transition-all hover:transition-all'>arnav.anand2004@gmail.com</a>
              </div>
              <div className="relative flex-1 text-center">
                <FmdGoodOutlinedIcon />
                <span className='pl-2'>Jalandhar, Punjab, India</span>
              </div>
          </div>
          <div className='relative flex flex-row flex-1 justify-center items-center my-4'>
          <SocialIcon href={'https://github.com/capy-on-caffeine'}><GitHubIcon /></SocialIcon>
            <SocialIcon href={'https://twitter.com/thisis_arnav'}><XIcon /></SocialIcon>
            <SocialIcon href={'https://www.linkedin.com/in/arnav-anand-923232270/'}><LinkedInIcon /></SocialIcon>
          </div>
          <div className="flex w-full relative flex-row font-poppins-light justify-center items-center mt-2 mb-12">
            Made with ❤️ by capy-on-caffeine
          </div>
      </div>
    </div>
  )
}

export default Contact