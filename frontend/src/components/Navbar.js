import React from 'react'
import { useState } from 'react';
import Modal from './Modals/modala.js';
import Modalau from './Modals/Modalau.js';
import Modalcap from './Modals/Modalcap.js';
import Modalchart from './Modals/Modalchart.js'
import {MdPoll} from 'react-icons/md/index.esm.js'
import {IoIosCreate} from 'react-icons/io/index.esm.js'
import {RiAdminFill} from 'react-icons/ri/index.esm.js'
import { useNavigate } from "react-router-dom";

import {Link} from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showModalau, setShowModalau] = useState(false);
    const [showModalcap, setShowModalcap] = useState(false);
    const [showModalchart, setShowModalchart] = useState(false);


    const[open,setOpen]=useState(false);

  return (
    <>
    <div style={{
      zIndex: 1000,
    }} className="flex ">
      <div className={`${open? 'w-72' : 'w-20'} h-screen bg-[#0c1427] p-3 relative z-50 `}>
        
          <div className="flex gap-x-2 items-center pb-7 text-white">
          <i className="fa fa-magnet text-[#00df9a] text-xs "></i>
          <h className={`${!open && 'scale-0'}text-[#00df9a] text-xs`}>UniDAO</h>
          <i className="fa fa-bars fa-sm text-[#00df9a] absolute right-5 bottom-10 text-3xl cursor-pointer transition-[1s]" aria-hidden="true" onClick={()=> setOpen(!open)}></i>
          </div>
          
          <ul>
         
           <div className=" grid grid-cols-1 grid-flow-row gap-4 ">
          <div className="flex  gap-x-7 items-center p-1 my-4 cursor-pointer hover:bg-slate-50/10 rounded-full text-[#00df9a]"> 
          <div><i className="text-3xl" aria-hidden="true">{<IoIosCreate/>}</i></div>
             <div> <li className= {`${!open && 'scale-0'} text-white text-lg font-semibold`} onClick={() => setShowModal(true)}>{'Add Proposal'}</li></div>
              </div>
              <div className="flex  gap-x-7 items-center p-1 my-4 cursor-pointer hover:bg-slate-50/10 rounded-full text-[#00df9a]"> 
          <div> <i className="text-3xl" aria-hidden="true">{<MdPoll/>}</i></div>
             <div> <li className= {`${!open && 'scale-0'} text-white text-lg font-semibold`} ><Link to="/view">{'View Proposals'}</Link></li></div>
              </div>
              
             < div className="flex  gap-x-7 items-center p-1 my-4 cursor-pointer hover:bg-slate-50/10 rounded-full text-[#00df9a]"> 
           <div><i className="text-3xl" aria-hidden="true">{<RiAdminFill/>}</i></div>
             <div> <li className= {`${!open && 'scale-0'} text-white text-lg font-semibold`} onClick={() => setShowModalcap(true)}>{'Create Admin Proposal'}</li></div>
              </div>
              </div>
          </ul>
        </div>
        <div>
        
      </div>
      </div>
      <Modal isVisible={showModal} onClose={()=>setShowModal(false)} />
      <Modalau isVisible={showModalau} onClose={()=>setShowModalau(false)} />
      <Modalcap isVisible={showModalcap} onClose={()=>setShowModalcap(false)} />
      <Modalchart isVisible={showModalchart} onClose={()=>setShowModalchart(false)} />
      </>
    
  );
}
  


