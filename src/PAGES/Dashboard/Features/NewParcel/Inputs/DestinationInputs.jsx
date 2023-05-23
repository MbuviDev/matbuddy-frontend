import React from 'react'
import TextInput from '../../../../../components/InputComponents/textInput'
import SelectInput from '../../../../../components/InputComponents/SelectInput'
import SelectWithSearch from '../../../../../components/InputComponents/SelectWithSearch'

function DestinationInputs({ input, showError }) {
    const dummyOptions=[
        {
          "_id": "645216b336e634751154ceb9",
          "name": "Marion",
          "isActive": false
        },
        {
          "_id": "645216b31d3d4ad2c58d8e21",
          "name": "Ferney",
          "isActive": false
        },
        {
          "_id": "645216b3579285c3911a816f",
          "name": "Oretta",
          "isActive": false
        },
        {
          "_id": "645216b3f1135a1de870c294",
          "name": "Datil",
          "isActive": false
        },
        {
          "_id": "645216b3d4862775defc14f6",
          "name": "Ryderwood",
          "isActive": false
        },
        {
          "_id": "645216b3bfe0017c72157600",
          "name": "Bagtown",
          "isActive": false
        }
      ]
    
    return (
        <>
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
                    // minChar: 3,
                }}
            />
            <SelectInput
                initial={""}
                input={input}
                showError={showError}
                inputKey="payment_mode"
                mt={0.5}
                options={[{label:"MPESA", value:"1"},{label:"CASH", value:"2"}]}
                config={{
                    required: true,
                    label: "Payment Mode",
                    placeholder: "Payment Mode",
                    maxChar: 250,
                    // minChar: 3,
                }}
            />
            <TextInput
                initial={""}
                input={input}
                showError={showError}
                inputKey="quantity"
                mt={0.5}
                config={{
                    required: true,
                    label: "Quantity",
                    placeholder: "Enter Quantity",
                    type:"number",
                    maxChar: 25,
                }}
            />
        </>
    )
}

export default DestinationInputs