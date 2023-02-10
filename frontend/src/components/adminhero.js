import React from 'react';

import heroVid from '../assets/video.mp4';
import Navbar from './Navbar';
const HeroA = () => {
  return (
    <div className="main">
        
    <div style={{
      backgroundImage: `url(${heroVid})`,
      overflowY: 'scroll',
      overflowX: 'hidden',
    }} className='w-full h-screen top-[90px] flex'>
      <video
        className='object-cover h-full w-full absolute -z-10 blur-sm'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div>
      <nav className='fixed'>
    <Navbar />
    </nav>
      <div className='w-screen pl-20 text-white '>
        <h1>Decentralized</h1>
        <h1 className='py-2'>
          <span className='blue'>Decision</span> Making
        </h1>
        <p className='text-xl py-4'>
          
           The power to add proposals and add decision makers vests in you!
        </p>

      </div>
     
    </div>
    </div>
    </div>
  );
};

export default HeroA;