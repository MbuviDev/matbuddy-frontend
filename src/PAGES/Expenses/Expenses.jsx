// import React, { useRef, useState } from "react";

import ExpensesForm from "./Components/ExpenseForm";

// Exported element is expenses , nested within can be all components for the page

function Expenses () {
   return (
    <section className="p-2 font-mono text-left bg-slate-300 h-screen">
        <h1 className="text-4xl p-2 m-2 font-bold">Expense Tracker</h1>
        <ExpensesForm />
    </section>
   )
}

export default Expenses;