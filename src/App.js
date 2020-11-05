import React from 'react';
import './App.css';
import ControlPanel from "./views/ControlPanel";
import Footer from "./components/Footer";
import RoomContextProvider from "./contexts/RoomContext";
import LightContextProvider from './contexts/LightContext';
import ColorContextProvider from "./contexts/ColorContext";
import BrightContextProvider from "./contexts/BrightContext";





function App() {
  return (
    <BrightContextProvider>
      <ColorContextProvider>
        <LightContextProvider>
          <RoomContextProvider>
            <ControlPanel />
            <Footer />
          </RoomContextProvider>
        </LightContextProvider>
      </ColorContextProvider>
    </BrightContextProvider>



  )
};

export default App;
