function Loadingform () {

    return (
        
            <form className="bg-amber-100 p-8  rounded-lg">
                <h1>New Trip</h1>
                <label> Vehicle </label>
                    <input />
                <label>Origin </label>
                     <input /> 
                <label>Destination </label>   
                    <input />
                <label>Passenger Fare Amount</label>
                    <input />

                <button type="submit" class="mt-8 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700"> Submit</button>    

            </form>
           
    )
}

export default Loadingform;