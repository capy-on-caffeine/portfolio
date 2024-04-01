import React, { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from '@mui/icons-material/Close';

const ProjectCard = ({ name, img, url }) => {
  const [hover, setHover] = useState(false);

  let divStyle = {};
  let overlayStyle = {};

  if (img === "") {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    divStyle = {
      backgroundColor: `rgb(${r},${g},${b})`,
    };

    overlayStyle = {
      opacity: 0.1,
    };
  } else {
    divStyle = {
      backgroundImage: `url("${img}")`,
      backgroundSize: hover ? "200%" : "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };

    overlayStyle = {
      opacity: 0.5,
    };
  }

  return (
    <div
      className="relative m-4 h-48 w-72 rounded-lg transition-all duration-300 hover:transition-all"
      style={divStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="absolute bottom-0 left-0 h-16 w-full rounded-bl-lg rounded-br-lg bg-black backdrop-blur-sm"
        style={overlayStyle}
      />
      <div className="absolute bottom-0 left-0 inline-flex h-16 w-full flex-row items-center justify-center rounded-bl-lg rounded-br-lg">
        <div className="w-3/4 font-poppins-semibold text-xl text-white">
          {name}
        </div>
        <div className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-3xl bg-white bg-opacity-20 transition-all duration-75 hover:bg-opacity-30 hover:transition-all hover:duration-75">
          {url ? (
            <a href={url} target="_blank">
              <ArrowOutwardIcon className="text-white" />
            </a>
          ) : (
            <CloseIcon className=" text-white opacity-40" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
