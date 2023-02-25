import React from 'react'
import ProposalListing from '../components/Cards/ProposalListing'
import PastProposal from '../components/Cards/PastProposal'
import Header from '../components/Header'
import { FaDiscord, FaPlus, FaPlusCircle, FaTwitter } from 'react-icons/fa';
import { getGlobalState } from '../store';

function Viewp() {
  return (
    
    
     <div>
    <div className="py-10">
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
   
      
    
    
  )
}

export default Viewp
