//import Adminop from "./pages/Adminop"
//import Navbar from "./components/Navbar"
//import React from "react";
//import Footer from "./components/Footer";
//import Header from "./components/Header";
//import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpg from "./pages/Frontpg";
function App() {
  return (
    <div>
      {
        <Router>
          <Routes>
            <Route path='/' element={<Frontpg/>} />
          </Routes>
        </Router>
      }
    </div>
    
 // <Router>
   // <Navbar />
    //<Routes>
    //<Route path='/Adminop' element={<Adminop/>} />
    //</Routes>
   //</Router>

);
}
export default App;
