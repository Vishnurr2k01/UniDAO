import React from 'react';
import dao from '../assets/dao6.jpg'
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
      {/*<video
        className='object-cover h-full w-full absolute -z-10 blur'
        src={heroVid}
        autoPlay
        loop
        muted
  />*/}
      <div>
      <nav className='fixed'>
    <Navbar />
    </nav>
      <div className='w-screen  pl-40  text-[#00df9a] '>
       
        <h1 className='py-20 pl-60 text-xxl font-extrabold'>
          {/*<span className='blue'>Decentralized Decision</span> Making*/}
          
          <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-0 pl-40 text-white'>
          
        </h1>
        
        </h1>
        {/*<div className='flex justify-center items-center'>*/}
        <h1 className='py-10  absolute right-10'>
          <p className='md:text-6xl sm:text-8xl text-8l font-semibold md:py-0'>
            DECENTRALIZATION 
          </p>
          <p className='md:text-6xl sm:text-8xl text-8l font-semibold md:py-4'>
             AND INCLUSION
          </p>
          </h1>
          
        <p className='text-xl py-60  italic animate-pulse delay-500 absolute right-10 text-white'>
          
           {/* "The power to add proposals and add decision makers vests in you!" */}
        </p>
   <div className="absolute bottom-20 left-80">
     <img src={dao} width="300" height="400" fill-black />
      </div>
     
    </div></div>
    </div>
    </div>
  );
};

export default HeroA;