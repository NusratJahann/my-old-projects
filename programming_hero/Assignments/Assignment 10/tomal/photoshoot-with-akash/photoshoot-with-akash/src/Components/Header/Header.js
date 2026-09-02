import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import './Header.css'
const Header = () => {
  const {user,logout}=useFirebase()
  return (
    <div className="flex justify-center lg:justify-evenly items-center w-full">
      <Link to="/">
        <p className="font-mone" style={{display: "none"}}>
          Photography <br/>
          With Akash
        </p>
      </Link>

      <ul className="flex sm:text-2xl lg:justify-evenly lg:p-8 p-0 justify-center w-4/12 text-xl values">
        <Link to="/">
          <li className="values hover:text-slate-200 hover:bg-gray-900 px-2 py-5 lg:py-4 lg:px-8 ">
            Home
          </li>
        </Link>
        <Link to="/gallery">
          <li className="hover:text-slate-200 hover:bg-gray-900 px-2 py-5 lg:py-4 lg:px-8">
            Gallery
          </li>
        </Link>
        <Link to="/contact">
          <li className="hover:text-slate-200 hover:bg-gray-900 px-2 py-5 lg:py-4 lg:px-8">
            Contact
          </li>
        </Link>
        <Link to="/blog">
          <li className="hover:text-slate-200 hover:bg-gray-900 px-2 py-5 lg:py-4 lg:px-8">
            Blog
          </li>
        </Link>
        <Link to="/about">
          <li className="hover:text-slate-200 hover:bg-gray-900 px-2 py-5 lg:py-4 lg:px-8">
            About
          </li>
        </Link>
       
        <li className="hover:text-slate-200 hover:bg-gray-900 px-2 py-5 lg:py-4 lg:px-8">

        {
                     user.email?<button className="log" onClick={logout}>Logout</button>:
                     <Link className="nav" to="/log">Login</Link>
                   }
          </li>
        
      </ul>
    </div>
  );
};

export default Header;
