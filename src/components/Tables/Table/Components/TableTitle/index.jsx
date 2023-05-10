import React from 'react'

function TableTitle({title="Table Title"}) {
  return (
    <h1 className='text-xl font-medium my-4 text-gray-600'>{title.toLocaleUpperCase()}</h1>
  )
}

export default TableTitle