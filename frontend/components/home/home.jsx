import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="home">
    <div className="hero-img-frame">
      <img className="hero-img" src={window.splashURL} />
    </div>
    <h1>Live interactive audience participation</h1>
    <p>Engage your audience or class in real time</p>
    <Link className="signup" to="/signup">Get started</Link>
  </div>
)