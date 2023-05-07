import React, { useRef } from 'react'
import TextInput from '../../InputComponents/textInput'

function Table({children, title}) {
  
  // const input = useRef({ form: {}, err: {} });
  
  return (
    <div className='px-8 pt-5 pb-12 bg-slate-300'>
        <>{children}</>

        <h1 className='text-2xl text-gray-600'>{title}</h1>

        <div className='overflow-hidden flex bg-white rounded-full md:w-[334px] p-2 px-3 focus:shadow-xl'>
          <img src='/TableActions/search.png' alt='' className='w-1/12 p-1'/>
          <hr className='ml-1 opacity-60 border-[1px] h-6 rounded-full border-black'/>
          <input className='overflow-ellipsis outline-none px-2 text-gray-700' type='text'/>
        </div>
          
    </div>
  )
}

export default Table