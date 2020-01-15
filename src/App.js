import React from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import About from './components/about'
import Projects from './components/projects'
import Gallery from './components/gallery'
import Experience from './components/experience'
import Contact from './components/contact'

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
      <Sidebar></Sidebar>
        <div id="colorlib-main">
          {/*<About></About>
          <Experience></Experience>
          <Projects></Projects>
          <Gallery></Gallery>
          <Contact></Contact>*/}
        </div>
      </div>
      
    </div>
  );
}

export default App;
