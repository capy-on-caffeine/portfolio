import React from "react";

const PrimaryButton = ({ onMouseOver, onMouseOut, children }) => {
  return (
    <div className="m-2 box-border inline-flex h-14 w-48 cursor-pointer items-center justify-center rounded-full bg-white transition-all hover:bg-gray-300 hover:transition-all" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <div className="text-center font-poppins-semibold text-base text-black">
        {children} 
      </div>
    </div>
  );
};

export default PrimaryButton;
