import React, { useEffect,useRef, useState } from 'react';
import Typed from 'typed.js'
import {connectWallet} from '../services/Blockchain.services.js';
import { getGlobalState, setGlobalState, useGlobalState } from '../store/index.js';
import { useNavigate } from 'react-router-dom';
import SocialLogin from "@biconomy/web3-auth";
import "@biconomy/web3-auth/dist/src/style.css"
import { ethers } from 'ethers';
const Hero = () => {
  const navigate = useNavigate()
const el = useRef(null)
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [isAdmin] = useGlobalState('isAdmin')
  const [isVoter] = useGlobalState('isVoter')
  const [socialAcc,setSocialAcc] = useState(false)
  const [socialaddress,setSocailAddress] = useState('')

  const socialLogin = new SocialLogin()
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
useEffect(()=>{
  const initialize = async () => {
    await socialLogin.init()
   }
   initialize()
      
})
  const Social = async ()=>{
   await socialLogin.showWallet()
    if (!socialLogin?.provider) return;
    const provider = new ethers.providers.Web3Provider(socialLogin.provider)
    const accouts = await provider.listAccounts()
    console.log("EOA ADDRESS",accouts)
   setSocailAddress(accouts)
     setSocialAcc(true)
    setGlobalState('connectedAccount',accouts)
   
  }


  const Logout = async()=>{
    await socialLogin.logout()
    setGlobalState('connectedAccount',null)
  }
  // useEffect(()=>{
  //   getInfo()
  // },[socialAcc])

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
          <>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black' onClick={connectWallet}>Connect Wallet</button>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black' onClick={Social}>Login with social account</button>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black' onClick={Logout}>{socialAcc?<>Logout {socialaddress}</> : <>logout {socialaddress}</>}</button>
          
          </>
        }
      </div>
    </div>
  );
};

export default Hero;