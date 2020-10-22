import React from 'react';
import './App.css';
import ControlPanel from "./views/ControlPanel";
import ControlRoom from "./views/ControlRoom";
import { Router } from "@reach/router"





function App() {
  return (
    <>
      <Router>
        <ControlPanel path="/" />
        <ControlRoom path="/places" />
      </Router>
    </>

  )
};

export default App;
