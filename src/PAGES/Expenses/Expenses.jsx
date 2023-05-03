// import React, { useRef, useState } from "react";

function ExpensesForm(){
    const optionList = ["Fuel", "Parking Fees", "Garage Payment", "Police Officer Stop"];
    const vehicleList = ["KAY 567C", "KAU 128F", "KDD 231C", "KDA 980P"];
    // className="form-input w-full block border rounded-lg text-black"

    return (
    <div className="p-2 m-2 flex flex-col gap-4 ">
        <h2> New Expense Log </h2>
        <form className="grid p-2 gap-4 h-full bg-white border rounded-lg shadow-xl">
            <label className="block text-left align-middle gap-6 w-full p-2">
                Expense Type :
                <select 
                    className="w-full block form-input bg-slate-100 border-none focus:border-green-500 rounded" 
                >
                    <option value="">
                        -- select an expense type --
                    </option>
                    {
                        optionList.map((option) => {
                            return (
                                <option
                                    key={optionList.indexOf(option) + 1}
                                    value={option}
                                    className=""
                                    >
                                    {option}
                                </option>
                        )
                    })}
                </select>
            </label>

            <label className="block text-left align-middle gap-6 w-full p-2">
                Vehicle :
                <select className="form-input bg-slate-100">
                    <option value="">
                        -- select your vehicle --
                    </option>
                    {
                        vehicleList.map((vehicle) => {
                            return (
                                <option
                                    key={vehicleList.indexOf(vehicle) + 1}
                                    value={vehicle}
                                    className="bg-transparent p-2"
                                    >
                                        {vehicle}
                                    </option>
                            )
                        })
                    }
                </select>
            </label>

            <label className="block text-left align-middle gap-6 w-full p-2">
                Amount Spent (Ksh) :
                <input type="number" min={0} max={25000}/>
            </label>

            <input 
                type="submit" 
                text="Create Expense"
            />
       </form>
    </div>
    )
}


function Expenses () {
   return (
    <section className="p-2 font-mono text-left bg-slate-200 h-screen">
        <h1 className="text-4xl p-2">Expense Tracker</h1>
        <ExpensesForm />
    </section>
   )
}

export default Expenses;