import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpg from "./pages/Frontpg";
import Adminop from "./pages/Adminop";
import {isWalletConnected,connectWallet} from './services/Blockchain.services'
import { useEffect } from "react";
import { useState } from "react";
function App() {

  const [loaded,setLoaded] = useState(false)

  useEffect(()=>{
    const fn = async () => {
      isWalletConnected()
      setLoaded(true)
    }
  fn()
  },[])
  return (
    <div>
      { loaded ?
  <Router>
    <Routes>
    <Route path='/' element={<Frontpg/>} />
    <Route path='/admin' element={<Adminop/>}/>
    </Routes>
   </Router>  : <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-gray-300"></div>
        </div>
}
</div>
)
}
export default App;
