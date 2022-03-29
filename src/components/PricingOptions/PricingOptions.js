import React from 'react';

const PricingOptions = (props) => {
    const {name, price} = props.pricingOption
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name} </h2>
            <p>
            <span className='text-5xl font-bold'>{price}</span>
            <span className='text-xl font-bold text-gray-500'>/m</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits:</h3>
            </div>
        </div>
    );
};

export default PricingOptions;