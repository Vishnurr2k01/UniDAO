import React, { useState } from 'react'
import ProposalListing from '../components/Cards/ProposalListing'
import { FaArrowLeft } from 'react-icons/fa';
import { useGlobalState } from '../store';

import {Link } from "react-router-dom"

function Viewp() {
  const [data] = useGlobalState('proposals')
  const [data1] = useGlobalState('adminProposals')
  const [selec,setselec] = useState(false)

  return (
    
    
     <div>
      <div className="fixed bg-[#00df9a] rounded-full p-4 shadow-xl shadow-gray-800 cursor-pointer text-xl left-6 top-8">
    <Link to="/admin"><FaArrowLeft></FaArrowLeft></Link>
      </div>
      <h2 className='text-center text-white font-bold text-3xl my-12'>Proposals List</h2>
      <div className='text-white text-xl text-center flex justify-center gap-6'>
    <div onClick={()=>setselec(false)} className={`${!selec && 'border-[1px] border-[#00df9a] text-[#00df9a] p-1 rounded-md'} ${selec&& 'p-1'}`}> Normal Proposal </div><div className={`${selec && 'border-[1px] border-[#00df9a] text-[#00df9a] p-1 rounded-md'} ${!selec&& 'p-1'}`} onClick={()=>setselec(true)}>Admin Proposal </div>
      
    </div>
    <div className="py-10 mx-auto max-w-[80vw] flex flex-col ">
    <div className='text-white bg-[#0c1427] rounded-md grid grid-cols-6 text-center py-1 text-xl font-semibold '>
        <div className=' col-span-1'> Id </div>
        <div className=' col-span-1'> Initiator </div>
        <div className=' col-span-3'> Title </div>
        <div className=' col-span-1'> Action </div>
        
    </div>
    {
      selec ? <>
      {
      data1?.map((proposal,i)=>{
        return(
          <ProposalListing key={i} proposal={proposal} type="admin"/>
        )
      })
    }</>:
    <>
     {
      data?.map((proposal,i)=>{
        return(
          <ProposalListing key={i} proposal={proposal}/>
        )
      })
    }
</>
    }
    
   
    </div>
   </div>
   
      
    
    
  )
}

export default Viewp
