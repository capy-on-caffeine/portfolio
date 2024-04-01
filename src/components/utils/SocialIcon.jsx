import React from 'react'

const SocialIcon = ({ href, children }) => {
  return (
    <a href={href} className="relative items-center justify-center flex mr-6 cursor-pointer hover:text-gray-300 transition-all hover:transition-all">{children}</a>
  )
}

export default SocialIcon