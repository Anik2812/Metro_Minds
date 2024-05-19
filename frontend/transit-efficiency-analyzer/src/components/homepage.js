// src/Homepage.js
import React from 'react';
import './Homepage.css';
import AuthLogout from './authLogout';

import AuthLogin from './authlogin';

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <h2>Welcome to Metro Minds</h2>
        <h3>Smarter Routes, Better Commutes</h3>
        <p>Optimize and analyze transit routes for better efficiency and performance.</p>
        <a href="/app" className="btn-get-started">Get Started</a>
        <section className="about">
        <h3>About Us</h3>
        <p>Our tool helps you to visualize and optimize public transportation routes. Whether you are a transit authority or a researcher, our platform provides the insights you need to improve transit efficiency.</p>
      </section>
      </section>
      
      
    </div>
  );
};

export default Homepage;
