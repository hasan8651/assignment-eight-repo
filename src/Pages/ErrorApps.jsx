import React from 'react';
import errorAppImg from '../assets/App-Error.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorApps = () => {
    return (
      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 ">
    <img
      src={errorAppImg}
      alt="No apps"
      className="w-64 md:w-80 my-4"
    />

    <h1 className="text-4xl font-extrabold text-[#001931] mb-2">OPPS!! APP NOT FOUND</h1>
    <p className="text-[#627382] mb-6">The App you are requesting is not found on our system.  please try another apps</p>

    <a
      href="/"
      className="btn inline-block px-8 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-purple-600 text-white font-medium rounded-md transition-colors cursor-pointer"
    >
      Go Back!
    </a>
  

        </div>
    );
};

export default ErrorApps;