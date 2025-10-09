import { useState } from 'react';
import { loadInstalled, removeFromInstalled } from '../Utils/localStorage';
import downloadsImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'
import { toast, ToastContainer } from 'react-toastify';

const InstalledApps = () => {

  const [installed, setInstalled] = useState(() => loadInstalled())
  const [sortOrder, setSortOrder] = useState('none')

  const sortedItem = (() => {
    if (sortOrder === 'asc') {
      return [...installed].sort((x, y) => x.downloads - y.downloads)
    } else if (sortOrder === 'desc') {
      return [...installed].sort((x, y) => y.downloads - x.downloads)
    } else {
      return installed
    }
  })()

  const handleRemove = id => {
    toast.success('Application Uninstalled Successfully!');
    removeFromInstalled (id)
    setInstalled(prev => prev.filter(a => a.id !== id))
  }

  const foundText = sortedItem.length === 0 ? 'No Apps Found' : `(${sortedItem.length}) Apps Found`;

  return (
    
<div>
  <h1 className='text-2xl md:text-3xl mt-8 mb-2 font-semibold text-center text-[#001931]'>Your Installed Apps</h1>
  <p className='md:text-[16px] text-[14px] text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
  <div className='max-w-7xl mx-auto flex justify-between px-4 py-5 items-center'>
    <h1 className='text-lg md:text-xl font-semibold text-[#001931]'>
    {foundText}
    </h1>

    <label className='form-control font-semibold w-40 md:w-60'>
      <select
        className='select text-[#627382] bg-[#F5F5F5] select-bordered'
        value={sortOrder}
        onChange={e => setSortOrder(e.target.value)}>
          <option disabled={true} value='none'>Sort by downloads</option>
          <option value='asc'>Low-&gt;High</option>
          <option value='desc'>High-&gt;Low</option>
      </select>
    </label>
  </div>
  
  <ToastContainer position='top-right' autoClose={2000}></ToastContainer>

  {sortedItem.length === 0 ? (
    <p className='text-2xl md:text-3xl mt-8 mb-2 font-semibold text-center text-[#001931]'>No Installed Applications Available</p>
    ) : (
      <div className='space-y-3'>
        {sortedItem.map(a => (
          <div key={a.id} className='max-w-7xl mx-4 md:mx-auto flex items-center justify-between bg-white rounded-lg p-4 shadow-md'>
            <div class='flex items-center space-x-4'>
              <figure className='rounded-md overflow-hidden'>
                <img
                className='w-20 h-20 object-cover'
                src={a.image}
                alt='image'/>
              </figure>
            <div>
            <h3 class='text-xl font-semibold text-[#001931]'>{a.title}</h3>
            <div class='flex items-center space-x-4 mt-4 font-semibold text-[#627382]'>
              <span class='flex items-center gap-1 text-[#00D390]'><img className='w-4' src={downloadsImg} alt='download-icon' />{a.downloads}</span>
              <span class='flex items-center gap-1 text-[#FF8811] font-medium'><img className='w-4' src={ratingImg} alt='rating-icon' />{a.ratingAvg}</span>
              <span className='text-[#627382]'>{a.size} MB</span>
            </div>
            </div>
            </div>

<button onClick={() => handleRemove(a.id)} className='bg-[#00D390] text-white px-4 py-2 rounded font-medium hover:bg-emerald-600 cursor-pointer'>Uninstall</button>
        </div>
        ))}
      </div>
      )} 
</div>
)
};

export default InstalledApps;