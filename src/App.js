import React from 'react';
import './App.css';
import ControlPanel from "./views/ControlPanel";
import Footer from "./components/Footer";
import RoomContextProvider from "./contexts/RoomContext";
import LightContextProvider from './contexts/LightContext';
import ColorContextProvider from "./contexts/ColorContext"





function App() {
  return (
    <ColorContextProvider>
      <LightContextProvider>
        <RoomContextProvider>
          <ControlPanel />
          <Footer />
        </RoomContextProvider>
      </LightContextProvider>
    </ColorContextProvider>



  )
};

export default App;
