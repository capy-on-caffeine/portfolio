import React from 'react'

const PrimaryButton = ({ children }) => {
  return (
    // <div className="px-14 py-4 bg-white rounded-full justify-center items-center inline-flex">
    <div className="w-48 h-14 bg-white rounded-full justify-center items-center inline-flex box-border m-2 cursor-pointer">
        <div className="text-center text-black text-base font-poppins-semibold">{ children }</div>
    </div>
  )
}

export default PrimaryButton