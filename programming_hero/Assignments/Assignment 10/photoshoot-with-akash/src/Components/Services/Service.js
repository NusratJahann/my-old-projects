import React from 'react';
import potrait from "./img/potrait.jpg"
import product from './img/product.jpg'
import wedding from './img/wedding.jpg'

const Service = () => {
    return (
        <div className='flex justify-evenly flex-wrap md:flex-nowrap m-7 '>
            <div className='border-2 m-4 p-2 w-96 '>
                <img style={{width: "450px", height: "300px", objectFit: "cover"}} src={potrait} alt="" srcset="" />
                <p className=' text-center font-bold text-4xl'>Potrait</p>
                <br />
                <p className=' text-4xl text-center'> 2$/ <span style={{fontSize: "20px"}}>pic</span>  </p>
                
                <p className='break-normal'>I can do professional photography for your personal photo. I can do any type of photography for official use or for casual photoshot.</p>
                
                <div className=' bg-slate-200'>
                    <button className=' w-full text-xl border-2 border-black hover:bg-slate-900 hover:text-white px-8 py-3'>Select</button>
                </div>
            </div>
            <div className='border-2 m-4 p-2 w-96'>
                <img  style={{width: "450px", height: "300px", objectFit: "cover"}} src={product} alt="" srcset="" />
                <p className=' text-center font-bold text-4xl'>Product</p>
                <br />
                <p className=' text-4xl text-center'> 5$/ <span style={{fontSize: "20px"}}>pic</span>  </p>
                
                <p className='break-normal'>Now a days online business is the most profitable than any other time. For a good online business you need a clear cut photo of your product and there is the why I can do this for you</p>
                
                <div className=' bg-slate-200'>
                    <button className=' w-full text-xl border-2 border-black hover:bg-slate-900 hover:text-white px-8 py-3'>Select</button>
                </div>
            </div>
            <div className='border-2 m-4 p-2 w-96'>
                <img style={{width: "450px", height: "300px", objectFit: "cover"}} src={wedding} alt="" srcset="" />
                <p className=' text-center font-bold text-4xl'>Wedding</p>
                <br />
                <p className=' text-4xl text-center'> 8$/ <span style={{fontSize: "20px"}}>pic</span>  </p>
                
                <p className='break-normal'>Wedding is a memorable event of a your life. Make this moment more memorable with some beautiful shoot with me.</p>
                
                <div className=' bg-slate-200'>
                    <button className=' w-full text-xl border-2 border-black hover:bg-slate-900 hover:text-white px-8 py-3'>Select</button>
                </div>
            </div>
        </div>
    );
};

export default Service;