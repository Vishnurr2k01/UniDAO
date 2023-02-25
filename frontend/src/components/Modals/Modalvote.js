//graph modal
//import React, { useState } from "react";
import React from 'react';
import { useEffect, useState } from "react";
//import { getProposal, voteOnProposal } from "../services/Blockchain.services";
import {useParams} from 'react-router-dom'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';



// Sample data


  
  

const Modalvote = ({isVisible , onClose}) => {
  if (!isVisible) return null ;
  // const [showModal, setShowModal] = useState(false);
  return (
    <>
          
        <>
        
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[700px] bg-gray-700 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-[#096246] rounded-t ">
                  <h1 className="text-3xl font=bold text-gray-300">Cast Vote</h1>
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
     <div class="flex justify-center">
  <div>
    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <input
        class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:pointer-events-none hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] disabled:opacity-60"
        type="radio"
        name="flexRadioDisabled"
        id="flexRadioCheckedDisabled"
        disabled />
      <label
        class="mt-px inline-block pl-[0.15rem] opacity-50 hover:pointer-events-none"
        for="flexRadioDisabled">
        Upvote
      </label>
    </div>
    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <input
        class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:pointer-events-none hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] disabled:opacity-60"
        type="radio"
        name="flexRadioDisabled"
        id="flexRadioCheckedDisabled"
        checked
        disabled />
      <label
        class="mt-px inline-block pl-[0.15rem] opacity-50 hover:pointer-events-none"
        for="flexRadioCheckedDisabled">
        Downvote
      </label>
    </div>
  </div>
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

export default Modalvote;