import React from "react";

const Navbar = () => {
  return (
    <div className="pl-24 pr-24 navbar fixed bg-base-100">
      <div className=" ml-24 flex-1">
        <p className="ml-8  normal-case text-xl ">daisyUI</p>
      </div>
      <div className="flex-none mr-20">
        <div className="dropdown dropdown-end"></div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar w-14  ">
            <div className="rounded-full">
              <img src="https://placeimg.com/80/80/people" alt=""/>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-0 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="" >Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
