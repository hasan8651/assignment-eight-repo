import React from 'react';
import { Link } from 'react-router';

const ApplicationCard = ({ application }) => {
   

const { title, image, ratingAvg, downloads, id } = application
   return (
 
<div>
           <Link to={`/application/${id}`} >
             <div className='card bg-base-100 shadow-md hover:scale-105 transition ease-in-out'>
    <figure className=''>
    <img className='w-full rounded-xl' src={image} alt='image' />
     </figure>
       <div className=''>
         <h2 className='card-title mt-2 ml-2'>{title}</h2>
         <span className='flex my-4 justify-between'>
         <p className='flex items-center gap-2 px-1'><img className='w-5' src="/src/assets/icon-downloads.png" alt="" /> {downloads}</p>
            <p className='flex items-center gap-2 px-1'><img className='w-5' src="/src/assets/icon-ratings.png" alt="" /> {ratingAvg}</p>
         </span>
        </div>
     </div>
           </Link>
         </div>
     );
};

 


export default ApplicationCard;