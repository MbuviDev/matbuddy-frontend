import React, { useRef, useState } from "react";
import LoadingInputs from "./Inputs/LoadingInputs";


function Loading () {
    const [showError, setShowError] = useState(0);
    const input = useRef({ form: {}, err: {} });

    function handleSubmit (e) {
        e.preventDefault()
    }

    return (
        <div className="bg-gray-300 h-screen ">
            <h1>Passenger Ticketing  </h1>
            <div class="p-8">
           <form onSubmit={handleSubmit}>
           <div className="bg-white">
            <h1>New Trip</h1>
            <LoadingInputs  input={input} showError={showError} />
            <button type="submit" class="mt-8 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">Submit</button>
           </div>
                
           </form> 
           </div>
        </div>
    )
}

export default Loading;