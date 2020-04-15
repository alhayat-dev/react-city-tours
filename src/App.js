import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList></TourList>
    </React.Fragment>
  );
}

export default App;
