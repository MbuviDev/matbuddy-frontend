import React, {useState, useEffect} from 'react'

function TextInput({
  input,
  inputKey,
  initial = "",
  showError = 0,
  mt = 0,
  mb = 0,
  config = {
    disabled: false,
    required: true,
    label: "Text input",
    placeholder: "",
    type: "text",
    maxChar: 200,
    minChar: 0,
    inputType: "text",
  },
}) {
  const [textInput, setTextInput] = useState(initial);
  const [borderColor, setBorderColor] = useState("bright_grey");

  const [err, setErr] = useState(false);

  const [errMessage, setErrorMessage] = useState("Field Required");

  useEffect(() => {
    input.current.form[inputKey] = initial;
    setTextInput(initial);
  }, []);

  useEffect(() => {
    if (showError === 0) {
      return;
    }
    handleBlur();
  }, [showError]);

  useEffect(() => {
    input.current.form[inputKey] = initial;
  }, []);

  function handleChange(txt) {
    if (txt.length > config.maxChar) {
      return;
    }
    setTextInput(txt);
    input.current.form[inputKey] = txt;
  }

  function handleBlur() {
    if (config.required === false) {
      return;
    }

    if (textInput === "") {
      setBorderColor("red");
      setErr(true);
      input.current.err[inputKey] = true;
      setErrorMessage(`* Field required`);
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
    setBorderColor("bright_grey");
    setErr(false);
    setErrorMessage(`* Field required`);
  }

  return (
    <div
      className="flex flex-col"
      style={{
        marginTop: `${mt}em`,
        marginBottom: `${mb}em`,
      }}
    >
      <label className=" font-inter text-xl font-semibold">{config.label}</label>
      <input
        className={`border-2 rounded-lg w-full py-2 px-8 placeholder-cadet_grey outline-none`}
        onFocus={() => setBorderColor("white")}
        style={{
          borderColor: borderColor,
          cursor: config.disabled ? "not-allowed" : "text",
        }}
        type={config.type}
        placeholder={config.placeholder}
        value={textInput}
        disabled={config.disabled}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
      />
      <small
        className="text-red font-DM-Reg"
        style={{ opacity: err ? "100%" : "0%" }}
      >
        {errMessage}
      </small>
    </div>
  );
}

export default TextInput