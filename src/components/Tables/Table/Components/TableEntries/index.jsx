import React from 'react'

function TableSelect({
    input,
    setInput=()=>{},
}) {
    
    const items = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 15, value: 15 },
        { label: 20, value: 20 },
        { label: 25, value: 25 },
    ]

    function handleChange(txt) {
        setInput(txt);
    }

  return (
    <div className='w-max text-base'>
        Show
    <select
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className={
        "border-2 rounded-lg py-2 px-2 mx-1 placeholder-gray-700"
        }
    >
        {items.map((item, index) => (
        <option
            key={index}
            onChange={(e) => handleChange(e.target.value)}
            value={item.value}
        >
            {item.label}
        </option>
        ))}
    </select>
    entries
    </div>
  )
}

export default TableSelect