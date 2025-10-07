import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../assets/logo.png'

const Navbar = () => {
    return (
     <div className="navbar max-w-7xl px-4 mx-auto shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Apps</a></li>
        <li><a>Installation</a></li>
      </ul>
    </div>
    <Link className="flex justify-center items-center text-2xl font-bold text-purple-600" to='/'>
    <img className='w-6 h-6' src={logoImg} alt="logo" />
    HERO.IO
    </Link>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink to="/" className={({isActive}) => isActive ? "text-purple-600 underline font-semibold" : "text-black"}>
          Home
        </NavLink>
      </li>
        <li>
             <NavLink to="/applications" className={({isActive}) => isActive ? "text-purple-600 underline font-semibold" : "text-black"}>
          Apps
        </NavLink>
        </li>
        <li>
            <NavLink to="/installed" className={({isActive}) => isActive ? "text-purple-600 underline font-semibold" : "text-black"}>
         Installation
        </NavLink>
        </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/hasan8651' className="btn bg-purple-600 text-white px-4 py-2 rounded-md">Contribute</a>
  </div>
</div>
    );
};

export default Navbar;