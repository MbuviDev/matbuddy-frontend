import React from 'react'

import barGraph from './Asssets/barGraph.png';
import dollarSign from './Asssets/dollarSign.png';
import parcel from './Asssets/parcel.png';
import user from './Asssets/user.png';
import users from './Asssets/users.png';


function DashboardDataComponent({
    image,
    heading = "Title Here",
    details = "KSH6,800,000",
    percentage = "16%",
    percentageTitle = "Higher",
    percentageColor = "red"
}) {

    switch (image) {
        case ("dollarSign"):
            image = dollarSign;
            break;

        case ("parcel"):
            image = parcel;
            break;

        case ("user"):
            image = user;
            break;

        case ("users"):
            image = users;
            break;

        default:
            image = barGraph;
            break;
    }
    return (
        <div className={`bg-white rounded-lg w-350 h-205 p-8 m-8 flex-grow`}>
            <h3 className='mt-46 ml-31 font-medium text-xl leading-125 text-gray-900 font-inter tracking-wider'>
                {heading}
            </h3>
            <div className="flex">
                <div className="w-4/5">
                    <h2 className="font-inter font-medium  text-2xl leading-relaxed tracking-wider">{details}</h2>
                    <div className='flex'>
                        <div className='max-w-max px-2 rounded-full text-white' style={{backgroundColor: percentageColor}}>{percentage}</div>
                        <p className='ml-3'>{percentageTitle}</p>
                    </div>
                </div>

                <div className='w-1/5 grid place-items-center mr-8'>
                    <div className='bg-gray-300 rounded-full'>
                        <img src={image} className='m-4 w-22' alt={"image-" + image}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardDataComponent