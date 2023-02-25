import React from 'react'
import { useState , Fragment} from 'react';
import { useEffect } from 'react';
import Modal from './Modals/modala';
import Modalau from './Modals/Modalau';
import Modalcap from './Modals/Modalcap';
import {AiFillAccountBook} from 'react-icons/ai'
import {MdPoll} from 'react-icons/md'
import {IoPersonAdd} from 'react-icons/io5'
import {IoIosCreate} from 'react-icons/io'
import {RiAdminFill} from 'react-icons/ri'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showModalau, setShowModalau] = useState(false);
    const [showModalcap, setShowModalcap] = useState(false);


    const[open,setOpen]=useState(false);

  {/*const menu= [
    { title: 'Add Proposal',icon:<IoIosCreate />},
    { title: 'View Proposals',icon: <MdPoll/>},
    { title: 'Add User',icon:<IoPersonAdd/>},
    { title: 'Create Admin Proposal',icon:<RiAdminFill/>} 
    
  ];*/}

  return (
    <>
    <div style={{
      zIndex: 1000,
    }} className="flex ">
      <div className={`${open? 'w-72' : 'w-20'} h-screen bg-zinc-900 p-3 relative z-50 `}>
        
          <div className="flex gap-x-2 items-center pb-7 text-white">
          <i className="fa fa-magnet text-[#00df9a] text-xs "></i>
          <h className={`${!open && 'scale-0'}text-[#00df9a] text-xs`}>UniDAO</h>
          <i className="fa fa-bars fa-sm text-[#00df9a] absolute right-5 bottom-10 text-3xl cursor-pointer transition-[1s]" aria-hidden="true" onClick={()=> setOpen(!open)}></i>
          </div>
          
          <ul>
           {/*} {menu?.map((item,index)=> (
            <div className=" flex  gap-x-7 items-center p-1 my-4 cursor-pointer hover:bg-slate-50/10 rounded-full text-[#00df9a]">
            <i className="text-3xl" aria-hidden="true">{item.icon}</i>
              <li className= {`${!open && 'scale-0'} text-white text-lg font-semibold`}>{item.title}</li>
              </div>
           ))}*/}
           <div className=" grid grid-cols-1 grid-flow-row gap-4 ">
          <div className="flex  gap-x-7 items-center p-1 my-4 cursor-pointer hover:bg-slate-50/10 rounded-full text-[#00df9a]"> 
          <div><i className="text-3xl" aria-hidden="true">{<IoIosCreate/>}</i></div>
             <div> <li className= {`${!open && 'scale-0'} text-white text-lg font-semibold`} onClick={() => setShowModal(true)}>{'Add Proposal'}</li></div>
              </div>
              <div className="flex  gap-x-7 items-center p-1 my-4 cursor-pointer hover:bg-slate-50/10 rounded-full text-[#00df9a]"> 
          <div> <i className="text-3xl" aria-hidden="true">{<MdPoll/>}</i></div>
             <div> <li className= {`${!open && 'scale-0'} text-white text-lg font-semibold`}>{'View Proposals'}</li></div>
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
      </>
    
  );
}
  


