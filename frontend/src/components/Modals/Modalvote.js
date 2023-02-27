import React from 'react';
import { useEffect, useState } from "react";
import { getAdminProposal, getProposal, voteOnProposal } from '../../services/Blockchain.services';


  
  

const Modalvote = ({isVisible , onClose,id,type}) => {
  const [data,setData] = useState([])
const [proposal,setProposal] = useState(null)

const [value,setValue] = useState("upvote")

const retrieveProposal = async() => {
if(type==="admin"){
  await getAdminProposal(id).then(res=>{
    setProposal(res)
    setData([{
      name: 'voters',
      Acceptees: res?.upvotes,
      Rejectees: res?.downvotes
    }])
  })
}else{
  await getProposal(id).then(res=>{
    setProposal(res)
    setData([{
      name: 'voters',
      Acceptees: res?.upvotes,
      Rejectees: res?.downvotes
    }])
  })
}

}
useEffect(()=>{
  retrieveProposal()
},[id])
  
const changeHandler = (e) => {
  setValue(e.target.value)
}

const SubmitHandler = async() => {
  
  const vote = value === 'upvote' ? 1 : 0

 await voteOnProposal(id,vote).then(res=>{
    console.log(res)
  })
  
}
  return (
   
    <>
{isVisible && <>
        
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[700px] bg-gray-700 outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-[#096246] rounded-t ">
                <h1 className="text-3xl font=bold text-white">Cast Vote</h1>
                <button
                  className="bg-transparent border-0 text-black float-right"
                   onClick={() => onClose()}
                >
                  <span className="text-white opacity-7 h-8 w-6 text-xl block bg-black py-0 rounded-full">
                    x
                  </span>
                </button>
              </div>
              <div className="relative p-5 flex-auto">
                <form className=" bg-gray-600 shadow-md rounded px-8 pt-5 pb-0 w-full">
                  <label className="block text-white text-2xl font-bold mb-3 absolute-center pl-60">
                    {proposal?.title}
                  </label>
                  
                  <div class="flex-auto relative ">
                  <p className="flex-auto overflow-y-auto relative p-10 text-white text-lg font-semibold mt-10 pt-5 ">
                {proposal?.description}
                  </p>
                  </div>
                  
                 
                  
              
              

   <div className="flex px-1 py-2 pl-2">
<div>
  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5  rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
      type="radio"
      name="flexRadioDefault"
      value="upvote"
      id="radioDefault01" 
      onChange={changeHandler}
      checked={value=="upvote"}/>
    <label
      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer hover:bg-gray-700 text-white text-2xl font-bold mb-4"
      for="radioDefault01">
      UpVote
    </label>
  </div>
  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5  rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg- checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
      type="radio"
      name="flexRadioDefault"
      id="radioDefault02"
      value="downvote"
      onChange={changeHandler}
      checked={value=="downvote"} />
    <label
      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer hover:bg-gray-700 text-white text-2xl font-bold" htmlFor='radioDefault02'
     >
      DownVote
    </label>
  </div>
</div>
</div>
</form>
</div>

<div className="flex items-center justify-end p-6 border-t border-solid border-[#096246] rounded-b">
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
                   onClick={SubmitHandler}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>}
        
     
    </>

  );
};


export default Modalvote;