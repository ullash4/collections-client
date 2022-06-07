import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLink = (
    <>
      <li>
        <NavLink to={'/candidateslist'}>Candidates List</NavLink>
      </li>
      <li>
        <NavLink to={'/createcandidate'}>Create Candidate</NavLink>
      </li>
      <li>
        <NavLink to={'/login'}>Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">Collections</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navLink}</ul>
      </div>
    </div>
  );
}

export default Navbar;
