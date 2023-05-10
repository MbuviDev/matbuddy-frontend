import React from 'react'

function Table({children}) {
  
  
  return (
    <div className='px-8 pt-5 pb-12 bg-gray-200 bg-opacity-80 shadow-xl shadow-slate-400 rounded-2xl my-6'>
        {children}
    </div>
  )
}

export default Table