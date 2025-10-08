import React, { useState } from 'react';
import useApplications from '../Hooks/useApplications';
import LoadingSpinner from '../Components/LoadingSpinner';
import ApplicationCard from '../Components/ApplicationCard';

const Applications = () => {
    const { applications, loading } = useApplications()
  const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase()
  const searchedApplications = term
    ? applications.filter(application =>
        application.title.toLocaleLowerCase().includes(term)
      )
    : applications

  return (
    <div>

 <h1 className='text-2xl md:text-3xl mt-8 mb-2 font-semibold text-center text-[#001931]'>Our All Applications</h1>
       <p className='md:text-[16px] text-[14px] text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

      <div className='max-w-7xl mx-auto flex justify-between px-4 py-5 items-center'>
        <h1 className='text-lg md:text-xl font-semibold text-[#001931]'>
          {' '}
          <span className=''>
            ({searchedApplications.length}) Apps Found.
          </span>
        </h1>
        <label className='input font-semibold w-60 md:w-80'>

 <svg className="h-[1.5em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>

          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Apps'
          />
        </label>
      </div>
      {loading ? (
        <LoadingSpinner count={16} />
      ) : (
        <div className='max-w-7xl mx-6 lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {searchedApplications.map(application => (
            
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      )}
    </div>
  
    );
};

export default Applications;