import React from "react";
import { useRef, useState } from "react";
import ExpensesForm from "./Components/ExpensesForm";
import Submitbutton from "../../components/ButtonComponents/SubmitButton/Submitbutton";
import Page from "../../components/Page";


function Expenses() {
  const [showError] = useState(0);
  const input = useRef({ form: {}, err: {} });

  function handleSub(e){
    e.preventDefault();
    console.log(input.current.form)
  }

 
  return (
       
       <Page >
        <div className="h-screen ">
        <h1 className="text-3xl p-2 m-2 font-serif">Expense Tracker</h1>
        <div className="p-8">
            <div onSubmit={handleSub} className="bg-white rounded-3xl">
                <h1 className="p-4 text-2xl">New Expense Log</h1>
                <ExpensesForm input={input} showError={showError}/>
                <Submitbutton className="flex justify-end"/>
            </div>
        </div>
        </div>
       </Page>

  );
}

export default Expenses;
