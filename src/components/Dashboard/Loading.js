import React, { useState } from "react";

function Loading () {
    const [vehicle,setVehicle] = useState("")
    const [origin,setOrigin] = useState("")

    function handleSubmit (e) {
        e.preventDefault()

    }

    return (
        <div class="justify-center bg-white rounded-md p-16">
            <h1>New Trip</h1>
            <form onSubmit={handleSubmit}>
                <label> Vehicle </label>
                    <input 
                    class="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
                    type="text"
                    placeholder="select vehicle"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    />
                
                <label> Origin </label>
                    <input 
                    class="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
                    type="text"
                    placeholder="select origin"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    />

                <label> Destination </label>
                    <input 
                    class="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
                    type="text"
                    placeholder="select destination"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    />
            
                <label> Passanger Fare Amount  </label>
                    <input 
                    class="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
                    type="text"
                    placeholder="Enter Passenger Fare Amount"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    />
               

            </form>


        </div>
    )
}

export default Loading