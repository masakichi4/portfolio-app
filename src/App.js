import React from 'react';
import './App.css';
import TopBar from './components/topBar'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <div id="colorlib-page">
          <div id="container-wrap">
            <div id="colorlib-main">
              <TopBar />


            </div>
          </div>
          
        </div>
      </I18nextProvider>
    </Router>
  );
}

export default App;
