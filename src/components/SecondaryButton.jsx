import React from 'react'

const SecondaryButton = ({ children }) => {
  return (
    <div className="w-48 h-14 bg-transparent border-white border-2 rounded-full justify-center items-center inline-flex box-border m-2 cursor-pointer">
        <div className="text-center text-white text-base font-poppins-semibold">{ children }</div>
    </div>
  )
}

export default SecondaryButton