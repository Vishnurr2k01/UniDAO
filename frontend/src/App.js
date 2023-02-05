
import Adminop from "./pages/Adminop"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
    <Route path='/Adminop' element={<Adminop/>} />
    </Routes>
   </Router>

)
}

export default App;
