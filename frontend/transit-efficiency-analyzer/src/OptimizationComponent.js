import React, { useState } from 'react';
import './OptimizationComponent.css';

function OptimizationComponent() {
  const [optimizationResult, setOptimizationResult] = useState(null);

  const handleOptimize = () => {
    fetch('http://localhost:5000/optimize', { method: 'POST' })
      .then(response => response.json())
      .then(data => setOptimizationResult(data));
  };

  return (
    <div className="optimization-container">
      <button className="optimize-button" onClick={handleOptimize}>Optimize Routes</button>
      {optimizationResult && (
        <div className="optimization-result">
          <h3>Optimization Result</h3>
          <div>
            <h4>Most Efficient Route</h4>
            <p>Route ID: {optimizationResult.most_efficient.route_id}</p>
            <p>Travel Time: {optimizationResult.most_efficient.travel_time} minutes</p>
            <p>Number of Stops: {optimizationResult.most_efficient.num_stops}</p>
            <p>Efficiency Score: {optimizationResult.most_efficient.efficiency_score}</p>
          </div>
          <div>
            <h4>Least Efficient Route</h4>
            <p>Route ID: {optimizationResult.least_efficient.route_id}</p>
            <p>Travel Time: {optimizationResult.least_efficient.travel_time} minutes</p>
            <p>Number of Stops: {optimizationResult.least_efficient.num_stops}</p>
            <p>Efficiency Score: {optimizationResult.least_efficient.efficiency_score}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OptimizationComponent;
