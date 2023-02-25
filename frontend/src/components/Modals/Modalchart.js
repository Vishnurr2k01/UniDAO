//graph modal
//import React, { useState } from "react";
import React from 'react';
import { useEffect, useState } from "react";
//import { getProposal, voteOnProposal } from "../services/Blockchain.services";
import {useParams} from 'react-router-dom'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';



// Sample data
const data = [
{name: 'voters', Acceptees: 700, Rejectees: 800},

];
 

const Modalchart = ({isVisible , onClose}) => {
  if (!isVisible) return null ;
  // const [showModal, setShowModal] = useState(false);
  return (
    <>
          {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button> */}
      {/* {showModal ? ( */}
        <>
        
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[700px] bg-gray-700 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-[#096246] rounded-t ">
                  <h1 className="text-3xl font=bold text-gray-300">Proposal</h1>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                     onClick={() => onClose()}
                  >
                    <span className="text-white opacity-7 h-8 w-6 text-xl block bg-black py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div>
                <div className=" p-2 flex-auto absolute right-10"> 
                  {/* <form className="bg-black shadow-md rounded px-8 pt-20 pb-20 w-full"> */}
                
                    
                    <div className="p-10 block text-white text-4xl font-bold pl-20 mb-10 absolute right-20">
                      Title
                      </div>
                    
              
                    {/* </div> */}
                    {/* <input className="shadow appearance-none border rounded w-full py-2 px-1 mb-6 text-black" /> */}
                    <div class="flex-auto relative ">
                    <p className="flex-auto overflow-y-auto relative p-40 text-white text-lg font-semibold mt-20 pt-20 absolute left-48">
                    Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    </div>
                  
                    {/* <input className="shadow appearance-none border rounded w-full py-2 px-5 mb-6 text-black" /> */}
                   
                    
                  {/* </form> */}
     </div>
      <div>
<BarChart width={450} height={500} data={data}
margin={{
  top: 10,
  right: 100,
  left: 100,
  bottom: 5
}}>
  <CartesianGrid strokeDasharray="3 3"/>
  <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Acceptees" fill="#0c1427" />
          <Bar dataKey="Rejectees" fill="#00df9a" />
  </BarChart>
  </div>
               {/*} <div className="flex items-center justify-end p-6 border-t border-solid border-[#096246] rounded-b">
                  <button
                    className="text-white bg-black font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                     onClick={() => onClose()}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-black active:bg-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                     onClick={() => onClose()}
                  >
                    Submit
                  </button>
</div>*/}
              </div>
              </div>
            </div>
          </div>
        </>
      {/* ) : null} */}
    </>
  );
};

export default Modalchart;