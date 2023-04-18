import React, { useState } from "react";

function Loading() {

    const [vehicle, setVehicle] = useState("")

    return(
        <div>
            <h1> New Trip</h1>

            <label>Vehicle</label>
            <input 
            class=""
            type="text"
            placeholder="Select vehicle (363)"
            value={vehicle}
            onChange={(e => setVehicle(e.target.value))}
            />



        </div>
    )
}

export default Loading