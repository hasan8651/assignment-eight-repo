import React from 'react';
import { Link } from 'react-router';
import downloadsImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'

const ApplicationCard = ({ application }) => {
   

const { title, image, ratingAvg, downloads, id } = application
   return (
 
<div>
           <Link to={`/application/${id}`} >
             <div className='card rounded p-4 shadow-md hover:scale-105 transition ease-in-out'>
    <figure className=''>
    <img className='w-full rounded-lg' src={image} alt='image' />
     </figure>
       <div className=''>
         <h2 className='card-title my-4 ml-2 text-[#001931]'>{title}</h2>
         <span className='flex my-4 justify-between'>
         <p className='flex items-center bg-[#F1F5E8] text-[#00D390] gap-2 px-1'><img className='w-5' src={downloadsImg} alt="download-icon" /> {downloads}M</p>
            <p className='flex items-center bg-[#FFF0E1] text-[#FF8811] gap-2 px-1'><img className='w-5' src={ratingImg} alt="rating-icon" /> {ratingAvg}</p>
         </span>
        </div>
     </div>
           </Link>
         </div>
     );
};

 


export default ApplicationCard;