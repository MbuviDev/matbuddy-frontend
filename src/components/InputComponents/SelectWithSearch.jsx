import React, { useRef, useState } from 'react'

import Select from 'react-select';

function SelectWithSearch({
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


  const [borderColor, setBorderColor] = useState("bright_grey");
  
  const initial = ""
    
  const [textInput, setTextInput] = useState(initial);
  
  const [err, setErr] = useState(false);
  
  const [errMessage, setErrorMessage] = useState("Field Required");
  

  function onSelect(e){
    setTextInput(e?.value || "");
    console.log("text ", e?.value)
    setBorderColor("#28a745")
    input.current.form[inputKey] = initial;
    input.current.form[inputKey] = e?.value;
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

  const styles = {
    control: (styles) => ({ ...styles,
      backgroundColor: 'white', 
      minWidth:"270px",
      padding:"4px",
      fontSize: '16px',
      borderColor: borderColor,
    }),
  }
  
  return (
    <div 
    className="relative flex flex-col flex-grow mx-8 my-5"
    style={{
      marginTop: `${mt}em`,
      marginBottom: `${mb}em`,
    }}>
      <label className=" font-inter font-semibold">{config.label}</label>
      <Select
        onChange={onSelect}
        onBlur={handleBlur}
        styles={styles  }
        classNamePrefix="select"
        defaultValue={"Select"}
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name="color"
        options={options}
        isRequired={config.required}
      />
      <small
        className="text-red font-inter"
        style={{ opacity: err ? "100%" : "0%" }}
      >
        {errMessage}
      </small>
    </div>
  )
}

export default SelectWithSearch