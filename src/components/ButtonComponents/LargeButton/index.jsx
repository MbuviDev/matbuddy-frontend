import React from 'react'
import {getColor} from '../Util';

function SmallButton({config }) {
  
  const {label="", onClickFunction=()=>{}, color="red", style="" }= config
  
  const { bgColor, hoverBgColor} = getColor(color);
  
  return (
    <button 
    onClick={onClickFunction}
    className={`duration-200 font-bold ease-in-out rounded-lg 
    text-white text-lg min-w-[10rem] py-1 px-6 active:shadow-none hover:shadow-lg m-2  
    border-none ${bgColor} ${hoverBgColor} flex-grow flex-shrink ` + style}>
      {label}
      </button>
  )
}

export default SmallButton