import React from 'react';

import heroVid from '../assets/video.mp4';
import Navbar from './Navbar';
const HeroA = () => {
  return (
    <div className="main">
        
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10 blur-sm'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div>
      <nav>
    <Navbar />
    </nav>
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1>Decentralized</h1>
        <h1 className='py-2'>
          <span className='blue'>Decision</span> Making
        </h1>
        <p className='text-xl py-4'>
          
           The power to add proposals and add decision makers vests in you!
        </p>

      </div>
      <div>
        <p className='text-center text-white text-2xl font-bold'>UniDAO</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default HeroA;