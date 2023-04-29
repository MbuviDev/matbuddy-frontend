import React from "react";
import TextInput from "../../../components/InputComponents/textInput";


function LoadingInputs ({ input, showError }) {

    return (
        <div>
            <TextInput 
             initial={""}
             input={input}
             showError={showError}
             inputKey=""
             mt={0.5}
             config={{
                 required: true,
                 label: "Vehicle",
                 placeholder: "Select Vehicle",
                 maxChar: 250,
                 minChar: 3,
             }}
            />

            <TextInput 
            initial={""}
            input={input}
            showError={showError}
            inputKey=""
            mt={0.5}
            config={{
                required: true,
                label: "Origin",
                placeholder: "Select Origin",
                maxChar: 25,
                minChar: 1,
            }}
            />


            <TextInput 
            initial={""}
            input={input}
            showError={showError}
            inputKey=""
            mt={0.5}
            config={{
                required: true,
                label: "Destination",
                placeholder: "Select Destination",
                maxChar: 25,
                minChar: 1,
            }}
            />


            <TextInput 
            initial={""}
            input={input}
            showError={showError}
            inputKey=""
            mt={0.5}
            config={{
                required: true,
                label: "Passanger Fare Amount",
                placeholder: "Enter Passanger Fare Amount",
                maxChar: 25,
                minChar: 1,
            }}
            />

            


        </div>
    )
}

export default LoadingInputs;