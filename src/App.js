import React from 'react';
import './App.css';
import ControlPanel from "./views/ControlPanel";
import Footer from "./components/Footer";
import RoomContextProvider from "./contexts/RoomContext";





function App() {
  return (


    <RoomContextProvider>
      <ControlPanel />
      <Footer />
    </RoomContextProvider>



  )
};

export default App;
