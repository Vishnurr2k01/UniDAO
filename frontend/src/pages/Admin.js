import React,{useState,useEffect} from 'react'
import Navbar from "../components/Navbar"
import HeroA from '../components/Dashboard';
import {FaDiscord,FaTwitter} from 'react-icons/fa'
//import Header from '../components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../components/Dashboard';
function Adminop() {
  return (
    <div  className=' overflow-hidden'>
     <div className='fixed z-50' >
   <Navbar/>
   </div>
   <Dashboard />
</div>
    
  );
}

export default Adminop
