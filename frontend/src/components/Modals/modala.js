//add proposal modal
import React,{useState}  from "react";
import { createProposal } from "../../services/Blockchain.services";
import {toast} from 'react-toastify'


const Modal = ({isVisible , onClose}) => {




  const [data,setData] = useState({
    title:'',
    description:'',
    duration:0
  })

  const handleChange = (e) => {
    //convert to number if duration else string and set data in data
    const {name,value} = e.target
    setData({...data,[name]:name === 'duration' ? parseInt(value) : value})
  }
 
  const SubmitHandler = async(e)=>
  {
    e.preventDefault()
await createProposal(data).then((res)=>res.json()).then((res)=>console.log(res))
toast.success('Proposal Created')
setData({
  title:'',
  description:'',
  duration:0
})
  }
  return (
    <>
      
      {isVisible &&  <>
        
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px] bg-gray-700 outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-[#096246] rounded-t ">
                <h1 className="text-3xl font=bold text-white">Add Proposal</h1>
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() =>onClose()}
                >
                  <span className="text-white opacity-7 h-8 w-6 text-xl block bg-black py-0 rounded-full">
                    x
                  </span>
                </button>
              </div>
              <div className="relative p-10 flex-auto">
                <form className="bg-gray-600 shadow-md rounded px-10 pt-20 pb-8 w-[500px]">
                  <label className="block text-white text-xl font-semibold mb-2">
                    Title
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-4 mb-6 text-black" name="title" value={data.title} onChange={handleChange}/>
                  <label className="block text-white text-xl font-semibold mb-2" >
                    Description
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-4 mb-6 text-black" name="description" onChange={handleChange} value={data.description} />
                  <label className="block text-white text-xl font-semibold mb-2">
                    Duration
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-4 text-black" type="number" name="duration" value={data.duration} onChange={handleChange}  />
                  
                  
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
       
      \
    </>
  );
};
export default Modal;
