import React from "react";
import { useRef, useState } from "react";
import ExpensesForm from "./Components/ExpensesForm";
import Submitbutton from "../../components/ButtonComponents/SubmitButton/Submitbutton";


function Expenses() {
  const [showError] = useState(0);
  const input = useRef({ form: {}, err: {} });

  function handleSub(e){
    e.preventDefault();
    console.log(input.current.form)
  }

 
  return (
       
       <div>
        <h1 className="text-3xl p-2 m-2 font-serif">Expense Tracker</h1>
        <div className="p-8">
            <div onSubmit={handleSub} className="bg-amber-400 rounded-3xl">
                <h1 className="p-4 text-2xl">New Expense Log</h1>
                <ExpensesForm input={input} showError={showError}/>
                <Submitbutton />
            </div>
        </div>
       </div>

  );
}

export default Expenses;
