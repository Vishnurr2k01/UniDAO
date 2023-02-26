import React from 'react'
import ProposalListing from '../components/Cards/ProposalListing'
import PastProposal from '../components/Cards/PastProposal'
import Header from '../components/Header'
import { FaDiscord, FaPlus, FaPlusCircle, FaTwitter } from 'react-icons/fa';
import { getGlobalState } from '../store';

function Usernew() {
  return (
    <div>
    <div>
      <div style={{
      overflowY: 'scroll',
    }} className="main mx-12 pt-12 min-h-screen overflow-y-scroll">
   <div className='flex justify-evenly'>
    <div className='bg-black text-center py-6  rounded-md w-[15rem]'>
    <h1 className='text-2xl font-bold text-white'>Organisation name</h1>
    </div>
    <div className='bg-black text-center py-6 px-12 rounded-md w-[15rem]' >
    <h2 className='text-xl text-white'>Total Proposals</h2>
    <h1 className='text-4xl font-bold mt-4 text-[#00df9a]'>21</h1>
    </div>
    <div className='bg-black text-center py-6 px-12 rounded-md w-[15rem]'>
    <h2 className='text-xl text-white'>Open Proposals</h2>
    <h1 className='text-4xl font-bold mt-4 text-[#00df9a]'>21</h1>
    </div>
    <div className='text-center  px-12 rounded-md'>
    
    <h1 className='text-5xl text-[#00df9a] font-bold flex gap-6 justify-center items-center my-auto'><FaTwitter /> <FaDiscord/></h1>
    <h1 className='text-2xl font-bold bg-[#00df9a] mt-4 p-2 rounded-md'>{getGlobalState('connectedAccount')?getGlobalState('connectedAccount').slice(0,6) + '..':<div >
    Connect Wallet</div>}</h1>
    </div>
    </div>
    <div className="mt-16">
    <div className='text-white bg-[#0c1427] rounded-md grid grid-cols-6 text-center py-1 text-xl font-semibold '>
        <div className=' col-span-1'> Id </div>
        <div className=' col-span-1'> Initiator </div>
        <div className=' col-span-3'> Title </div>
        <div className=' col-span-1'> Action </div>
        
    </div>
    <PastProposal/>
      <PastProposal/>
      <ProposalListing/>
      <ProposalListing/>
    </div>
   </div>
      
    </div>
    </div>
  )
}

export default Usernew
