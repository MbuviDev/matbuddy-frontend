import React, { useRef, useState } from "react";
import ExpensesInputs from "./Inputs/ExpensesInputs";


function Expenses () {
    const [showError, setShowError] = useState(0);
    const input = useRef({ form: {}, err: {} });

    function handleSubmit (e) {
        e.preventDefault()
    }

    return (
        <div className="bg-gray-300 h-screen">
            <h1>Expense Tracker  </h1>
            <div className="p-8 ">
           <form onSubmit={handleSubmit} >
           <div className="rounded-lg bg-white">
            <h1 className="p-4">New Expense Log</h1>
            <ExpensesInputs  input={input} showError={showError} />
            <button type="submit" class="grid justify-items-end mb-6 mt-6 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 ">Submit</button>
           </div>
           
                
           </form> 
           <div className="bg-white p-4">
            <h1> Expenses Breakdown</h1>
            <p>Petrol</p>
            <p>Diesel</p>
           </div>
           </div>
        </div>
    )
}

export default Expenses;