import React from 'react'

function MediumButton({config }) {
  const {label, onClickFunction, color, style="", }= config
  return (
    <button>{label}</button>
  )
}

export default MediumButton