import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/Global.css';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
      <Router>
        <Routes>
{/* Route to portfolio page */}
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
