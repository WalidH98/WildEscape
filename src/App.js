import React from 'react';
import './App.css';
import Router from './components/Router/Router';
import Navnav from './components/Navnav/Navnav';

function App() {
  return (
    <React.Fragment>
      <Navnav />
      <Router />
    </React.Fragment>
  )
}

export default App;
