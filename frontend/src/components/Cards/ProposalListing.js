import React from 'react'
import Modalvote from '../Modals/Modalvote'
import {useState} from 'react';
import Modalchart from '../Modals/Modalchart';

function ProposalListing({key,proposal,type}) {

   const [showModalvote,setShowModalvote] = useState(false);
   const [showModalchart,setShowModalchart] = useState(false);

  return (
    <>
    <div className='text-white bg-[#0c1427] rounded-md grid grid-cols-6 text-center p-4 py-8 text-lg mt-6 items-center'>
        <div className=' col-span-1'> {proposal?.id} </div>
        <div className=' col-span-1'> {proposal?.proposer.slice(0,8)}... </div>
        <div className=' col-span-3'> {proposal?.title} </div>
        <div className=' col-span-1'> 
        
        {new Date().getTime() > Number(proposal?.duration + '000')?<div className='flex flex-col gap-2 '>
        <button style={ {
border:'1px solid #00df9a'}} className='py-1 px-2 font-semibold rounded-md text-[#00df9a] hover:bg-[#00df9a] hover:text-white' onClick={()=>setShowModalchart(true)}>View Results</button>
 {type=="admin" && !proposal?.action && <button style={ {
border:'1px solid #00df9a'}} className='py-1 px-2 font-semibold rounded-md text-[#00df9a] hover:bg-[#00df9a] hover:text-white' onClick={()=>setShowModalchart(true)}>Perform Action</button> }
        </div>: <button style={ {
border:'1px solid #00df9a'}} className='py-1 px-2 font-semibold rounded-md text-[#00df9a] hover:bg-[#00df9a] hover:text-white' onClick={()=>setShowModalvote(true)}>Vote Now</button> }
        </div>

    </div>
    <Modalvote isVisible={showModalvote} onClose={()=>setShowModalvote(false)} id={proposal?.id}/>
    <Modalchart isVisible={showModalchart} onClose={()=>setShowModalchart(false)} id={proposal?.id}/>
    </>
  );
}

export default ProposalListing