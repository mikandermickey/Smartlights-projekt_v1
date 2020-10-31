import React from 'react';
import './App.css';
import ControlPanel from "./views/ControlPanel";
import Footer from "./components/Footer";
import RoomContextProvider from "./contexts/RoomContext";
import LightContextProvider from './contexts/LightContext';





function App() {
  return (

    <LightContextProvider>
      <RoomContextProvider>
        <ControlPanel />
        <Footer />
      </RoomContextProvider>
    </LightContextProvider>



  )
};

export default App;
