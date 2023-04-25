import React,{ useRef, useState } from 'react'
import TextInput from '../../../../components/InputComponents/textInput';

function NewParcel() {
    const [showError, setShowError] = useState(0);
    const input = useRef({ form: {}, err: {} });

    function handleSub(e){
      e.preventDefault();
      console.log(input)
    }
    
  return (
    <>
        <form onClick={handleSub} className='mx-8'>
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

      </>
  )
}

export default NewParcel