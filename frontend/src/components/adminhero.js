import React from 'react';

import heroVid from '../assets/video.mp4';
import blc from '../assets/blc.jpg';
import Navbar from './Navbar';
const HeroA = () => {
  return (
    <div className="main">
        
    <div style={{
      backgroundImage:`url(${heroVid})`,
      overflowY: 'scroll',
      overflowX: 'hidden',
    }} className='w-full h-screen top-[90px] flex'>
      <video
        className='object-cover h-full w-full absolute -z-10 blur'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div>
      <nav className='fixed'>
    <Navbar />
    </nav>
      <div className='w-screen  pl-60  text-[#00df9a] '>
       
        <h1 className='py-20 pl-60 text-xl font-extrabold'>
          {/*<span className='blue'>Decentralized Decision</span> Making*/}
        </h1>
        <p className='text-2xl py-80 pl-80 italic animate-pulse delay-500'>
          
           "The power to add proposals and add decision makers vests in you!""
        </p>

      </div>
     
    </div>
    </div>
    </div>
  );
};

export default HeroA;