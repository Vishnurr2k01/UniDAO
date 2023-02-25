import React from 'react';

import heroVid from '../assets/video.mp4';
import blc from '../assets/blc.jpg';
import Navbar from './Navbar';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { getGlobalState } from '../store';
import LineBar from './charts/Line';
import PiechartComp from './charts/PiechartComp';
const HeroA = () => {
  return (
    <div className="main pl-24 pt-12 min-h-screen overflow-y-scroll">
   <div className='flex justify-evenly'>
    <div className='bg-[#00df9a] text-center py-6  rounded-md w-[15rem]'>
    <h1 className='text-2xl font-bold'>Organisation name</h1>
    </div>
    <div className='bg-[#00df9a] text-center py-6 px-12 rounded-md w-[15rem]' >
    <h2 className='text-xl'>Total Proposals</h2>
    <h1 className='text-4xl font-bold mt-4'>21</h1>
    </div>
    <div className='bg-[#00df9a] text-center py-6 px-12 rounded-md w-[15rem]'>
    <h2 className='text-xl'>Open Proposals</h2>
    <h1 className='text-4xl font-bold mt-4'>21</h1>
    </div>
    <div className='text-center  px-12 rounded-md'>
    
    <h1 className='text-5xl text-[#00df9a] font-bold flex gap-6 justify-center items-center my-auto'><FaTwitter /> <FaDiscord/></h1>
    <h1 className='text-2xl font-bold bg-[#00df9a] mt-4 p-2 rounded-md'>{getGlobalState('connectedAccount')?getGlobalState('connectedAccount').slice(0,6) + '..':<div >
    Connect Wallet</div>}</h1>
    </div>
    
   </div>
   <div className='flex flex-col lg:flex-row gap-6 justify-evenly'>

    <div className='2/3'>
      <LineBar />
    </div>
    <div className='w-1/3 bg-white py-8 mt-12 rounded-md flex justify-center'>
      <PiechartComp/>
      </div>
   </div>

    </div>
  );
};

export default HeroA;