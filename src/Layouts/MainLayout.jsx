import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
         <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='max-w-6xl mx-auto p-4 md:p-8 flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
    );
};

export default MainLayout;