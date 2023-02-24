import React,{useState,useEffect} from 'react'
import Navbar from "../components/Navbar"
import HeroA from '../components/adminhero';
import {FaDiscord,FaTwitter} from 'react-icons/fa'
//import Header from '../components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Adminop() {
  return (
    <div>
     <div className='flex space-x-9 absolute top-4 right-6'>
         <FaDiscord size={40} color='#e8f0ec' /> 
         <FaTwitter size={40} color='#e8f0ec' />  
       </div>
     <HeroA/>
     
</div>
    
  );
}

export default Adminop
