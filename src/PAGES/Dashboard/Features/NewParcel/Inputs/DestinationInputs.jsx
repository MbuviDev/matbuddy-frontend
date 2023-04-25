import React from 'react'
import TextInput from '../../../../../components/InputComponents/textInput'

function DestinationInputs({ input, showError }) {
    return (
        <>
            <TextInput
                initial={""}
                input={input}
                showError={showError}
                inputKey="last_name"
                mt={0.5}
                config={{
                    required: true,
                    label: "Destination",
                    placeholder: "Destination",
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
                    label: "Payment Mode",
                    placeholder: "Payment Mode",
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
                    label: "Quantity",
                    placeholder: "0000",
                    type:"number",
                    maxChar: 250,
                    minChar: 3,
                }}
            />
        </>
    )
}

export default DestinationInputs