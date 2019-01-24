import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ currentUser }) => {
  const primaryHome = () => (
    <div className="home">
      <div className="hero-img-frame">
        <img className="hero-img" src={window.splashURL} />
      </div>
      <h1>Live interactive audience participation</h1>
      <p>Engage your audience or class in real time</p>
      <Link className="get-started" to="/signup">Get started</Link>
    </div>
  );
  const loggedinHome = () => (
    <div className="home">
      <div className="hero-img-frame">
        <img className="hero-img" src={window.splashURL} />
      </div>
      <h1>Live interactive audience participation</h1>
      <p>Engage your audience or class in real time</p>
      <Link className="get-started" to="/signup">Get started</Link>
    </div>
  );
  return currentUser ? loggedinHome() : primaryHome();
};

export default Home;