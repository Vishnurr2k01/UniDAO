import React from 'react'
import Navbar from "../components/Navbar"

import Dashboard from '../components/Dashboard';
function Adminop() {
  return (
    <div  className=' overflow-hidden'>
     <div className='fixed z-50' >
   <Navbar/>
   </div>
   <Dashboard />
</div>
    
  );
}

export default Adminop
