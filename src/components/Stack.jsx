import React from 'react'
import cpp from '../images/technologies/C++.png'
import css3 from '../images/technologies/CSS3.png'
import docker from '../images/technologies/Docker.png'
import git from '../images/technologies/Git.png'
import html5 from '../images/technologies/Html5.png'
import java from '../images/technologies/Java.png'
import js from '../images/technologies/JavaScript.png'
import python from '../images/technologies/Python.png'
import react from '../images/technologies/ReactNative.png'
import tensorflow from '../images/technologies/Tensorflow.png'

const Stack = () => {
  return (
    <div id='tech' className='relative w-full h-screen bg-neutral-900 flex flex-col z-0 justify-center items-center'>
        <div className="relative flex flex-col justify-center items-center w-6/12 h-4/6 ">
            <div className="relative text-4xl text-white font-poppins-extrabold mb-3 mt-24">
                Tech
                <span className='ml-2 text-transparent bg-clip-text bg-gradient-to-b from-darkblue to-lightblue'>Stacks</span>
            </div>
            <div className="relative flex flex-row w-full justify-center font-poppins-regular text-xl text-neutral-300 mt-4 mb-20 text-justify">
                <div className="relative flex-1 flex flex-col items-center text-center gap-4">
                    <span>Pro</span>
                    <img src={html5} className='w-16' />
                    <img src={css3} className='w-16' />
                    <img src={js} className='w-16' />
                    <img src={react} className='w-16' />
                    <img src={git} className='w-16' />
                </div>
                <div className="relative flex-1 flex flex-col items-center text-center gap-4">
                    <span>Additional</span>
                    <img src={python} className='w-16' />
                    <img src={cpp} className='w-16' />
                    <img src={java} className='w-16' />
                </div> 
                <div className="relative flex-1 flex flex-col items-center text-center gap-4">
                    <span>Learning</span>
                    <img src={tensorflow} className='w-16' />
                    <img src={docker} className='w-16' />
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Stack