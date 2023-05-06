// import React, { useRef, useState } from "react";

import ExpensesForm from "./Components/ExpenseForm";
import ExpensesBreakdown from "./Components/BreakDown";

// Exported element is expenses , nested within can be all components for the page

function Expenses () {
   return (
    <section className="p-2 text-left bg-slate-300 min-h-screen">
        <section className="p-2 m-2">
            <h1 className="text-4xl p-2 m-2 font-bold">Expense Tracker</h1>
            <div className="grid gap-y-8">
                <ExpensesForm />
                <ExpensesBreakdown />
            </div>
        </section>
    </section>
   )
}

export default Expenses;