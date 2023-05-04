import React from "react";
import TextInput from "../../../components/InputComponents/textInput";


function ExpensesInputs ({ input, showError }) {

    return (
        <div>
            <TextInput 
             initial={""}
             input={input}
             showError={showError}
             inputKey="expense_type"
             mt={0.5}
             config={{
                 required: true,
                 label: "Expense Type",
                 placeholder: "Select Expense",
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
                label: "Vehicle",
                placeholder: "Select Vehicle",
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
                label: "Amount Spent(ksh)",
                placeholder: "Enter Amount",
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
                label: "Description",
                placeholder: "Enter Description (E.g num of litres,etc)",
                maxChar: 25,
                minChar: 1,
            }}
            />

            


        </div>
    )
}

export default ExpensesInputs;