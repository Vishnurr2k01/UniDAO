import React from 'react'
import { useState } from 'react';
import {AiFillAccountBook} from 'react-icons/ai'

export default function Navbar() {

    const[open,setOpen]=useState(false);
  const menu= [
    { title: 'Add Proposal'},
    { title: 'View Proposals'},
    { title: 'Add User'},
    { title: 'Create Admin Proposal'} 
    
    
  ];
  return (
    <div className="flex">
      <div className={`${open? 'w-72' : 'w-10'} h-screen bg-zinc-900 p-7 relative `}>
        
          <div className="flex gap-x-8 items-center pb-10 text-white">
          <i className="fa fa-magnet text-white text-3xl "></i>
          <h className={`${!open && 'scale-0'}text-white text-2xl`}>UniDAO</h>
          <i className="fa fa-bars fa-sm text-white absolute right-3 bottom-5" aria-hidden="true" onClick={()=> setOpen(!open)}></i>
          </div>
          <ul>
            {menu?.map((item,index)=> (
            <div className="flex gap-x-7 items-center p-1 cursor-pointer hover:bg-slate-50/10 rounded-full text-white">
            <i className="fa fa-superpowers text-white text-xl" aria-hidden="true"></i>
              <li className= {`${!open && 'scale-0'} text-white`}>{item.title}</li>
              </div>
            ))}
          </ul>
        </div>
        <div>
        
      </div>
      </div>
    
  );
}
  


