import React, { useRef, useState } from 'react'

function SelectInput({
  input,
  inputKey,
  showError = 0,
  options =[],
  mt = 0,
  mb = 0,
  config = {
    disabled: false,
    required: true,
    label: "Text input",
    placeholder:"",
    type: "text",
    maxChar: 200,
    minChar: 0,
    inputType: "text",
  },}) {

  const initial = ""

  const [borderColor, setBorderColor] = useState("bright_grey");
    
  const select = useRef();
  
  const [textInput, setTextInput] = useState(initial);
  
  const [err, setErr] = useState(false);
  
  const [errMessage, setErrorMessage] = useState("Field Required");
  

  function onSelect(e){
    setTextInput(e.target.value);
    console.log("text ", e.target.value)
    setBorderColor("#28a745")
    input.current.form[inputKey] = initial;
    input.current.form[inputKey] = e.target.value;
  }

  
  
  function handleBlur() {
     
    if (config.required === false) {
      return;
    }
    
    if (textInput === initial) {
      setBorderColor("red");
      setErr(true);
      input.current.err[inputKey] = true;
      setErrorMessage(`* Field required`);
      console.log("error here ", textInput)
      return;
    }

    if (textInput.length < config.minChar) {
      setBorderColor("red");
      setErr(true);
      setErrorMessage(`* min charters required ${config.minChar}`);
      input.current.err[inputKey] = true;
      return;
    }

    input.current.err[inputKey] = false;
    setBorderColor("#28a745");
    setErr(false);
    setErrorMessage(``);
  }
  
  return (
    <div 
    className="relative flex flex-col flex-grow mx-2 md:mx-8 my-5"
    style={{
      marginTop: `${mt}em`,
      marginBottom: `${mb}em`,
    }}>
      <label className=" font-inter font-semibold">{config.label}</label>
      <select 
      onChange={onSelect}
      className='appearance-none focus:shadow-outline-blue-400 
      border-2 border-gr min-w-[270px] focus:outline-none rounded-lg 
      py-2 px-2 focus:ring-1 bg-white text-black
      first:bg-blue-400'
      ref={select}
      style={{
        color: textInput === initial ? "gray" : "black",
        borderColor: borderColor,
        cursor: config.disabled ? "not-allowed" : "pointer",
      }}
      disabled={config.disabled}
        onBlur={handleBlur}
      >
        <option 
          className='px-2 py-1 bg-white hover:bg-slate-500 hover:text-blue-700 outline-none border-none' 
          value={initial}>Select</option>
        {
      options.map(option=>
        <option
        key={option.value}
          className='px-2 py-1 text-black bg-white hover:bg-slate-500 hover:text-blue-700 outline-none border-none' 
          value={option.value}>
          {option.label}
          </option>)
        }
      </select>

      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700' >
        {/* eslint-disable-next-line jsx-a11y/alt-text*/}
        <img src='/selectPolygon.png' className=' transition-all ease-linear duration-300'/>
      </div>
        
      <small
        className="text-red font-inter"
        style={{ opacity: err ? "100%" : "0%" }}
      >
        {errMessage}
      </small>
    </div>
  )
}

export default SelectInput