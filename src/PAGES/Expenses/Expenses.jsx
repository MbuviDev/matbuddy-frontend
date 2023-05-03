// import React, { useRef, useState } from "react";

function ExpensesForm(){
    // Mock data for vehicles & expenses
    const optionList = ["Fuel", "Parking Fees", "Garage Payment", "Police Officer Stop"];
    const vehicleList = ["KAY 567C", "KAU 128F", "KDD 231C", "KDA 980P"];

    // className="form-input w-full block border rounded-lg text-black"

    return (
    <div className="p-2 m-4 flex flex-col gap-4 bg-white border rounded-md shadow-2xl shadow-slate-600 font-semibold">
        <h2 className="text-2xl m-2 p-2"> New Expense Log </h2>
        <form
            className="grid grid-cols-2 p-2 gap-4 h-full w-full
            align-middle items-center justify-center">
            <label className="block text-left align-middle w-full p-2">
                Expense Type :
                <select
                    className
                    ="form-select w-full block bg-slate-100 border-transparent rounded-lg
                    focus:bg-transparent focus:shadow-lg appearance-none tracking-wide leading-loose mt-2
                    "
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
                                        className="hover:animate-pulse"
                                        >
                                        {option}
                                    </option>
                            )
                        })}
                </select>
            </label>

            <label className="block text-left align-middle gap-6 w-full p-2">
                Vehicle :
                <select
                    className
                    ="form-select w-full block bg-slate-100 border-transparent rounded-lg
                    focus:bg-transparent focus:shadow-lg appearance-none tracking-wide leading-loose mt-2
                    "
                    >
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
                <input
                    type="number"
                    min={0} max={25000}
                    className
                    ="form-input block bg-slate-100 rounded-lg border-transparent w-full
                    tracking-wide leading-loose focus:bg-transparent focus:border-blue-200 
                    appearance-none mt-2"
                    />
            </label>

            <label className="block text-left align-middle gap-6 w-full p-2">
                Description :
               <input
                type="text"
                placeholder="Enter a short description"
                className
                ="form-input block bg-slate-100 rounded-lg border-transparent w-full
                tracking-wide leading-loose focus:bg-transparent focus:border-blue-200 
                appearance-none mt-2"
                />
            </label>

            <input
                type="submit"
                className
                ="form-input border-transparent w-1/4 bg-blue-500 w-content rounded text-slate-50
                 hover:bg-green-500 hover:text-black tracking-wide leading-loose mt-2"
                />


       </form>
    </div>
    )
}

// Exported element is expenses , nested within can be all components for the page

function Expenses () {
   return (
    <section className="p-2 font-mono text-left bg-slate-300 h-screen">
        <h1 className="text-4xl p-2 underline">Expense Tracker</h1>
        <ExpensesForm />
    </section>
   )
}

export default Expenses;