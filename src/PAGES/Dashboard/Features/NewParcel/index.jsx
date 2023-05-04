import React,{ useRef, useState } from 'react'
import SenderInputs from './Inputs/SenderInputs';
import RecipientInputs from './Inputs/RecipientInputs';
import DestinationInputs from './Inputs/DestinationInputs';
import DescriptionInputs from './Inputs/DescriptionInputs';
import Button from '../../../../components/ButtonComponents/Button';

function NewParcel() {
    const [showError] = useState(0);
    const input = useRef({ form: {}, err: {} });

    function handleSub(e){
      e.preventDefault();
      console.log(input.current.form)
    }
    
  return (
    <>
        <form onClick={handleSub} className='my-8 mb-6 bg-white rounded-2xl'>
              <h1 className='p-4 text-xl'>New Parcel</h1>
            <div className='flex flex-wrap'>
            <SenderInputs input={input} showError={showError}/>
            <RecipientInputs input={input} showError={showError}/>
            <DestinationInputs input={input} showError={showError}/>
            <DescriptionInputs input={input} showError={showError}/>
            </div>
            <div className='flex flex-col items-center'>
              <Button size='large'
              config={{
                label:" Button",
                onClickFunction:()=>{}, 
                color:"green"
              }}
              />

            </div>
        </form>

      </>
  )
}

export default NewParcel