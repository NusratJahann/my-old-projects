import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
                    <footer className='bg-dark pt-12 pb-3 text-white flex items-center flex-col w-full'>
            <div className='flex flex-wrap xl:justify-evenly justify-start list-none w-6/12'>
            <div className='p-5'>
                <p className='text-3xl mb-2 font-mono text-white'>Photography with Akash</p>
                <li className='hover:underline hover:cursor-pointer'>Level-4, 34, Awal Centre, Banani, Dhaka</li>
                <li className='hover:underline hover:cursor-pointer'>Call: 0123456789</li>
            </div>
            <div className='p-5'>
                <p className='text-2xl mb-2 font-mono text-white'>Contact</p>
                <li className='hover:underline hover:cursor-pointer'>Facebook</li>
                <li className='hover:underline hover:cursor-pointer'>Instagram</li>
                <li className='hover:underline hover:cursor-pointer'>Pinterest</li>
            </div>
            <div className='p-5'>
                <li className='hover:underline hover:cursor-pointer'><Link to="/" className=' text-white text-decoration-none'>Home</Link></li>
                <li className='hover:underline hover:cursor-pointer'>About Me</li>
                <li className='hover:underline hover:cursor-pointer'>Donate Me</li>
            </div>
            </div>
            <p className='mt-10'>©Copyright <a target="_blank" href="https://www.programming-hero.com/" className='underline text-white'>programming-hero.com</a> 2022</p>
        </footer>
    );
};

export default Footer;