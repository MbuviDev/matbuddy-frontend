import React from 'react'

function TableRow({children}) {
  return (
    <div className=' border-gray-500 border-b-2 py-2'>
      {children}
    </div>
  )
}

export default TableRow