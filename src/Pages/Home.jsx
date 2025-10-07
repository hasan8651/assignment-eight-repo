import React from 'react';
import { Link } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner';
import ApplicationCard from '../Components/ApplicationCard';
import useApplications from '../Hooks/useApplications';

const Home = () => {

const { loading, error, applications } = useApplications()

  const trendingApplications = applications.slice(0, 8)

    return (
    <div className="text-center py-8 ">
    <h1 className="text-4xl md:text-5xl font-bold  ">
      We Build <br /> <span className="text-purple-600">Productive</span> Apps
    </h1>
    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
      At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
      Our goal is to turn your ideas into digital experiences that truly make an impact.
    </p>

    <div className="mt-8 flex justify-center gap-4 font-semibold text-xl">
      <button className="border border-gray-300 shadow px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-400">
        <img src="/src/assets/playstore.png" alt="Google Play" className="h-6" />Google Play
      </button>
      <button className="border border-gray-300 shadow px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-400">
        <img src="/src/assets/appstore.png" alt="App Store" className="h-6" />App Store
      </button>
    </div>

    <div className="mt-10 flex justify-center">
      <img src="/src/assets/hero.png" alt="App Mockup" className="w-72 md:w-130 shadow-lg" />
    </div>
  


  <div className=" bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-2 md:py-12">
    <h2 className="text-2xl md:text-3xl font-semibold mb-8">Trusted By Millions, Built For You</h2>
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12">
      <div>
        <p className="text-4xl font-bold">29.6M</p>
        <p>Total Downloads</p>
        <p className="text-sm text-gray-200">21% More Than Last Month</p>
      </div>
      <div>
        <p className="text-4xl font-bold">906K</p>
        <p>Total Reviews</p>
        <p className="text-sm text-gray-200">46% More Than Last Month</p>
      </div>
      <div>
        <p className="text-4xl font-bold">132+</p>
        <p>Active Apps</p>
        <p className="text-sm text-gray-200">31 More Will Launch</p>
      </div>
    </div>
  </div>


 <div>
      <div className='flex justify-center py-5 items-center'>
        <h1 className='text-3xl font-semibold text-center'>Trending Applications</h1>
       
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='max-w-7xl mx-6 lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {trendingApplications.map(application => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
        
      )}
    </div>
 <Link className='btn btn-outline mt-6 bg-purple-600 text-white' to='/applications'>
          Show All
        </Link>
    </div>






    );
};

export default Home;