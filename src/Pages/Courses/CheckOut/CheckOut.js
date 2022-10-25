import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkOut = useLoaderData();
    const {id, name, image, details, fee, duration, instructor} = checkOut;
    console.log(checkOut)
    return (
        <div className='text-center'>
            <p>{id}</p>
            <p>{name}</p>
            <p>{fee}</p>
        </div>
    );
};

export default CheckOut;