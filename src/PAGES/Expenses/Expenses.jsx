import { useRef, useState } from "react";
import ExpensesForm from "./Components/ExpenseForm";
// import ExpensesBreakdown from "./Components/BreakDown";
// import ExpensesInputs from "./Inputs/ExpensesInputs";

// Exported element is expenses , nested within can be all components for the page

function Expenses () {

    const [showError] = useState[0]
    const input = useRef({ form: {}, err: {} });

    function handleSub(e){
      e.preventDefault();
      console.log(input.current.form)
    }

     
    
   return (
    <div className="p-2 font-mono text-left bg-slate-300 min-h-screen" >
        <div className="p-2 m-2">
            <h1 className="text-4xl p-2 m-2 font-serif">Expense Tracker</h1>
            <div onSubmit={handleSub} className="grid gap-y-8 ">
                <ExpensesForm  input={input} showError={showError}/>
                {/* <ExpensesBreakdown /> */}
            </div>
        </div>
    </div>
   )
}

export default Expenses;