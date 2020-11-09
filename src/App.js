import React from 'react';
import './App.css';
import TopBar from './components/topBar'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div id="colorlib-page">
        <div id="container-wrap">
          <div id="colorlib-main">
            <TopBar />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
