import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adminop from "./pages/Adminop"


function App() {
  return (
    <div>
      {
  <Router>
    <Routes>
    
    <Route path='/Adminop' element={<Adminop/>}/>
    </Routes>
   </Router>
}
</div>
)
}

export default App;
