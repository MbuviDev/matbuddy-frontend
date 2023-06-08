import SelectWithSearch from "../../../components/InputComponents/SelectWithSearch";
import TextInput from "../../../components/InputComponents/textInput";



function Loadingform ({ input, showError }) {


  
    return (
        <div className="flex">
        
              <SelectWithSearch
                className="block"
                initial={""}
                input={input}
                showError={showError}
                inputKey="destination"
                mt={0.5}
                config={{
                    required: true,
                    label: "Vehicle",
                    placeholder: "Select Vehicle",
                    maxChar: 250,
                    }} />

                <SelectWithSearch
                className="block"
                initial={""}
                input={input}
                showError={showError}
                inputKey="destination"
                mt={0.5}
                config={{
                    required: true,
                    label: "Origin",
                    placeholder: "Select Origin",
                    maxChar: 250,
                   
                }} />

                <SelectWithSearch
                className="block"
                initial={""}
                input={input}
                showError={showError}
                inputKey="destination"
                mt={0.5}
                config={{
                    required: true,
                    label: "Destination",
                    placeholder: "Select Destination",
                    maxChar: 250,
                   
                }} />


                <TextInput 
                  className="block"
                  type="number"
                  initial={""}
                  input={input}
                  showError={showError}
                  inputKey="quantity"
                  mt={0.5}
                  config={{
                      required: true,
                      label: "Passenger Fare Amount",
                      placeholder: "Enter Passenger Fare Amount",
                    //   type:"number",
                      maxChar: 25,
                  }}/>
                
            </div>
    )
}

export default Loadingform;