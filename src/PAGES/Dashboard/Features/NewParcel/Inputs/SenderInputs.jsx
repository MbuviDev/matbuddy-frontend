import React from 'react'
import TextInput from '../../../../../components/InputComponents/textInput'

function SenderInputs({ input, showError }) {
  return (
    <>
      <TextInput
        initial={""}
        input={input}
        showError={showError}
        inputKey="sender_name"
        mt={0.5}
        config={{
          required: true,
          label: "Sender Name",
          placeholder: "John",
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
          placeholder: "John",
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
          placeholder: "John",
          maxChar: 250,
          minChar: 3,
        }}
      />
    </>
  )
}

export default SenderInputs