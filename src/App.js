import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './Components/Signup.js'; 
import Login from './Components/Login.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

