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
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>
          All Applications{' '}
          <span className='text-sm text-gray-500'>
            ({searchedApplications.length}) Applications Found.
          </span>
        </h1>
        <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Applications'
          />
        </label>
      </div>
      {loading ? (
        <LoadingSpinner count={16} />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {searchedApplications.map(application => (
            
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      )}
    </div>
  
    );
};

export default Applications;