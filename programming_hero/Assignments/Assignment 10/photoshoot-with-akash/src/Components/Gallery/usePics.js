import React, { useEffect, useState } from 'react';

const usePics = () => {
    
    const [imgs,setImgs] = useState([]);


    // Fetching data
    useEffect(()=>{
        fetch("fakeDB.json")  
        .then(res => res.json())
        .then(data=>setImgs(data));
    },[]);
    
    //Data export
    return [imgs,setImgs];

};

export default usePics;