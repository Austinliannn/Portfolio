import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/Global.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
{/* Route to portfolio page */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
