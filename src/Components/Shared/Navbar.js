import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

function Navbar() {
  const [user] = useAuthState(auth);
  const handleSignOut =()=>{
    signOut(auth)
  }
  const navLink = (
    <>
      <li>
        <NavLink to={'/candidateslist'}>Candidates List</NavLink>
      </li>
      <li>
        <NavLink to={'/createcandidate'}>Create Candidate</NavLink>
      </li>
      {user ? <li><button onClick={handleSignOut} className="btn btn-primary text-white">Sign out</button></li> : <li>
        <NavLink to={'/login'}>Login</NavLink>
      </li>}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {navLink}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">Collections</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-3">{navLink}</ul>
      </div>
    </div>
  );
}

export default Navbar;
