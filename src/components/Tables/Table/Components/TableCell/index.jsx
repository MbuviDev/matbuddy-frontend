import React from 'react'

function TableCell({children, w}) {
  return (
    <div style={{ width: `${w}%` }} className='text-ellipsis'>{children}</div>
  )
}

export default TableCell