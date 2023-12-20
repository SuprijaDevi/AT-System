import React from 'react'
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import SignUp from './Components/Signup.js'; 
// import Login from './Components/Login.js';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Features from './Components/Features.js'

function App() {
  return (
    <div>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter> */}
      <Navbar />
      <Home />
      <Features />
    </div>
  );
}

export default App;

