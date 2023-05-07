import React from 'react'

function TableSearch({placeholder="Search...", setInput}) {
    function onChange(value){
        setInput(value)
    }
    
  return (
    <div className='overflow-hidden flex bg-white rounded-full md:w-[334px] p-2 px-3 focus:shadow-xl'>
        <img src='/TableActions/search.png' alt='' className='w-1/12 p-1'/>
        <hr className='ml-1 opacity-60 border-[1px] h-6 rounded-full border-black'/>
        <input 
        className='overflow-ellipsis outline-none px-2 text-gray-700' 
        type='text' 
        placeholder={placeholder} 
        onChange={(e)=>onChange(e.target.value)}/>
    </div>
  )
}

export default TableSearch