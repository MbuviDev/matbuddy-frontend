import React from 'react'
import TextInput from '../../../../../components/InputComponents/textInput'

function RecepientInputs({ input, showError }) {
  return (
    <>
      <TextInput
        initial={""}
        input={input}
        showError={showError}
        inputKey="recipient_name"
        mt={0.5}
        config={{
          required: true,
          label: "Recipient Name",
          placeholder: "John",
          maxChar: 250,
          minChar: 3,
        }}
      />
      <TextInput
        initial={""}
        input={input}
        showError={showError}
        inputKey="recipient_id"
        mt={0.5}
        config={{
          required: true,
          label: "Recipient National ID",
          placeholder: "37005004",
          type: "number",
          maxChar: 250,
          minChar: 3,
        }}
      />
      <TextInput
        initial={""}
        input={input}
        showError={showError}
        inputKey="recipient_phone"
        mt={0.5}
        config={{
          required: true,
          label: "Recipient Phone",
          placeholder: "0700 000 000",
          type: "number",
          maxChar: 20,
          minChar: 10,
        }}
      />
    </>
  )
}

export default RecepientInputs