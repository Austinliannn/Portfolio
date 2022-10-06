import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/Global.css';
import NavigationBar from "./component/NavigationBar";
import Home from './pages/Home/Home';
import Aboutme from './pages/About Me/Aboutme';
import Projects from "./pages/Projects/Projects";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Router>
        <Container>
            <NavigationBar/>
        </Container>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
