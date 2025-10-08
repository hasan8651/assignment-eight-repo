import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../assets/logo.png'

const Navbar = () => {
    return (
     <div className="navbar max-w-7xl px-4 mx-auto shadow-2xs">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-md dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <NavLink to="/" className='hover:bg-[#632EE3] hover:text-white' >
          Home
        </NavLink>
        </li>
        <li>
          <NavLink to="/applications" className='hover:bg-[#632EE3] hover:text-white' >
          Apps
        </NavLink>
        </li>
        <li>
          <NavLink to="/installed" className='hover:bg-[#632EE3] hover:text-white'>
         Installation
        </NavLink>
        </li>
      </ul>
    </div>
    <Link className="flex justify-center items-center text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" to='/'>
    <img className='w-8 h-8' src={logoImg} alt="logo" />
    HERO.IO
    </Link>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li>
        <NavLink to="/" className={({isActive}) => isActive ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline decoration-[#632EE3]" : "text-[#001931]"}>
          Home
        </NavLink>
      </li>
        <li>
             <NavLink to="/applications" className={({isActive}) => isActive ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline decoration-[#632EE3]" : "text-[#001931]"}>
          Apps
        </NavLink>
        </li>
        <li>
            <NavLink to="/installed" className={({isActive}) => isActive ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline decoration-[#632EE3]" : "text-[#001931]"}>
         Installation
        </NavLink>
        </li>
    </ul>
  </div>
  <div className="navbar-end">




    <a href='https://github.com/hasan8651' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md">
    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="invert">
    <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
</svg>
    Contribute</a>
  </div>
</div>
    );
};

export default Navbar;