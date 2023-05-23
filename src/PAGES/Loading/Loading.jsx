import React,{ useRef, useState } from 'react'
import Loadingform from "./components/Loadingform";
import Submitbutton from '../../components/ButtonComponents/SubmitButton/Submitbutton';


function Loading () {
    const [showError] = useState(0);
    const input = useRef({ form: {}, err: {} });

    function handleSub(e){
      e.preventDefault();
      console.log(input.current.form)
    }

    
    return (

        <div className="">
            <h1 className="text-2xl p-8">Passenger Ticketing</h1>
            <div className="p-12 ">
            <div onSubmit={handleSub} className="p-8 bg-amber-400 rounded-3xl ">
            <h1 className="text-2xl font-serif">New Trip</h1>
            <Loadingform input={input} showError={showError} className=""/>
            <Submitbutton />
            </div>
            </div>
                      

        </div>
    )
}

export default Loading