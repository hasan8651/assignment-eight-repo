import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApplications from '../Hooks/useApplications';
import { loadInstalled, updateList } from '../Utils/localStorage';
import downloadsImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'
import reviewImg from '../assets/icon-review.png'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import LoadingSpinner from '../Components/LoadingSpinner';
import { toast, ToastContainer } from 'react-toastify';

const ApplicationDetails = () => {
const { id } = useParams()
const { applications, loading } = useApplications()
const application = applications.find(a => a.id === Number(id))
const [isInstalled, setIsInstalled] = useState(false);

useEffect(() => {
  const stored = loadInstalled();
  const installed = stored.some(app => app.id === Number(id));
  setIsInstalled(installed);
}, [id]);

if (loading) return <LoadingSpinner/>

const { title, image, ratingAvg, downloads, description, companyName, reviews, ratings, size } = application || {}

const data = ratings.map(r => ({ name: r.name, count: r.count })).reverse();

return (

<div className='my-4 px-4 max-w-7xl mx-auto'>
<div className='md:flex gap-20 items-center py-4'>
<img className='shadow rounded-md' src={image} alt='app image' />
<div>
<h1 className='text-2xl md:text-3xl font-bold text-[#001931]'>{title}</h1>
<p className='text-[#627382] mt-1'>Developed by <span className='text-[#632EE3] font-semibold'>{companyName}</span></p>

<div className='border-b border-[#627382] my-4'></div>

<div className='mt-6 flex items-center gap-5 md:gap-10'>
  <div>
  <img className='w-8' src={downloadsImg} alt='download-icon' /> 
  <p className='text-[#627382]'>Downloads</p>
  <p className='text-xl md:text-3xl font-bold text-[#001931]'>{downloads}M</p>
  </div>

  <div>
  <img className='w-8' src={ratingImg} alt='rating-icon' /> 
  <p className='text-[#627382]'>Average Ratings</p>
  <p className='text-xl md:text-3xl font-bold text-[#001931]'>{ratingAvg}</p>
  </div>

  <div>
  <img className='w-8' src={reviewImg} alt='review-icon' /> 
  <p className='text-[#627382]'>Total Reviews</p>
  <p className='text-xl md:text-3xl font-bold text-[#001931]'>{reviews}K</p>
  </div>

  </div>

  <button onClick={() => {
    if (isInstalled) return;
    updateList(application);
    setIsInstalled(true);
    toast.success('Application Installed Successfully!');
  }}
  disabled={isInstalled}
  className={`mt-6 px-6 py-3 rounded-md font-medium transition-colors ${
  isInstalled
    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
    : 'cursor-pointer bg-[#00D390] text-white hover:bg-emerald-600'
    }`}
  >
  {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
  </button>

  </div>
  </div>

  <div className='border-b border-[#627382] w-full my-4'></div>
   
  <div className='w-full px-2 mt-4'>
  <h2 className='text-xl font-semibold mb-4 text-[#001931]'>Ratings</h2>
  <ResponsiveContainer width='100%' height={250}>
  <BarChart
    layout='vertical'
    data={data}
    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#e5e7eb' />
    <XAxis type='number' axisLine={false} tickLine={false} stroke='#6b7280' />
    <YAxis
      dataKey='name'
      type='category'
      axisLine={false}
      tickLine={false}
      stroke='#6b7280'
    />
    <Tooltip cursor={{ fill: '#fef3c7' }} />
    <Bar
      dataKey='count'
      fill='#f97316'
      radius={[0, 6, 6, 0]}
      barSize={20}
    />
    </BarChart>
    </ResponsiveContainer>
    </div>
     
    <div className='border-b border-[#627382] w-full my-4'></div>

    <div className='mt-14'>
    <h2 className='text-xl text-[#001931] font-bold mb-2'>Description</h2>
    <div className='space-y-5 text-[#627382]'>
    <p style={{ whiteSpace: 'pre-line' }}>
      {description}
    </p>
    </div>
    </div>
    <ToastContainer position='top-right' autoClose={2000}></ToastContainer>
    </div>

  )
};

export default ApplicationDetails;