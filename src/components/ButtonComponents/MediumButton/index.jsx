import React from 'react'
import {getColor} from '../Util';

function SmallButton({config}) {
  
  const {label="", onClickFunction=()=>{}, color="red", style="" }= config
  
  const { bgColor, hoverBgColor} = getColor(color);
  
  return (
    <button 
    onClick={onClickFunction}
    className={`duration-200 ease-in-out rounded-full 
    text-white text-base py-1 px-6 active:shadow-none hover:shadow-lg m-2  
    border-none ${bgColor} ${hoverBgColor} flex-grow flex-shrink ` + style}>
      {label}</button>
  )
}

export default SmallButton