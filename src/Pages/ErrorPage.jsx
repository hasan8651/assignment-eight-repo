import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import errorPageImg from '../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='w-full mx-auto flex-1'>
       <div className="flex-grow flex flex-col items-center justify-center text-center px-6 ">
    <img
      src={errorPageImg}
      alt="404 page"
      className="w-64 md:w-80 my-4"
    />

    <h1 className="text-4xl font-extrabold text-[#001931] mb-2">Oops, page not found!</h1>
    <p className="text-[#627382] mb-6">The page you are looking for is not available.</p>

    <a
      href="/"
      className="btn inline-block px-8 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-purple-800 text-white font-medium rounded-md transition-colors cursor-pointer"
    >
      Go Back!
    </a>
  

        </div>
      </div>
      <Footer />
    </div>
    );
};

export default ErrorPage;