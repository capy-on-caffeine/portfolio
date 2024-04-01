import React from "react";

const SecondaryButton = ({ children }) => {
  return (
    <div className="m-2 box-border inline-flex h-14 w-48 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-transparent transition-all hover:border-gray-300 hover:text-gray-300 hover:transition-all">
      <div className="text-center font-poppins-semibold text-base text-white">
        {children}
      </div>
    </div>
  );
};

export default SecondaryButton;
