import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center lg:justify-evenly items-center w-full">
      <Link to="/">
        <p className="font-mone lg:block hidden">
          Photography <br/>
          With Akash
        </p>
      </Link>

      <ul className="flex sm:text-2xl lg:justify-evenly lg:p-8 p-0 justify-center w-4/12 text-xl ">
        <Link to="/">
          <li className="hover:text-slate-200 hover:bg-gray-900 px-2 py-5 lg:py-4 lg:px-8">
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
        <Link to="/login">
          <li className="hover:text-slate-200 hover:bg-gray-900 px-2 py-5 lg:py-4 lg:px-8">
            login
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
