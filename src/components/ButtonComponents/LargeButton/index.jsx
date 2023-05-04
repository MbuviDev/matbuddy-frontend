import React from 'react'
import {getColor} from '../Util';

function SmallButton({config }) {
  
  const {label, onClickFunction, color="red", style="" }= config
  
  const { bgColor, hoverBgColor} = getColor(color);
  
  return (
    <button className={`duration-300 ease-in-out rounded-full text-white text-base w-40 py-1 px-4 hover:shadow-md m-2  border-none ${bgColor} ${hoverBgColor} flex-grow flex-shrink`}>
      {label}</button>
  )
}

export default SmallButton