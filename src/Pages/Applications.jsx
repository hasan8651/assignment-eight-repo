import { useState, useEffect } from 'react';
import useApplications from '../Hooks/useApplications';
import LoadingSpinner from '../Components/LoadingSpinner';
import ApplicationCard from '../Components/ApplicationCard';

const Applications = () => {

  const { applications, loading } = useApplications();
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchedApplications, setSearchedApplications] = useState(applications);
  
  const term = search.trim().toLowerCase();

  useEffect(() => {
    
    if (!term) {
      setSearchedApplications(applications);
    return;
    }

    setSearchLoading(true);

  const delay = setTimeout(() => {
  const filtered = applications.filter(application =>
    application.title.toLowerCase().includes(term)
      );
      setSearchedApplications(filtered);
      setSearchLoading(false);
    }, 400); 

    return () => clearTimeout(delay);
    }, [term, applications]);

  const isLoading = loading || searchLoading;

  const foundText = searchedApplications.length === 0
      ? 'No Apps Found'
      : `(${searchedApplications.length}) Apps Found`;

    return (
    <div>
    <h1 className='text-2xl md:text-3xl mt-8 mb-2 font-semibold text-center text-[#001931]'>
    Our All Applications
    </h1>
    <p className='md:text-[16px] text-[12px] text-[#627382] text-center'>
    Explore All Apps on the Market developed by us. We code for Millions.
    </p>

    <div className='max-w-7xl  mx-auto flex justify-between px-2 py-5 items-center'>
    <h1 className='text-lg md:text-xl font-semibold text-[#001931]'>
    {foundText}
    </h1>

    <label className='input flex items-center font-semibold gap-2 bg-[#F5F5F5] px-3 py-2 rounded-md w-50 md:w-80'>
    <svg
      className='h-[1.5em] opacity-50'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
    <g
      strokeLinejoin='round'
      strokeLinecap='round'
      strokeWidth='2.5'
      fill='none'
      stroke='currentColor'
    >
    <circle cx='11' cy='11' r='8'></circle>
    <path d='m21 21-4.3-4.3'></path>
    </g>
    </svg>
    <input
      value={search}
      onChange={e => setSearch(e.target.value)}
      type='search'
      placeholder='Search Apps'
    />
      {searchLoading && (
    <div className='w-4 h-4 border-2 border-[#632EE3] border-t-transparent rounded-full animate-spin ml-2'></div>
    )}
    </label>
    </div>

      {isLoading ? (
    <div className='flex justify-center items-center py-20'>
    <LoadingSpinner />
    </div>
    ) : (
    <div className='max-w-7xl md:px-2 mx-6 lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {searchedApplications.map(application => (
    <ApplicationCard key={application.id} application={application} />
    ))}
    </div>
    )}
    </div>
  );
};

export default Applications;