import { Link } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner';
import ApplicationCard from '../Components/ApplicationCard';
import useApplications from '../Hooks/useApplications';
import playStore from '../assets/playstore.png'
import appStore from '../assets/appstore.png'
import heroImg from '../assets/hero.png'

const Home = () => {
  
  const { loading,  applications } = useApplications()
  const trendingApplications = applications.slice(0, 8)

  return (
    <div className='text-center py-8'>
    <h1 className='text-4xl md:text-5xl font-bold text-[#001931]'>We Build <br />
    <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
    <p className='mt-4 text-[#627382] max-w-[810px] px-3 mx-auto'>
      At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
    </p>

    <div className='mt-8 flex justify-center gap-4 font-semibold text-xl'>
      <a href='https://play.google.com/store/apps'>
      <button className='text-[#001931] border border-gray-300 shadow px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:text-white'>
        <img src={playStore} alt='Google Play' className='h-6' />Google Play
      </button>
      </a>
      <a href='https://www.apple.com/app-store/'>
      <button className='text-[#001931] border border-gray-300 shadow px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:text-white'>
        <img src={appStore} alt='App Store' className='h-6' />App Store
      </button>
      </a>
    </div>

    <div className='mt-10 flex justify-center'>
      <img src={heroImg} alt='hero image' className='w-72 md:w-130' />
    </div>

    <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center py-2 md:py-12'>
    <h2 className='text-2xl md:text-3xl font-semibold mb-8'>Trusted By Millions, Built For You</h2>
    <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-12'>
    <div>
      <p className='text-xs text-gray-300'>Total Downloads</p>
      <p className='text-4xl font-bold my-2'>29.6M</p>
      <p className='text-xs text-gray-300'>21% More Than Last Month</p>
    </div>
    <div>
      <p className='text-xs text-gray-300'>Total Reviews</p>
      <p className='text-4xl font-bold my-2'>906K</p>
      <p className='text-xs text-gray-300'>46% More Than Last Month</p>
      </div>
      <div>
        <p className='text-xs text-gray-300'>Active Apps</p>
        <p className='text-4xl font-bold my-2'>132+</p>
        <p className='text-xs text-gray-300'>31 More Will Launch</p>
      </div>
    </div>
  </div>

  <div>
    <div className='justify-center py-5 items-center'>
    <h1 className='text-2xl md:text-3xl mb-2 font-semibold text-center text-[#001931]'>Trending Apps</h1>
    <p className='text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
    </div>
    
    {loading ? (
      <LoadingSpinner />
      ) : (
      <div className='max-w-screen px-8 mx-6 lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {trendingApplications.map(application => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </div>
      )}
    </div>

 <Link className='btn btn-outline mt-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white' to='/applications'>
    Show All
  </Link>
  </div>

    );
};

export default Home;