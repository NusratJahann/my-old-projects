import React, {useEffect, useState } from 'react';
import ServiceData from '../Data/ServiceData';
import potrait from "./img/potrait.jpg"
import product from './img/product.jpg'
import wedding from './img/wedding.jpg'

const Service = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='flex justify-evenly flex-wrap md:flex-nowrap m-7 '>
        {/* start  */}
            <div className="container">

<div className="row">
    {
        service.map(services => <ServiceData
            services={services}>

        </ServiceData>)
    }
</div>

</div>
            {/* end  */}
        </div>
    );
};

export default Service;