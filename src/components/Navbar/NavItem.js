import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles.css";

function NavItem({image, text, path}) {
    const nav = useNavigate();
  return (
    <div 
    onClick={()=>nav(path)}
    className="flex items-center cursor-pointer py-3"
>
    <img src={image} className="mr-2 px-5" alt={text}/> 
    <span className="align-middle hover:text-white transition-colors ">{text}</span>

    </div>
  )
}

export default NavItem