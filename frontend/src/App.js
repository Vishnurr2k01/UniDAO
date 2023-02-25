import { Routes, Route, BrowserRouter } from "react-router-dom";
import Frontpg from "./pages/Frontpg";
import Adminop from "./pages/Admin";
import {isWalletConnected,isVoter, createProposal, setAdminRole, isAdmin} from './services/Blockchain.services'
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalState,getGlobalState } from "./store";
import User from "./pages/User";
import Protected from "./services/Protected";
import Notfound from './pages/Notfound'
import Chart from "./components/Chart";

function App() {

  const [loaded,setLoaded] = useState(false)
  const [isvoter] = useGlobalState('isVoter')
  const [isadmin] = useGlobalState('isAdmin')
const [yes,setyes] = useState(false)
const [connecteAccount] = getGlobalState('connectedAccount')
  // console.log(isvoter , isadmin ,'thithey')
 


  useEffect(()=>{
    const fn = async () => {
      await isWalletConnected()
      await isAdmin()
      await isVoter()
      setLoaded(true)
    }
  fn()
  },[connecteAccount])
  return (
      <BrowserRouter>
    <div>
      { loaded ?
    <Routes>
    <Route exact path='/' element={<Frontpg/>} />
    <Route exact  path='/admin' element={<Protected isRole={isadmin}><Adminop /></Protected>}/>
    <Route path='/user' element={<Protected isRole={isvoter}><User /></Protected>}/>
     <Route path='/wrong' element={<Notfound/>} />
    <Route path='*' element={<div>404</div>} />
   

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
