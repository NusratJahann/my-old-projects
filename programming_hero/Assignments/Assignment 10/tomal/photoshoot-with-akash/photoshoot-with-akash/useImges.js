import React, { useEffect, useState } from 'react';

const useImges = () => {
    const [Imges,setImges] = useState([]);
  
    // Fetching data
    useEffect(()=>{
        fetch("../Components/FakeDB/fakeDB.json")  
        .then(res => res.json())
        .then(data=> setImges(data));
    },[]);

    //Data export
    return [Imges,setImges];
};

export default useImges;