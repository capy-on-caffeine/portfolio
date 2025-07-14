import React from 'react'
import WhiteBackgroundButton from '../buttons/WhiteBackgroundButton'

const HeroSection = () => {
  return (
    <div className='w-full min-h-screen bg-[#222222] text-white text-5xl flex justify-center items-center'>
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-2'>
                <p>
                    hey i'm <span className='text-[#519CE6]'>arnav</span>
                </p>
                <p className='text-7xl'>
                    developer and designer
                </p>
                <p>
                    based in india
                </p>
            </div>

            <div className='flex flex-col gap-2'>
                <p>
                    i make cool software, design pretty stuff,
                </p>
                <p>
                    and <span className='text-[#519CE6]'>subvert expectations</span>
                </p>
            </div>

            <div className='flex gap-12'>
                <WhiteBackgroundButton>Resume</WhiteBackgroundButton>
                <WhiteBackgroundButton>Explore</WhiteBackgroundButton>
            </div>
        </div>
    </div>
  )
}

export default HeroSection