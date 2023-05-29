import React from "react";
import { useRef, useState } from "react";
import ExpensesForm from "./Components/ExpensesForm";



// Exported element is expenses , nested within can be all components for the page

function Expenses() {
 
  return (
       
       <div>
        <h1 className="text-3xl p-2 m-2 font-serif">Expense Tracker</h1>
        <div className="p-8">
            <div  className="bg-amber-400 rounded-3xl">
                <h1>New Expense Log</h1>
                {/* <ExpensesForm/> */}
            </div>
        </div>
       </div>
    // <div className="p-2 font-mono text-left bg-slate-300 min-h-screen" >
    //     <div className="p-2 m-2">
    //         <h1 className="text-4xl p-2 m-2 font-serif">Expense Tracker</h1>
    //         <div onSubmit={handleSub} className="grid gap-y-8 ">
    //             <ExpensesForm  input={input} showError={showError}/>
    //             {/* <ExpensesBreakdown /> */}
    //         </div>
    //     </div>
    // </div>
  );
}

export default Expenses;
