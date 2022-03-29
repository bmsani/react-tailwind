import React from 'react';
import Links from '../Links/Links';

const Navbar = () => {
    const routes = [
        {id:1, name:'Home', link:'/home'},
        {id:2, name:'Shop', link:'/shop'},
        {id:3, name:'Deals', link:'/deals'},
        {id:4, name:'Coupons', link:'/coupons'},
        {id:5, name:'Contact', link:'/contact'},
    ]
    return (
        <nav>
            <ul className='md:flex justify-center'>
                {
                    routes.map(route => <Links route={route} key={route.id}></Links>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;