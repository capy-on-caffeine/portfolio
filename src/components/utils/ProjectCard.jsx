import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ProjectCard = ({ name, img, url }) => {
  let divStyle = {}
  let overlayStyle = {}

  if (img === "") {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    divStyle = {
      backgroundColor: `rgb(${r},${g},${b})`
    }

    overlayStyle = {
      opacity: 0.1
    }
  } else {
    divStyle = {
      backgroundImage: `url("${img}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }

    overlayStyle = {
      opacity: 0.5
    }
  }




  return (
    <div className="relative w-72 h-48 rounded-lg m-4" style={divStyle}>
        <div className="w-full h-16 left-0 bottom-0 absolute bg-black rounded-bl-lg rounded-br-lg backdrop-blur-sm" style={overlayStyle} />
        <div className="w-full h-16 left-0 bottom-0 absolute rounded-bl-lg rounded-br-lg inline-flex flex-row justify-center items-center">
            <div className="text-white text-xl w-3/4 font-poppins-semibold">{name}</div>
            <div className="w-9 h-9 bg-white bg-opacity-20 rounded-3xl justify-center items-center inline-flex cursor-pointer">
                <a href={url}><ArrowOutwardIcon className='text-white' /></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;
