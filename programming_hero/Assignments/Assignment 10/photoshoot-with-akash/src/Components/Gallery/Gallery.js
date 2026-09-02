import React, { useEffect, useState } from 'react';
import Pic from './Pic';


const Gallery = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("fakeDB.json")
        .then(res => res.json())
        .then(data => setData(data))
    }, []);

    

    return (
        <div>
           {
               data.map(data => {
                <p>{data}</p>
                // console.log(data)
            })
           }
        </div>
    );
};

export default Gallery;