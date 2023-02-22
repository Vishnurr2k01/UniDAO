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
      <div className='w-screen  pl-40  text-[#00df9a] '>
       
        <h1 className='py-20 pl-60 text-xxl font-extrabold'>
          {/*<span className='blue'>Decentralized Decision</span> Making*/}
          
          <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-0 pl-40 text-white'>
          UNIDAO
        </h1>
        
        </h1>
        {/*<div className='flex justify-center items-center'>*/}
        <h1 className='py-0  pl-60'>
          <p className='md:text-4xl sm:text-6xl text-6l font-semibold md:py-0'>
            DECENTRALIZATION AND INCLUSION
          </p>
          </h1>
          
        <p className='text-3xl py-11 pl-40 italic animate-pulse delay-500 absolute right text-white'>
          
           "The power to add proposals and add decision makers vests in you!"
        </p>

      </div>
     
    </div>
    </div>
    </div>
  );
};

export default HeroA;