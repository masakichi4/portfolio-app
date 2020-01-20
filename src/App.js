import React from 'react';
import './App.css';
import Sidebar from './components/sidebar'


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
