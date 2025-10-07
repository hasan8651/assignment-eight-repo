import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
         <div className='flex flex-col s'>
      <Navbar />
      <div className='max-w-7xl mx-auto w-full p-4 flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
    );
};

export default MainLayout;