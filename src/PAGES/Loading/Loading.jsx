import React,{ useRef, useState } from 'react'
import Loadingform from "./components/Loadingform";
import Submitbutton from '../../components/ButtonComponents/SubmitButton/Submitbutton';
import Page from '../../components/Page';


function Loading () {
    const [showError] = useState(0);
    const input = useRef({ form: {}, err: {} });

    function handleSub(e){
      e.preventDefault();
      console.log(input.current.form)
    }

    
    return (

        <Page>
            <div className= "h-screen">
            <h1 className="text-3xl p-2 font-serif">Passenger Ticketing</h1>
            <div className="p-8 ">
            <div onSubmit={handleSub} className="p-8 bg-white rounded-3xl">
            <h1 className="text-2xl font-serif ">New Trip</h1>
            <Loadingform input={input} showError={showError} className=" px-24 py-12"/>
            <Submitbutton />
            </div>
            </div>

            </div>
                      

        </ Page>
    )
}

export default Loading