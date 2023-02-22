import React, { useEffect,useRef } from 'react';
import Typed from 'typed.js'
import {connectWallet} from '../services/Blockchain.services';
import { getGlobalState, useGlobalState } from '../store';
const Hero = () => {
const el = useRef(null)
  const [connectedAccount] = useGlobalState('connectedAccount')
  useEffect(() => {
    
  console.log(connectedAccount)
  const typed = new Typed(el.current, {
    strings: ['Transparency', 'Global Access', 'Future'],
    startDelay: 100,
    typeSpeed:120,
     backSpeed:140,

    smartBackspace: true,
    loop: true,
      showCursor: true,
    
  });

  // Destropying
  return () => {
    typed.destroy();
  };
    
  }, [connectedAccount])
  
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH DAO
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Decentralised Decision Making Platform
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-semibold py-4'>
            UniDAO for
          </p>

       <span className='md:text-5xl sm:text-4xl text-xl font-semibold md:pl-4 pl-2' ref={el}></span>

        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Make decisions from the bottom-up,governed by a community organized around rules enforced on a blockchain.</p>
        {
          connectedAccount ? <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black'>{connectedAccount.slice(0,7)}...</button> :
          <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black' onClick={connectWallet}>Connect Wallet</button>
        }
      </div>
    </div>
  );
};

export default Hero;