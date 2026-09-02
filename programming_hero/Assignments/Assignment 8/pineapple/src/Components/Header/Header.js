import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png'

const Navigation = () => {
    return (
        <nav className='flex justify-evenly items-center'>
            <Link to="/"><img src={Logo} className='h-12' alt="Logo" /></Link>
            <ul className='flex justify-evenly w-1/3 py-10 text-2xl'>

                {/* Route Match */}

                <li><a href="/">Home</a></li>
                <li><a href="/reviews">Reviews</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/blogs">Blogs</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;