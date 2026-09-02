import React from 'react';

const Countries = () => {

    const countries = ()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    return (
        <div>
            
        </div>
    );
};

export default Countries;