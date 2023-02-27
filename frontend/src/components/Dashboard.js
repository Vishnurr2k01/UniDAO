import React from 'react';
import {useState} from 'react';
import Modal from './Modals/modala';
import { FaDiscord, FaPlus, FaTwitter } from 'react-icons/fa';
import { getGlobalState } from '../store';
import LineBar from './charts/Line';
import PiechartComp from './charts/PiechartComp';
import ProposalListing from './Cards/ProposalListing';
const HeroA = () => {
  const [showModal,setShowModal] = useState(false);

  return (
    <>

    <div style={{
      overflowY: 'scroll',
    }} className="main pl-24 pt-12 min-h-screen overflow-y-scroll">
   <div className='flex justify-evenly'>
    <div className='bg-[#0c1427] text-center py-6  rounded-md w-[15rem]'>
    <h1 className='text-2xl font-bold text-white'>Organisation name</h1>
    </div>
    <div className='bg-[#0c1427] text-center py-6 px-12 rounded-md w-[15rem]' >
    <h2 className='text-xl text-white'>Total Proposals</h2>
    <h1 className='text-4xl font-bold mt-4 text-[#00df9a]'>21</h1>
    </div>
    <div className='bg-[#0c1427] text-center py-6 px-12 rounded-md w-[15rem]'>
    <h2 className='text-xl text-white'>Open Proposals</h2>
    <h1 className='text-4xl font-bold mt-4 text-[#00df9a]'>21</h1>
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
    <div className='w-1/3 bg-[#0c1427] py-8 mt-12 rounded-md flex justify-center'>
      <PiechartComp/>
      </div>
   </div>
<div className="fixed bg-[#00df9a] rounded-full p-4 shadow-xl shadow-gray-800 cursor-pointer text-4xl right-12 bottom-12"onClick={()=>setShowModal(true)}>
  <FaPlus/>
</div>

<div className='m-12 max-w-[70vw] flex flex-col mx-auto'>
  <h2 className='text-white text-center text-3xl font-semibold mb-4 '>Past Proposals</h2>
<div className='text-white bg-[#0c1427] rounded-md grid grid-cols-6 text-center py-1 text-xl font-semibold '>
        <div className=' col-span-1'> Id </div>
        <div className=' col-span-1'> Initiator </div>
        <div className=' col-span-3'> Title </div>
        <div className=' col-span-1'> Action </div>
        
    </div>
  <ProposalListing />
</div>
    </div>
    <Modal isVisible={showModal} onClose={()=>setShowModal(false)} />
    </>
  );
};

export default HeroA;