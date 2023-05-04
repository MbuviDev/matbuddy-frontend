import { useState, useEffect } from "react";

// Mock costs
const exampleCosts = [
	{
		id : 1,
		name : "Petrol",
		price : 45000
	},

	{
		id : 2,
		name : "Diesel",
		price : 56000
	},

	{
		id : 3,
		name : "Garage Fees",
		price : 70000
	}
];

// Infornation to display while loading expenses
function LoadInfo({ hidden }){
	return (
		<div className="p-2 m-2" hidden={hidden}>
			<section className="flex flex-col items-center gap-12 w-full">
					<h1 className="text-2xl font-semibold"> Fetching Your Expenses</h1>
					<i className="fa-solid fa-spinner fa-spin-pulse fa-2xl h-32" style={{"color" : "green" }}></i>
			</section>
		</div>
	)
}

// Element to display when there are no costs
function NoInfo(){
	return (
		<div className="p-2 m-2 text-xl">
			<div className="flex flex-col items-center gap-12 w-full">
				<h1 className="text-2xl"> Expenses Break Down - Total (Ksh) 0.00</h1>
				<i className="fa-solid fa-circle-exclamation fa-xs h-32" style={{"color" : "red" }}></i>
			</div>
		</div>
	)
}


// Element to display when there are costs
function InfoFetched({ breakdown }){
	let totalFigure = 0;

	breakdown.map((i) => totalFigure += i.price); // Calculate the total cost first : It is used in the component

	return (
		<section className="p-2 m-2 flex flex-col">
			<h1 className="text-2xl p-2 m-2">Expenses Breakdown - Total (Ksh) {totalFigure} </h1>
			{
				breakdown.map((i) => {
					const { id, name, price } = i;
					return (
						<div
							key={id}
							className
							="flex w-full items-end justify-between p-2 m-2 border-slate-500
							text-lg drop-shadow-2xl"
						>
							<h4>{name.toUpperCase()}</h4>
							<h5 className
							="font-bold border p-2 rounded-lg bg-blue-600 text-slate-50
							hover:bg-green-500">
								{price}
							</h5>
						</div>
					)
				})
			}
		</section>
	)
}

// Element that is used to display information conditionally
function DisplayInfo({ breakdown }){
	return breakdown.length === 0 ? <NoInfo /> : <InfoFetched breakdown={breakdown}/>
}

function ExpensesBreakdown(){
	const [ breakDown, setBreakDown ] = useState([]); // breakdown data is set in state (here under useEffect)
	const [ hideLoading, setHideLoading ] = useState(false); // loading state that toggles components to be displayed;

	useEffect(() => {
		setTimeout(() => {
			setHideLoading(true);
			setBreakDown(exampleCosts);
		},3000);

	});

	// Real Information
	function RealInfo(){
		return (
			<section className="bg-white p-2 m-4 rounded-md shadow-xl shadow-slate-600 font-semibold">
			<DisplayInfo breakdown={breakDown} />
			</section>
		)
	}

	// Display a loading screen before information is computed
	function LoadScreen(){
		return (
			<section className="bg-white p-2 m-4 rounded-md shadow-xl shadow-slate-600 font-semibold">
				<LoadInfo />
			</section>
		)
	}

	return (
				<div>
					 { hideLoading ? <RealInfo /> : <LoadScreen />  }
				</div>
	)
}

export default ExpensesBreakdown;