import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import MapComponent from './MapComponent';
import OptimizationComponent from './OptimizationComponent';
import Homepage from './components/homepage';
import Login from './components/authlogin';


function App() {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Transit Efficiency Analyzer</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/app">App</Link>
            <Link to="/login">Login</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/app" element={
              <div className="app-container">
                <div className="controls">
                  <OptimizationComponent />
                  <input
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                    placeholder="Filter by route ID"
                    className="route-filter"
                  />
                </div>
                <MapComponent filter={filter} />
              </div>
            } />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
