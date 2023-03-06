
import React, { useState } from "react";
import {createAdminProposal} from '../../services/Blockchain.services.js'

const Modalcap = ({isVisible , onClose}) => {

const [data,setData] = useState({
  title:'',
  addresses:[],
  power:[],
  enrol:true,
  voter:true,

})
const changeHadler = (e) => {
 
  const {name,value} = e.target
  setData({...data,[name]:name === 'enrol' || name === 'voter' ? value === 'true' : name === 'addresses' ? value.split(',') : name === 'power' ? value.split(','): value})


  

}
const SubmitHandler=async()=>{
 
  data.power = data.power.map((item)=>parseInt(item))
 
  if(new Set(data.addresses).size !== data.addresses.length)
  {
    alert('Address values must not be duplicate')
    return
  }
  
  if(data.title === '' || data.addresses.length === 0 || data.power.length === 0 || data.addresses.length !== data.power.length || data.power.some((item)=>item<0))
  {
    alert('Please fill all fields correctly')
    return
  }
  await createAdminProposal(data)
}
  return (
    <>
{isVisible &&   <>
        
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[700px] bg-gray-700 outline-none focus:outline-none pl-6 pr-5">
              <div className="flex items-start justify-between p-5 border-b border-solid border-[#096246] rounded-t ">
                <h1 className="text-3xl font=bold text-white">Create Admin Proposal</h1>
                <button
                  className="bg-transparent border-0 text-black float-right"
                   onClick={() => onClose()}
                >
                  <span className="text-white opacity-7 h-8 w-6 text-xl block bg-black py-0 rounded-full">
                    x
                  </span>
                </button>
              </div>
              <div className="relative p-6 ">
                <form className="bg-gray-600 shadow-md rounded px-20 pt-5 pb-5 w-[600px] ">
                  <label className="block text-white text-xl font-semibold mb-1">
                    Title
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-1 mb-3 text-black"  name="title" value={data.title} onChange={changeHadler}/>
                  <label className="block text-white text-xl; font-semibold mb-1">
                    Address
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-1 mb-3 text-black"  name="addresses" value={data.addresses} onChange={changeHadler} />
                  <label className="block text-white text-xl font-semibold mb-1">
                    Power
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-1 mb-3 text-black" type="text" value={data.power} name="power" onChange={changeHadler}/>
                  <div className="flex justify-between mb-3">
                    <div>

          
                  <label className="block text-white text-xl font-semibold mb-1">
                    Enrol
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-1 mb-3 text-black" value={data.enrol} name="enrol" onChange={changeHadler} />
                  </div>
                  <div>
                  <label className="block text-white text-xl font-semibold mb-1">
                    Voter
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-2" value={data.voter} name="voter" onChange={changeHadler}/>
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
      </> }
      
      
    </>
  );
};

export default Modalcap;