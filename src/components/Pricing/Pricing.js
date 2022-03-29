import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name: 'Free', price: 0},
        {id:2, name: 'Regular', price: 9.99},
        {id:3, name: 'Priemium', price: 99.99},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-4'>
            <h1 className='text-6xl font-mono'>Best Deals of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem inventore id illum sapiente impedit saepe facere maiores. Eveniet, ullam a.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
            {
                pricingOptions.map(pricingOption => <PricingOptions pricingOption={pricingOption} key={pricingOption.id}></PricingOptions>)
            }
            </div>
        </div>
    );
};

export default Pricing;