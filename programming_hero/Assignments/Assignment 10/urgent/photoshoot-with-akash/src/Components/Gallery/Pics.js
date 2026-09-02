import React from 'react';
import Pic from './Pic';
import usePics from './usePics';

const Pics = () => {

    const [imgs,setImgs] = usePics();
    
    console.log(imgs)
    return (
        // <div>{
            
        //     imgs.map(img=><Pic
        //         img={img.img}
        //         key={img.img.id}
        //     ></Pic>)
        // }   
        // </div>
    );
};

export default Pics;