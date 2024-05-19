import React from 'react';
import './App.css';
import MapComponent from './MapComponent';
import OptimizationComponent from './OptimizationComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Transit Efficiency Analyzer</h1>
      </header>
   
      <MapComponent />
      <OptimizationComponent />
    </div>
  );
}

export default App;
