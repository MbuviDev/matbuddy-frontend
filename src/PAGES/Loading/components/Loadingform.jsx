import SelectWithSearch from "../../../components/InputComponents/SelectWithSearch";
import TextInput from "../../../components/InputComponents/textInput";



function Loadingform ({ input, showError }) {


    const dummyOptions=[
        { "_id": "645216b3bfe0017c72157600",
        "name": "Bagtown",
        "isActive": false
      }
    ]
  
    return (
        <div className="">
        
              <SelectWithSearch
                initial={""}
                input={input}
                showError={showError}
                inputKey="destination"
                mt={0.5}
                options={dummyOptions.map(obj=>({label: obj.name.toLocaleUpperCase(), value: obj._id}))}
                config={{
                    required: true,
                    label: "Vehicle",
                    placeholder: "Select Vehicle",
                    maxChar: 250,
                    }} />

                <SelectWithSearch
                initial={""}
                input={input}
                showError={showError}
                inputKey="destination"
                mt={0.5}
                options={dummyOptions.map(obj=>({label: obj.name.toLocaleUpperCase(), value: obj._id}))}
                config={{
                    required: true,
                    label: "Origin",
                    placeholder: "Select Origin",
                    maxChar: 250,
                   
                }} />

                <SelectWithSearch
                initial={""}
                input={input}
                showError={showError}
                inputKey="destination"
                mt={0.5}
                options={dummyOptions.map(obj=>({label: obj.name.toLocaleUpperCase(), value: obj._id}))}
                config={{
                    required: true,
                    label: "Destination",
                    placeholder: "Select Destination",
                    maxChar: 250,
                   
                }} />


                <TextInput 
                  initial={""}
                  input={input}
                  showError={showError}
                  inputKey="quantity"
                  mt={0.5}
                  config={{
                      required: true,
                      label: "Passenger Fare Amount",
                      placeholder: "Enter Passenger Fare Amount",
                      type:"number",
                      maxChar: 25,
                  }}/>
                
            </div>
    )
}

export default Loadingform;