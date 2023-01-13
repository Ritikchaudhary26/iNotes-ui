import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/bootstrap.min.css"
import LandingPage from "./screens/LandingPage";
import Loginscreen from "./components/Login/Loginscreen";
import Register from "./components/sign-up/Register";
import NoteState from "./context/NoteState";
import Main from "./components/Main/Main";
   
 

function App() {
  

  return (
    <NoteState>
    <Router>
      <Routes>
        
        <Route path="/" element={<LandingPage/>} />
        <Route  path="/Loginscreen" element={<Loginscreen/>} />
        <Route  path="/Register" element={<Register/>} />
        <Route  path="/Main" element={<Main/>} /> 
      </Routes>
    </Router>
    </NoteState>
   
  );
}

export default App;
 