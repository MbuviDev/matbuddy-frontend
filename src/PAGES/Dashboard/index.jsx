import React, { useState, useRef } from 'react'
import DashboardDataComponent from '../../components/DashboardDataComponent'
import TextInput from '../../components/InputComponents/textInput'

function Dashboard() {
  const [showError, setShowError] = useState(0);
  const input = useRef({ form: {}, err: {} });

  function handleSub(e){
    e.preventDefault();
    console.log(input)
  }
  
  return (
    <>
      <div className='flex flex-wrap'>
          <DashboardDataComponent heading="Title Here" percentageColor='#6EFF56'/>
          <DashboardDataComponent heading="Title Here" image="dollarSign" percentageColor='#6EFF56'/>
          <DashboardDataComponent heading="Title Here" percentageColor='#6EFF56'/>
      </div>
      <>
      <form onClick={handleSub} className='grid grid-cols-3 grid-rows-4 gap-4'>
          <TextInput
          initial={""}
          input={input}
          showError={showError}
          inputKey="first_name"
          mt={0.5}
          config={{
            required: true,
            label: "First Name",
            placeholder: "John",
            maxChar: 250,
            minChar: 3,
          }}
          />
          <TextInput
          initial={""}
          input={input}
          showError={showError}
          inputKey="last_name"
          mt={0.5}
          config={{
            required: true,
            label: "Last Name",
            placeholder: "John",
            maxChar: 250,
            minChar: 3,
          }}
          />
        <button className='col-span-3 row-span-1'>Sub Button</button>
      </form>
      <div class="grid grid-cols-3 grid-rows-4 gap-4">
        <div class="">Form field 1</div>
        <div class="">Form field 2</div>
        <div class="">Form field 3</div>
        <div class="">Form field 4</div>
        <div class="">Form field 5</div>
        <div class="">Form field 6</div>
        <div class="">Form field 7</div>
        <div class="">Form field 8</div>
        <div class="">Form field 9</div>
        <div class="">Form field 10</div>
        <div class="">Form field 11</div>
        <div class="">Form field 12</div>
      </div>

      </>
    </>
  )
}

export default Dashboard