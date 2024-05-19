import React, { useState } from 'react';

function OptimizationComponent() {
  const [optimizationResult, setOptimizationResult] = useState(null);

  const handleOptimize = () => {
    fetch('http://localhost:5000/optimize', { method: 'POST' })
      .then(response => response.json())
      .then(data => setOptimizationResult(data));
  };

  return (
    <div>
      <button onClick={handleOptimize}>Optimize Routes</button>
      {optimizationResult && (
        <div>
          <h3>Optimization Result</h3>
          <p>Most Efficient Route: {optimizationResult.most_efficient.route_id} (Score: {optimizationResult.most_efficient.efficiency_score})</p>
          <p>Least Efficient Route: {optimizationResult.least_efficient.route_id} (Score: {optimizationResult.least_efficient.efficiency_score})</p>
        </div>
      )}
    </div>
  );
}

export default OptimizationComponent;
