import { Routes, Route, BrowserRouter } from "react-router-dom";
import Frontpg from "./pages/Frontpg";
import Adminop from "./pages/Adminop";
import {isWalletConnected,setAdminRole,isVoter} from './services/Blockchain.services'
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalState,getGlobalState } from "./store";
import Biconomy from '../src/components/Biconomy'
function App() {

  const [loaded,setLoaded] = useState(false)
 


  useEffect(()=>{
    const fn = async () => {
      await isWalletConnected()
      // await setAdminRole() need call once
      await isVoter()
     console.log(getGlobalState('isVoter'))
      setLoaded(true)
    }
    
  fn()

  },[])
  return (
      <BrowserRouter>
    <div>
      { loaded ?
    <Routes>
    <Route path="/" element={<Frontpg/>} />
    <Route path="/admin" element={<Adminop/>}/>
    <Route path="/user" element={<Biconomy />}/>
    </Routes>
    : <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-gray-300"></div>
        </div>
}
</div>
      </BrowserRouter>
)
}
export default App;
