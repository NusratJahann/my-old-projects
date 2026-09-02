import React from 'react';
import Service from '../Services/Service';
import img from "./utilities/slider_img/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera with white bg.jpg"
import Gallery from '../Gallery/Gallery'
import Pic from '../Gallery/Pic';

const Home = () => {
    return (
        <div>
            <div className=" bg-slate-100 flex justify-evenly items-center flex-wrap">
                <div><p className='text-5xl px-9 py-12'>Nuruzzaman <br /> Akash</p></div>
                <img className='sm:w-6/12' src={img} alt="" />
            </div>
            
            <Service></Service>
            <Gallery></Gallery>
            <Pic></Pic>
        </div>
    );
};

export default Home;