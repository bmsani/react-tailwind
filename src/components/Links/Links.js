import React from 'react';

const Links = (props) => {
    const {name, link} = props.route
    return (
        <li className='mr-10'>
        <a href={link}>{name}</a>
        </li>
    );
};

export default Links;