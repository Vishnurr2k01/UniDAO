import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpg from "./pages/Frontpg";
import Adminop from "./pages/Admin";
import {isWalletConnected,setAdminRole,isVoter} from './services/Blockchain.services'
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalState,getGlobalState } from "./store";
import User from "./pages/User";
import Protected from "./services/Protected";
import Notfound from './pages/Notfound'
function App() {

  const [loaded,setLoaded] = useState(false)
  const [isvoter] = useGlobalState('isVoter')
  const [isadmin] = useGlobalState('isAdmin')

  console.log(isvoter , isadmin)
 


  useEffect(()=>{
    const fn = async () => {
      await isWalletConnected()
      // await setAdminRole() need call once
      await isVoter()
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
    <Route exact  path='/admin' element={<Protected isRole={isadmin}><Adminop /></Protected>}/>
    <Route path='/user' element={<Protected isRole={isvoter}><User /></Protected>}/>
     <Route path='/wrong' element={<Notfound/>} />
    <Route path='*' element={<div>404</div>} />

    </Routes>
   </Router>  : <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-gray-300"></div>
        </div>
}
</div>
)
}
export default App;
