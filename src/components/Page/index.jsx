import React from 'react'

function Page({children}) {
  return (
    <div className='bg-gray-300 px-2 md:px-8 py-8'>
        {children}
    </div>
  )
}

export default Page