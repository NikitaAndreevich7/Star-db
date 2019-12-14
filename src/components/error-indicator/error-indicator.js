import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () =>{

    return(
        <div className='error-indicator'>
            <img
                src='https://image.flaticon.com/icons/png/512/675/675564.png'
                alt='error-img'
                className='error-img' />

            <h2 className='error-text'>Oops... Error</h2>
            <span className='error-details'>Our drones flew out to help</span>
        </div>
    )
}

export default ErrorIndicator;