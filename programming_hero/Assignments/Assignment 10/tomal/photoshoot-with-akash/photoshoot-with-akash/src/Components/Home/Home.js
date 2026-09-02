import React from 'react';
import useImges from '../../hooks/useImges';
import Service from '../Services/Service';
import img from "./utilities/slider_img/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera with white bg.jpg"

const Home = () => {
    // Getting data
    const {Imges, setImges} = useImges();

    return (
        <div>
            {/* <Navigation></Navigation> */}
            <div className=" bg-slate-100 flex justify-evenly items-center flex-wrap">
                <div><p className='text-5xl px-9 py-12'>Nuruzzaman <br /> Akash</p></div>
                <img className='sm:w-6/12' src={img} alt="" />
            </div>

            <Service></Service>

            {/* {
                Imges.map(image => {
                    // <div className='w-4/12 bg-slate-100 my-2 p-5 rounded-lg'>
                    //     <p className='rounded-lg block bg-white p-5 mb-3'></p>
                    //     <img src={image.img}/>
                    //     <p className='block font-semibold'></p>
                    // </div>
                })
            } */}

        </div>
    );
};

export default Home;