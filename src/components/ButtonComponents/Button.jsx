import React from 'react';
import MediumButton from './MediumButton';
import LargeButton from './LargeButton';
import SmallButton from './SmallButton';


function Button({size="medium", config}) {
    
    switch(size){
        case("large"):
            return <LargeButton config={config}/>
        case("small"):
            return <SmallButton config={config}/>
        default:
            return <MediumButton config={config}/>
    }
}

export default Button