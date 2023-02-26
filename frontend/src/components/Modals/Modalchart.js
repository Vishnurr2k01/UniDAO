//graph modal
//import React, { useState } from "react";
import React from 'react';
import { useEffect, useState } from "react";
//import { getProposal, voteOnProposal } from "../services/Blockchain.services";
import {useParams} from 'react-router-dom'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { getProposal } from '../../services/Blockchain.services';



// Sample data

const Modalchart = ({isVisible , onClose,id}) => {

const [data,setData] = useState([])
const [proposal,setProposal] = useState(null)

const retrieveProposal = async() => {
await getProposal(id).then(res=>{
    setProposal(res)
    setData([{
      name: 'voters',
      Acceptees: res?.upvotes,
      Rejectees: res?.downvotes
    }])
  })
}
useEffect(()=>{
  retrieveProposal()
  console.log(proposal)
},[id])


  return (
  <>
  {isVisible && <>
        
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
             
              
                  
                  <div className="p-10 block text-white text-4xl font-bold pl-20 mb-10 absolute right-20">
                   {proposal?.title}
                    </div>
                  
            
                
                  <div className="flex-auto relative ">
                  <p className="flex-auto overflow-y-auto relative p-40 text-white text-lg font-semibold mt-20 pt-20 text-center ">
                 {proposal?.description}
                  </p>
                  </div>
                
                 
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
             
            </div>
            </div>
          </div>
        </div>
      </> }</>
      
    
  );
};

export default Modalchart;