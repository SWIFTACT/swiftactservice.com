import React, { useState } from 'react';
import { topResturants, exploreMore } from '../assets';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { styles } from '../style';

const TopRes = () => {
  const [showExploreMore, setShowExploreMore] = useState(false);

  const handleExploreMore = () => {
    setShowExploreMore(!showExploreMore);
  };

  return (
    <div className='w-full my-20 flex flex-col justify-center items-center'>
      <h1 className='px-4 font-light text-2xl md:text-3xl lg:text-4xl text-black text-center'>
        Top Restaurants and more in Swift
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6'>
        {topResturants.map((restaurent, index) => (
          <div key={index} className='flex flex-col justify-center items-center'>
            <img src={restaurent.image} alt="restaurant" className='rounded-full w-3/4 md:w-2/3 lg:w-full h-auto' />
            <p className='text-sm md:text-base lg:text-lg mb-2 p-2 shadow-lg rounded-md text-white bg-primary w-auto flex items-center justify-center'>
              {restaurent.name}
            </p>
          </div>
        ))}
      </div>

      {/* {showExploreMore && (
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6'>
          {exploreMore.map((item, index) => (
            <div key={index} className='flex flex-col justify-center items-center  shadow-lg m-2'>
              <img src={item.image} alt="explore more" className='rounded-lg w-3/4 md:w-2/3 lg:w-full h-auto' />
              <div className='flex items-center gap-1 justify-between w-full p-2'>
                <div className='flex flex-col justify-start items-start'>
                  <p className='text-[8px] md:text-base lg:text-lg mb-2   text-black'>
                    {item.restaurant}
                  </p>
                  <p className='text-[8px] md:text-base lg:text-lg mb-2   text-black'>
                    {item.deliveryTime}
                  </p>
                </div>
                <p className='text-[8px]  md:text-base lg:text-lg bg-primary text-white p-1 rounded-md'>
                  <div className='flex  gap-1 justify-center items-center'>
                    Rating: {item.rating} <FaStar />
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      )} */}

      <Link to={'/exploremore'} >  <button

        className='w-3/4 md:w-2/3 lg:w-1/2 text-lg py-4 text-white font-semibold rounded-lg mt-20 bg-primary'
      >
        {showExploreMore ? 'Show Less' : 'Explore more Restaurants'}
      </button>
      </Link>
    </div>
  );
};

export default TopRes;
