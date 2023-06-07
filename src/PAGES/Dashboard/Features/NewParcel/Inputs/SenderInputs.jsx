import React from 'react'
import TextInput from '../../../../../components/InputComponents/textInput'

function SenderInputs({ input, showError }) {
  return (
    <div>
      <TextInput
        initial={""}
        input={input}
        showError={showError}
        inputKey="sender_name"
        mt={0.5}
        config={{
          required: true,
          label: "Sender Name",
          type: "text",
          placeholder: "Enter Name",
          maxChar: 250,
          minChar: 3,
        }}
      />
      <TextInput
        initial={""}
        input={input}
        showError={showError}
        inputKey="sender_id"
        mt={0.5}
        config={{
          required: true,
          label: "Sender National ID",
          type: "number",
          placeholder: "Enter National ID ",
          maxChar: 250,
          minChar: 3,
        }}
      />
      <TextInput
        initial={""}
        input={input}
        showError={showError}
        inputKey="sender_phone"
        mt={0.5}
        config={{
          required: true,
          label: "Sender Phone",
          placeholder: "Enter Phone(07/01)",
          type: "number",
          maxChar: 20,
          minChar: 10,
        }}
      />
    </div>
  )
}

export default SenderInputs