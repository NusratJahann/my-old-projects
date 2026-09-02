import React from 'react';
import none from './404.jpg'

const Notfound = () => {
    return (
        <div className='m-12 my-40 flex items-center flex-col'>
            <img className='w-4/12' src={none} alt="" />   
            <h1>Page not found</h1>       
        </div>
    );
};

export default Notfound;