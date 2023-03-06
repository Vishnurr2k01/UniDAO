import React, { useEffect,useRef } from 'react';
import Typed from 'typed.js'
import {connectWallet} from '../services/Blockchain.services.js';
import { useGlobalState } from '../store/index.js';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate()
const el = useRef(null)
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [isAdmin] = useGlobalState('isAdmin')
  const [isVoter] = useGlobalState('isVoter')
  useEffect(() => {
    
  const typed = new Typed(el.current, {
    strings: ['Transparency', 'Global Access', 'Future'],
    startDelay: 100,
    typeSpeed:120,
     backSpeed:140,

    smartBackspace: true,
    loop: true,
      showCursor: true,
    
  });


  return () => {
    typed.destroy();
  };
    
  }, [])
  
  const startHandler = async () => {
    
    if(isAdmin){
      window.location.href = '/admin'
    }
    else if(isVoter){
      window.location.href = '/user'
    }
  }
  

  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2' >
          GROWING WITH DAO
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6' onClick={()=>navigate('/admin')}>
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
          connectedAccount ? <div className='flex gap-6 mx-auto'>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6  py-3 text-black'>{connectedAccount.slice(0,7)}...</button> 
            <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6  py-3 text-black' onClick={startHandler}>Get Started</button> 
          </div>:
          <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black' onClick={connectWallet}>Connect Wallet</button>
        }
      </div>
    </div>
  );
};

export default Hero;