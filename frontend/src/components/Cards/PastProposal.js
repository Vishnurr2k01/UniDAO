import React from 'react'

function PastProposal() {
  return (
    <div className='text-white bg-[#0c1427] rounded-md grid grid-cols-6 text-center p-4 py-8 text-lg mt-6'>
        <div className=' col-span-1'> 1 </div>
        <div className=' col-span-1'> 0x12334... </div>
        <div className=' col-span-3'> lorem ipsum sasi title chumma </div>
        <div className=' col-span-1'> <button style={ {
border:'1px solid #00df9a'}} className='py-1 px-2 font-semibold rounded-md text-[#00df9a] hover:bg-[#00df9a] hover:text-white'>View Proposal</button></div>

    </div>
  )
}

export default PastProposal