import React, { useState } from "react";
import kinatwa from "./kinatwa.png"


function Login () {
const [number, setNumber] = useState ("")
const [password, setPassword] = useState ("")

    
    return(
        <div class="flex justify-center ">
            
               
                <form class=" mt-12  bg-white rounded-lg sm:w-96 text-center p-8 ">
                <img src={kinatwa} class=" mx-auto" alt=""/>
                {/* <div class="h-2 bg-indigo-400 rounded-t-md"></div> */}
                <h1 class="text-4xl text-black font-serif">LOGIN</h1> <br />
                <h2 class="text-center text-2xl font-thin">Sign in to your account</h2> <br/>
                {/* <div class="px-8 py-6"></div> */}
                <label class="block font-semibold">Phone Number</label>
                <input 
                class="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
                type="number"
                maxLength={"10"}
                placeholder="Phone"
                value={number}
                onChange={(e => setNumber(e.target.value))}
                />
                 <label class="block mt-3 font-semibold">Password</label>
                <input 
                className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e => setPassword(e.target.value))}
                />
                <div class="">
                    <button type="submit" class="mt-8 bg-blue-500 text-white py-2 px-16 rounded-full hover:bg-blue-700">Sign In</button>
                    

                </div>
                
            </form>

           


        </div>
    )
}

export default Login;