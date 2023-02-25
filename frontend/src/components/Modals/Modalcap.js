//create admin proposal modal

import React, { useState } from "react";

const Modalcap = ({isVisible , onClose}) => {
  if (!isVisible) return null ;
  // const [showModal, setShowModal] = useState(false);
  return (
    <>
{/*     
          <button
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
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[700px] bg-[#0c1427] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-[#096246] rounded-t ">
                  <h1 className="text-3xl font=bold text-white">Create Admin</h1>
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
                  <form className="bg-black shadow-md rounded px-20 pt-5 pb-5 w-[600px]">
                    <label className="block text-white text-xl font-semibold mb-1">
                      Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 mb-3 text-black" />
                    <label className="block text-white text-xl; font-semibold mb-1">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 mb-3 text-black" />
                    <label className="block text-white text-xl font-semibold mb-1">
                      Power
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 mb-3 text-black" />
                    <label className="block text-white text-xl font-semibold mb-1">
                      Enrol
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 mb-3 text-black" />
                    <label className="block text-white text-xl font-semibold mb-1">
                      Voter
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-2" />
                    
                    
                    
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
                     onClick={() => onClose()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      // ) : null}
    </>
  );
};

export default Modalcap;