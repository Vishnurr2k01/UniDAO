//add user modal
import React, { useState } from "react";

const Modalau = ({isVisible , onClose}) => {
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
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[700px] bg-[#0c1427] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-[#096246] rounded-t ">
                  <h1 className="text-3xl font=bold text-white">Add User</h1>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                     onClick={() => onClose()}
                  >
                    <span className="text-white opacity-7 h-8 w-6 text-xl block bg-black py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-10 flex-auto">
                  <form className="bg-black shadow-md rounded px-8 pt-20 pb-20 w-full">
                    <label className="block text-white text-xl font-semibold mb-3">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 mb-6 text-black" />
                    <label className="block text-white text-xl font-semibold mb-3">
                      Power
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-5 mb-6 text-black" />
                   
                    
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
      {/* ) : null} */}
    </>
  );
};

export default Modalau;