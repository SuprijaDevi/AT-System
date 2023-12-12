
import './App.css';
import React, { useState } from 'react';
import SignUp from './Components/Signup.js'; 
import Login from './Components/Login.js';

function App() {
  const [currentPage, setCurrentPage] = useState('signup');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'signup' && <SignUp onNavigate={() => handleNavigation('login')} />}
      {currentPage === 'login' && <Login onNavigate={() => handleNavigation('signup')} />}
    </div>
  );
}

export default App;
