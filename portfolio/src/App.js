import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/Global.css';
import Home from './pages/Home/Home';
import Aboutme from './pages/About Me/Aboutme';
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <Router>
        <Routes>
{/* Route to Home page */}
          <Route path="/" element={<Home />} />

{/* Route to About Me page */}
          <Route path="/aboutme" element={<Aboutme />} />

{/* Route to Projects page */}
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
