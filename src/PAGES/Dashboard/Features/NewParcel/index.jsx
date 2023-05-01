import React,{ useRef, useState } from 'react'
import SenderInputs from './Inputs/SenderInputs';
import RecipientInputs from './Inputs/RecipientInputs';
import DestinationInputs from './Inputs/DestinationInputs';
import DescriptionInputs from './Inputs/DescriptionInputs';

function NewParcel() {
    const [showError, setShowError] = useState(0);
    const input = useRef({ form: {}, err: {} });

    function handleSub(e){
      e.preventDefault();
      console.log(input.current.form)
    }
    
  return (
    <>
        <form onClick={handleSub} className='mx-8 mb-6 bg-white rounded-2xl'>
              <h1 className='p-4 text-xl'>New Parcel</h1>
            <div className='flex flex-wrap'>
            <SenderInputs input={input} showError={showError}/>
            <RecipientInputs input={input} showError={showError}/>
            <DestinationInputs input={input} showError={showError}/>
            <DescriptionInputs input={input} showError={showError}/>
            </div>
          <button className='block mx-auto'>Sub Button</button>
        </form>

      </>
  )
}

export default NewParcel