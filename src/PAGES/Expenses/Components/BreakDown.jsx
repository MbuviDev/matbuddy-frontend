import { useState, useEffect } from "react";

const exampleCost = [
	{
		id : 1,
		name : "Petrol",
		cost : 45000
	},

	{
		id : 2,
		name : "Petrol",
		cost : 56000
	},

	{
		id : 3,
		name : "Garage Fees",
		cost : 70000
	}
]


function NoInfo(){
	return (
		<div className="p-2 m-2 rounded-lg">
			<section className="flex flex-col items-center gap-12 w-full">
					<h1 className="text-2xl font-semibold"> Fetching Your Expenses</h1>
					<i className="fa-solid fa-spinner fa-spin-pulse fa-2xl h-32" style={{"color" : "green" }}></i>
			</section>
		</div>
	)
}

function InfoFetched(){

}


function ExpensesBreakdown(){
	const [ breakDown, setBreakDown ] = useState([]);
	const [ showLoad, setShowLoad ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setBreakDown([...breakDown,exampleCost]);
		},4000);
	},[breakDown]);

	return (
			<section className="bg-white p-2 m-4 rounded-lg shadow-xl shadow-slate-600">
				<NoInfo />
			</section>
	)
}

export default ExpensesBreakdown;