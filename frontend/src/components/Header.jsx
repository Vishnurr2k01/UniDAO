import React from 'react'
import {FaDiscord,FaTwitter} from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1280px] mx-auto px-2 my-1 text-white'>
        <h1 className='w-full text-3xl font-extrabold m-4 text-[#e8f0ec]'> UniDAO</h1>

     

    
    
      <div className='flex space-x-9'>
         <FaDiscord size={40} color='#e8f0ec' /> 
         <FaTwitter size={40} color='#e8f0ec' />  
       </div>
       

    </div>
  )
}

export default Header