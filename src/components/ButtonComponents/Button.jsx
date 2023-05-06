import React from 'react';
import MediumButton from './MediumButton';
import LargeButton from './LargeButton';
import SmallButton from './SmallButton';


function Button({size="medium"}) {
    
    switch(size){
        case("large"):
            return <LargeButton/>
        case("small"):
            return <SmallButton/>
        default:
            return <MediumButton/>
    }
}

export default Button