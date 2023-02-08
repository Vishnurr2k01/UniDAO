//import Adminop from "./pages/Adminop"
//import Navbar from "./components/Navbar"
//import React from "react";
//import Footer from "./components/Footer";
//import Header from "./components/Header";
//import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpg from "./pages/Frontpg";
import Adminop from "./pages/Adminop";
function App() {
  return (
    <div>
      {
  <Router>
    <Routes>
    <Route path='/' element={<Frontpg/>} />
    <Route path='/Adminop' element={<Adminop/>}/>
    </Routes>
   </Router>
}
</div>
)
}
export default App;
