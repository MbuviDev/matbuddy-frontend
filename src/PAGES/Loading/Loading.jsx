import React, { useRef, useState } from "react";
import LoadingInputs from "./Inputs/LoadingInputs";
import Table from "../../components/Tables/Tables";



function Loading () {
    const [showError, setShowError] = useState(0);
    const input = useRef({ form: {}, err: {} });

    function handleSubmit (e) {
        e.preventDefault()
    }

    return (
        <div className="bg-gray-300 h-screen ">
            <h1 class="text-2xl p-6">Passenger Ticketing  </h1>
            <div class="p-6">
             
           <form onSubmit={handleSubmit}>
           <div className="bg-white rounded-lg  ">
            <h1 class="p-4 text-xl">New Trip</h1>
            <LoadingInputs  input={input} showError={showError} className="content-center" />
            <button type="submit" class=" m-6 mt-8 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">Submit</button>
           </div>
                
            <Table />
           </form> 
           </div>
        </div>
    )
}

export default Loading;