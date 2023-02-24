import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpg from "./pages/Frontpg";
import Adminop from "./pages/Admin";
import {isWalletConnected,setAdminRole,isVoter} from './services/Blockchain.services'
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalState,getGlobalState } from "./store";
import User from "./pages/User";
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
    <div>
      { loaded ?
  <Router>
    <Routes>
    <Route exact path='/' element={<Frontpg/>} />
    <Route exact  path='/admin' element={<Adminop/>}/>
    <Route path='/user' element={<User/>}/>
    </Routes>
   </Router>  : <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-gray-300"></div>
        </div>
}
</div>
)
}
export default App;
