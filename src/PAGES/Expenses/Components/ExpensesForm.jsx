import React from "react";
import SelectWithSearch from "../../../components/InputComponents/SelectWithSearch";
import TextInput from "../../../components/InputComponents/textInput";

function ExpensesForm({ input, showError }) {


  return (
    // <div className="p-2 m-4 flex flex-col gap-4 bg-white border rounded-md  shadow-slate-600 ">
    //   <h2 className="text-2xl m-2 p-2 font-serif"> New Expense Log </h2>
    //   <form
    //     className="grid grid-cols-2 p-2 gap-4 h-full w-full
	// 				align-middle items-center justify-center"
    //   >
		<div className="flex">
        <SelectWithSearch
          initial={""}
          input={input}
          showError={showError}
          inputKey="destination"
          mt={0.5}
          // options={dummyOptions.map(obj=>({label: obj.name.toLocaleUpperCase(), value: obj._id}))}
          config={{
            required: true,
            label: "Expense Type",
            placeholder: "Select Type",
            maxChar: 250,
          }}
        />

        <SelectWithSearch
          initial={""}
          input={input}
          showError={showError}
          inputKey="destination"
          mt={0.5}
          // options={dummyOptions.map(obj=>({label: obj.name.toLocaleUpperCase(), value: obj._id}))}
          config={{
            required: true,
            label: "Vehicle",
            placeholder: "Select Vehicle",
            maxChar: 250,
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
  );
}

export default ExpensesForm;
