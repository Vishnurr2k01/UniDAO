import React, { useState } from 'react'
import ProposalListing from '../components/Cards/ProposalListing'
import PastProposal from '../components/Cards/PastProposal'
import Header from '../components/Header'
import { FaDiscord, FaPlus, FaPlusCircle, FaTwitter } from 'react-icons/fa';
import { getGlobalState, useGlobalState } from '../store';

function Viewp() {
  const [data] = useGlobalState('proposals')
console.log(data)
  const [proposals,setProposals] = useState(data)

  return (
    
    
     <div>
      <h2 className='text-center text-white font-bold text-3xl my-12'>Proposals List</h2>
    <div className="py-10 mx-auto max-w-[80vw] flex flex-col ">
    <div className='text-white bg-[#0c1427] rounded-md grid grid-cols-6 text-center py-1 text-xl font-semibold '>
        <div className=' col-span-1'> Id </div>
        <div className=' col-span-1'> Initiator </div>
        <div className=' col-span-3'> Title </div>
        <div className=' col-span-1'> Action </div>
        
    </div>
    {
      data?.map((proposal,i)=>{
        return(
          <ProposalListing key={i} proposal={proposal}/>
        )
      })
    }

    </div>
   </div>
   
      
    
    
  )
}

export default Viewp
