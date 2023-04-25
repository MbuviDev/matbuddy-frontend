import React from 'react'
import TextInput from '../../../../../components/InputComponents/textInput'

function DescriptionInputs({ input, showError }) {
    return (
        <>
            <TextInput
                initial={""}
                input={input}
                showError={showError}
                inputKey="description"
                mt={0.5}
                config={{
                    required: true,
                    label: "Description",
                    placeholder: "...",
                    maxChar: 250,
                    minChar: 3,
                }}
            />
            <TextInput
                initial={""}
                input={input}
                showError={showError}
                inputKey="total_parcel_value"
                mt={0.5}
                config={{
                    required: true,
                    label: "Total Parcel Value",
                    placeholder: "John",
                    maxChar: 250,
                    minChar: 3,
                }}
            />
            <TextInput
                initial={""}
                input={input}
                showError={showError}
                inputKey="last_name"
                mt={0.5}
                config={{
                    required: true,
                    label: "Fee Charged",
                    placeholder: "000",
                    type: "number",
                    maxChar: 250,
                    minChar: 3,
                }}
            />
        </>
    )
}

export default DescriptionInputs